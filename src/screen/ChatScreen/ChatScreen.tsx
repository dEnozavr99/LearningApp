import { View, Text } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import CourseHeader from "../../component/CourseHeader";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import { Message } from "../ChatsScreen/types";
import MessageItem from "./components/MessageItem";

const MESSAGES_DATA: Message[] = [
  {
    author: {
      fullName: "Андрій Яценко",
      icon: require("../../assets/icons/andiy.png"),
    },
    text: "Добрий день, учні. Темою сьогоднішнього уроку будуть “Площини”",
  },
  {
    author: {
      fullName: "Ярина Костів",
      icon: require("../../assets/icons/yaryna.png"),
    },
    text: "Добрий день, а на котрій сторінці підручника дана тема?",
  },
  {
    author: {
      fullName: "Олег Красій",
      icon: require("../../assets/icons/andiy.png"),
    },
    text: "Добрий день, не зможу підʼєднатися до уроку, через стан здоровʼя. Довідку від лікаря вже вислав вам на пошту.",
  },
  {
    author: {
      fullName: "Андрій Яценко",
      icon: require("../../assets/icons/andiy.png"),
    },
    text: "Гаразд Олеже, бачив ваш документ. Решта підʼєднуймося.",
  },
];

const ChatScreen = ({ route }) => {
  const navigation = useNavigation();

  const { icon, title } = route.params;

  return (
    <BaseScreenView
      style={{ flex: 1, gap: 16, paddingTop: 8, paddingHorizontal: 16 }}>
      <CourseHeader icon={icon} title={title} />
      <FlatList
        contentContainerStyle={{ gap: 28 }}
        data={MESSAGES_DATA}
        renderItem={({ item }) => <MessageItem {...item} />}
      />
    </BaseScreenView>
  );
};

export default ChatScreen;
