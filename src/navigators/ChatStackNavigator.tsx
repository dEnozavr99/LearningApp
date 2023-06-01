import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatsScreen from "../screen/ChatsScreen/ChatsScreen";
import ChatScreen from "../screen/ChatScreen/ChatScreen";

const Stack = createStackNavigator();

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Chats" component={ChatsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;
