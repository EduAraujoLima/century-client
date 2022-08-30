import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { ScrollView, VStack } from "native-base";
import React from "react";

import { ChatPreviewCard, PageHeader } from "../components";
import { createChatPreviewList } from "../mock/Chat";
import { Chat } from "./Chat";

const Stack = createNativeStackNavigator();

export const ChatScreen = () => {
  const chatList = createChatPreviewList(1);

  const navigation = useNavigation<ChatScreenProp>();

  const openChat = () => {
    navigation.navigate("Chat");
  };
  return (
    <>
      <PageHeader icon="search" placeholder="Buscar mensagem" find={null} />
      <ScrollView px={8}>
        <VStack space={3} mt={4}>
          {chatList.map((chat) => (
            <ChatPreviewCard openChat={openChat} key={chat.id} {...chat} />
          ))}
        </VStack>
      </ScrollView>
      <ChatScreenNavigator />
    </>
  );
};

export type ChatScreenProp = NativeStackNavigationProp<
  ChatStackParamList,
  "ChatList"
>;

export type ChatStackParamList = {
  Chat: undefined;
  ChatList: undefined;
};

export const ChatScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatScreen} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
