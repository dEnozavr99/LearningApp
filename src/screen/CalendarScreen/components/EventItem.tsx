import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const EventItem = ({
  time,
  icon,
  title,
}: {
  time: string;
  icon: any;
  title: string;
}) => {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ color: Colors.text, fontSize: 14 }}>{time}</Text>
      <View style={{ backgroundColor: Colors.title, height: 3 }} />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderRadius: 12,
          padding: 8,
          alignItems: "center",
          gap: 8,
          backgroundColor: Colors.primary,
        }}>
        <Image
          style={{ tintColor: Colors.text, width: 32, height: 32 }}
          source={icon}
        />
        <Text style={{ color: Colors.text, fontSize: 14 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventItem;
