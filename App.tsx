import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "./consts/Colors";
import GlobalContext from "./context/";
import { ChatScreen, GroupsPage, Home, ChatScreenNavigator } from "./pages";
import { Chat } from "./pages/Chat";
import { ProfessionalsPage } from "./pages/Professionals";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const colors = {
  primary: COLORS.primary,
};

// extend the theme
export const theme = extendTheme({ config, colors });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalContext>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </GlobalContext>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Home") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Chat List") {
            iconName = focused ? "message-text" : "message-text-outline";
          } else if (route.name === "Grupos") {
            iconName = focused ? "account-group" : "account-group-outline";
          } else if (route.name === "Profissionais") {
            iconName = focused ? "account-tie" : "account-tie-outline";
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat List"
        component={ChatScreenNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Grupos"
        component={GroupsPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profissionais"
        component={ProfessionalsPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
