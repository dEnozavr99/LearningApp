import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../theme/colors";

const CourseHeader = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
      }}>
      <Image
        source={icon}
        style={{ tintColor: Colors.text, width: 32, height: 32 }}
      />
      <Text style={{ color: Colors.text, fontSize: 14 }}>{title}</Text>
    </View>
  );
};

export default CourseHeader;
