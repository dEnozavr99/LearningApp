import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const Attender = ({ fullName, image }: { fullName: string; image: any }) => {
  return (
    <View style={{ flex: 1, borderRadius: 12, width: 165, height: 165 }}>
      <Image
        source={image}
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          backgroundColor: Colors.primary,
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: 6,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}>
        <Text style={{ color: Colors.text }}>{fullName}</Text>
      </View>
    </View>
  );
};

export default Attender;
