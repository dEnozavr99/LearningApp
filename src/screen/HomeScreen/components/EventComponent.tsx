import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const EventComponent = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Meeting", { title: title });
      }}
      style={{
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        width: 150,
        height: 54,
        flex: 1,
      }}>
      <Text
        style={{
          color: Colors.text,
          textAlign: "center",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default EventComponent;
