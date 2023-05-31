import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const EventComponent = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        width: 150,
        height: 54,
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
