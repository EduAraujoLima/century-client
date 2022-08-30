import React from "react";

import { ProfissionalContextProvider } from "./profisssional";

const GlobalContext: React.FC = ({ children }) => {
  return <ProfissionalContextProvider>{children}</ProfissionalContextProvider>;
};

export default GlobalContext;
