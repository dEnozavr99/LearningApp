import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const CalendarHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 35,
      }}>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/arrow_left.png")} />
      </TouchableOpacity>
      <Text style={{ color: Colors.text, fontSize: 20 }}>28.04.2023</Text>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/arrow_right.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarHeader;
