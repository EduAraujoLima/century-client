import { Avatar, Box, Flex, Text } from 'native-base';
import React from 'react';

import { Profissional } from '../types/Profissional';

export const ProfessionalCard: React.FC<Profissional & {showProfessionalDetails: () => void}> = ({
  nome,
  foto,
  crp,
  showProfessionalDetails,
}) => {
  return (
    <Box onTouchEnd={showProfessionalDetails} borderRadius="md" backgroundColor={"white"} width="full">
        <Flex padding={4} direction="row" align={'center'}>
          <Avatar
            source={{
              uri: foto,
            }}
            size="xl"
          >
            {nome
              .split(" ")
              .map((parte) => parte[0])
              .join(" ")}
          </Avatar>
          <Flex direction="column" marginLeft={"3"}>
            <Text fontSize={"md"} marginBottom={"2"} fontWeight={"semibold"}>
              {nome}
            </Text>
            <Text fontSize={"md"}>CRP: {crp}</Text>
          </Flex>
        </Flex>
    </Box>
  );
};
