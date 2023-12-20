import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const VideoOption = ({ title, image }: { title: string; image: any }) => {
  return (
    <TouchableOpacity
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Image source={image} />
      <Text style={{ color: Colors.text, textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default VideoOption;
