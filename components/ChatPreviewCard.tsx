import { Avatar, Box, Flex, Text } from "native-base";
import React from "react";

import { ChatPreview } from "../types";

export const ChatPreviewCard: React.FC<
  ChatPreview & { openChat: () => void }
> = ({ nome, avatar, ultimaMensagem, hora, openChat }) => {
  return (
    <Box
      onTouchEnd={openChat}
      borderRadius="md"
      backgroundColor={"white"}
      width="full"
    >
      <Flex padding={4} direction="row" align={"center"}>
        <Avatar
          source={{
            uri: avatar,
          }}
          size="xl"
        >
          {nome
            .split(" ")
            .map((parte) => parte[0])
            .join(" ")}
        </Avatar>
        <Box marginLeft={"3"} maxW={"65%"}>
          <Text fontSize={"md"} marginBottom={"2"} fontWeight={"semibold"}>
            {nome}
          </Text>
          <Text fontSize={"sm"}>{ultimaMensagem}</Text>
          <Text color={"gray.500"} fontSize={"xs"}>
            {hora}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
