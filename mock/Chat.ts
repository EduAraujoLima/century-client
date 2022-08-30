import { faker } from "@faker-js/faker";
import { ChatPreview } from "../types";

const createChatPreview = (): ChatPreview => {
  return {
    id: Number(faker.random.numeric(5)),
    avatar: faker.image.avatar(),
    nome: faker.name.fullName(),
    ultimaMensagem: faker.lorem.sentence(),
    hora: faker.date.recent().toLocaleTimeString(),
  };
};

export const createChatPreviewList = (quantidade: number): ChatPreview[] => {
  const lista: ChatPreview[] = [];
  for (let i = 0; i < quantidade; i++) {
    lista.push(createChatPreview());
  }
  return lista;
};
