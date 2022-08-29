import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
} from "native-base";
import React from "react";

import profilePicture from "../assets/profile.jpeg";
import { HomeCard } from "../components";
import { COLORS } from "../consts/Colors";
import { HomeCardProps } from "../types/HomeCardProps";

export const Home = () => {
  const props: Array<HomeCardProps> = [
    {
      color: COLORS.primary,
      title: "Meu diário",
      icon: "book",
    },
    {
      color: COLORS.primary,
      title: "Biblioteca",
      icon: "book-open",
    },
  ];
  return (
    <Box paddingX={"6"}>
      <Flex direction="row" padding="4" align={"center"}>
        <Avatar
          source={{
            uri: profilePicture,
          }}
          size="xl"
        >
          WM
        </Avatar>
        <Flex direction="column" marginLeft={"3"}>
          <Heading size={"lg"} marginBottom={"2"}>
            Olá
          </Heading>
          <Text fontSize={"md"}>Wanda Maximoff</Text>
        </Flex>
      </Flex>
      <VStack space="6" mt={3}>
        {props.map((props, index) => (
          <HomeCard {...props} />
        ))}
      </VStack>
    </Box>
  );
};
