export type Profissional = {
  id: number;
  nome: string;
  especialidade: string;
  descricao: string;
  foto: string;
  telefone: string;
  email: string;
  endereco: string;
  crp: string;
};

export type Profissionais = Array<Profissional>;

//export type ProfissionalCard = Pick<Profissional, "nome" | "foto" | "crp">;

//export type ProfissionalCardList = Array<ProfissionalCard>;
