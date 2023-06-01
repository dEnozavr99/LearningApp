import { View, Text } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import { FlatList } from "react-native-gesture-handler";
import { IChatItem } from "./types";
import ChatItem from "./components/ChatItem";

const CHATS_DATA: IChatItem[] = [
  {
    icon: require("../../assets/icons/geography.png"),
    title: "Географія",
    messages: [],
    messageCount: 14,
  },
  {
    icon: require("../../assets/icons/algebra.png"),
    title: "Алгебра",
    messages: [],
    messageCount: 2,
  },
  {
    icon: require("../../assets/icons/geometry.png"),
    title: "Геометрія",
    messages: [],
    messageCount: 0,
  },
  {
    icon: require("../../assets/icons/chemistry.png"),
    title: "Хімія",
    messages: [],
    messageCount: 20,
  },
  {
    icon: require("../../assets/icons/physics.png"),
    title: "Фізика",
    messages: [],
    messageCount: 5,
  },
];

const ChatsScreen = () => {
  return (
    <BaseScreenView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 52 }}>
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        data={CHATS_DATA}
        renderItem={({ item }) => <ChatItem {...item} />}
      />
    </BaseScreenView>
  );
};

export default ChatsScreen;
