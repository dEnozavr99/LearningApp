import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const Course = ({
  icon,
  title,
  onPress,
}: {
  icon: any;
  title: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        width: 150,
        height: 150,
        borderRadius: 12,
        gap: 30,
      }}>
      <Image source={icon} />
      <Text style={{ color: Colors.text }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Course;
