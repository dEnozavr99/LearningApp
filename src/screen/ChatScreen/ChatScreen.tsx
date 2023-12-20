import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import BaseScreenView from "../../component/BaseScreenView";
import CourseHeader from "../../component/CourseHeader";
import MessageItem from "./components/MessageItem";

import { Message } from "../ChatsScreen/types";
import Colors from "../../theme/colors";

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

  const [messages, setMessages] = useState(MESSAGES_DATA);
  const [text, setText] = useState("");

  const { icon, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CourseHeader icon={icon} title={title} />,
    });
  }, []);

  const addMessage = () => {
    if (text === "") {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        author: {
          fullName: "Андрій Яценко",
          icon: require("../../assets/icons/andiy.png"),
        },
        text: text,
      },
    ]);

    setText("");
  };

  return (
    <BaseScreenView
      style={{ flex: 1, paddingTop: 8 }}
      homeBarBackgroundColor={Colors.primary}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={{ flex: 1, gap: 16, paddingHorizontal: 16 }}>
          <FlatList
            contentContainerStyle={{ gap: 28 }}
            data={messages}
            renderItem={({ item }) => <MessageItem {...item} />}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: Colors.primary,
            justifyContent: "space-between",
            paddingHorizontal: 8,
            height: 55,
            alignItems: "center",
          }}>
          <TextInput
            style={{
              height: 45,
              color: Colors.text,
            }}
            placeholder="Введіть повідомлення..."
            placeholderTextColor={Colors.secondary}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={addMessage}>
            <Image
              source={require("../../assets/icons/send.png")}
              style={{ width: 45, height: 45 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </BaseScreenView>
  );
};

export default ChatScreen;
