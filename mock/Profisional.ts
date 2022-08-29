import { Profissionais, Profissional } from "../types";
import { faker } from "@faker-js/faker";

const gerarProfissional = (): Profissional => {
  return {
    id: Number(faker.random.numeric()),
    nome: faker.name.fullName(),
    especialidade: faker.name.jobTitle(),
    descricao: faker.lorem.paragraph(),
    foto: faker.image.avatar(),
    telefone: faker.phone.number("(##) #####-####"),
    email: faker.internet.email(),
    endereco: faker.address.streetAddress(),
    crp: faker.name.findName(),
  };
};

export const gerarListaDeProfissionais = (
  quantidade: number
): Profissionais => {
  const lista: Profissionais = [];
  for (let i = 0; i < quantidade; i++) {
    lista.push(gerarProfissional());
  }
  return lista;
};
