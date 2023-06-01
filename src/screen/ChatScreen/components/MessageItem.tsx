import { View, Text } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";
import { Message } from "../../ChatsScreen/types";

const MessageItem = ({ author, text }: Message) => {
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        padding: 8,
        gap: 8,
        borderRadius: 12,
        width: "50%",
        alignSelf:
          author.fullName === "Андрій Яценко" ? "flex-end" : "flex-start",
      }}>
      <Text style={{ color: Colors.title, fontSize: 12 }}>
        {author.fullName}
      </Text>
      <Text style={{ color: Colors.text, fontSize: 12 }}>{text}</Text>
    </View>
  );
};

export default MessageItem;
