import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../theme/colors";

const Header = ({ style }: { style: any }) => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.secondary,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 50,
          paddingBottom: 10,
        },
        style,
      ]}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 45,
          height: 45,
          borderRadius: 23,
          backgroundColor: Colors.title,
        }}>
        <Image source={require("../assets/icons/avatar.png")} />
      </View>
      <Text style={{ color: Colors.title, fontSize: 32 }}>7-A</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 45,
          height: 45,
        }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: 15,
            height: 15,
            borderRadius: 8,
            backgroundColor: Colors.title,
            zIndex: 1,
          }}>
          <Text style={{ color: Colors.secondary, fontSize: 12 }}>3</Text>
        </View>
        <Image source={require("../assets/icons/notifications.png")} />
      </View>
    </View>
  );
};

export default Header;
