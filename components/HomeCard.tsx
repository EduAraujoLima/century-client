import { Box, Center, Flex, Heading } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeCardProps } from "../types/HomeCardProps";

export const HomeCard: React.FC<HomeCardProps> = ({ title, color, icon }) => {
  return (
    <Box borderRadius="md" backgroundColor={"white"} width="full">
      <Center padding={"12"}>
        <Flex align={"center"} direction={"row"}>
          <Icon name={icon} size={42} color={color} />
          <Heading color={color} ml={3}>
            {title}
          </Heading>
        </Flex>
      </Center>
    </Box>
  );
};
