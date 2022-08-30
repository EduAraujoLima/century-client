import { ScrollView, VStack } from "native-base";
import React, { useContext } from "react";

import {
  PageHeader,
  ProfessionalCard,
  ProfessionalDetailsModal,
} from "../components/";
import ProfissionalContext from "../context/profisssional";
import { Profissional } from "../types/Profissional";

export const ProfessionalsPage = () => {
  const { state, selectProfessional } = useContext(ProfissionalContext);
  const [modalVisible, setModalVisible] = React.useState(false);

  const showProfessionalDetails = (profissional: Profissional) => {
    selectProfessional(profissional);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <>
      <ProfessionalDetailsModal modalVisible={modalVisible} closeModal={closeModal}/>
      <PageHeader icon="search" placeholder="Buscar Profissional" find={null} />
      <ScrollView px={8}>
        <VStack space={3} mt={4}>
          {state.profissionais.map((profissional) => (
            <ProfessionalCard
              showProfessionalDetails={(): void => {
                showProfessionalDetails(profissional);
              }}
              key={profissional.id}
              {...profissional}
            />
          ))}
        </VStack>
      </ScrollView>
    </>
  );
};
