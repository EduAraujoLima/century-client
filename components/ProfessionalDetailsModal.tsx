import { Avatar, Center, Modal, Flex, VStack, Text } from "native-base";
import React, { useContext } from "react";
import ProfissionalContext from "../context/profisssional";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ProfessionalDetailsModal: React.FC<
  ProfessionalDetailsModalProps & { closeModal: () => void }
> = ({ modalVisible, closeModal }) => {
  const { state } = useContext(ProfissionalContext);
  const iconSize = 32;
  return (
    <Modal isOpen={modalVisible} onClose={closeModal} size={'full'}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{state.profissionalSelecionado?.nome}</Modal.Header>
        <Modal.Body paddingX={8}>
          <Flex direction="column" align={"center"}>
            <Avatar
              source={{
                uri: state.profissionalSelecionado?.foto,
              }}
              size={"xl"}
            ></Avatar>
            <VStack>
              <Flex direction="row" align={'center'}>
                <Icon name="account-credit-card" />
                <Text>{state.profissionalSelecionado?.crp}</Text>
              </Flex>
              <Flex direction="row" align={'center'}>
                <Icon name="account-star" size={iconSize}/>
                <Text>{state.profissionalSelecionado?.especialidade}</Text>
              </Flex>
              <Flex direction="row" align={'center'}>
                <Icon name="cellphone" size={iconSize} />
                <Text>{state.profissionalSelecionado?.telefone}</Text>
              </Flex>
              <Flex direction="row" align={'center'}>
                <Icon name="email" size={iconSize} />
                <Text>{state.profissionalSelecionado?.email}</Text>
              </Flex>
              <Flex direction="row" align={'center'}>
                <Icon name="map-marker" size={iconSize} />
                <Text>{state.profissionalSelecionado?.endereco}</Text>
              </Flex>
            </VStack>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

type ProfessionalDetailsModalProps = {
  modalVisible: boolean;
};
