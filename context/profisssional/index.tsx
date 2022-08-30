import React, { createContext, useState } from "react";
import { Profissionais, Profissional } from "../../types/Profissional";
import { gerarListaDeProfissionais } from "../../mock/Profisional";

type ProfissionalContextModel = {
  profissionais: Profissionais;
  profissionalSelecionado: Profissional;
};

type PropsProfissionalContext = {
  state: ProfissionalContextModel;
  selectProfessional: React.Dispatch<React.SetStateAction<Profissional>>;
};

const DEFAULT_VALUE: PropsProfissionalContext = {
  state: {
    profissionais: gerarListaDeProfissionais(10),
    profissionalSelecionado: null,
  },
  selectProfessional: () => {},
};

const ProfissionalContext =
  createContext<PropsProfissionalContext>(DEFAULT_VALUE);


const ProfissionalContextProvider: React.FC = ({ children }) => {
    const [profissionalSelecionado, setProfissionalSelecionado] = useState<Profissional>(null);
    const [profissionais, setProfissionais] = useState<Profissionais>(gerarListaDeProfissionais(10));
    return (
        <ProfissionalContext.Provider value={{
        state: {
            profissionais,
            profissionalSelecionado,
        },
        selectProfessional: setProfissionalSelecionado,
        }}>
        {children}
        </ProfissionalContext.Provider>
    );
}

export {ProfissionalContextProvider}

export default ProfissionalContext;