import { Image, View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../../theme/colors";
import { IChatItem } from "../types";
import { useNavigation } from "@react-navigation/core";

const ChatItem = ({ icon, title, messageCount }: IChatItem) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderBottomColor: Colors.title,
        borderBottomWidth: 3,
      }}
      onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: Colors.secondary,
            width: 64,
            height: 64,
            borderRadius: 32,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            style={{ width: 48, height: 48, tintColor: Colors.text }}
            source={icon}
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ color: Colors.text, fontSize: 18 }}>{title}</Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
            }}>{`Непрочитаних повідомлень: ${messageCount}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
