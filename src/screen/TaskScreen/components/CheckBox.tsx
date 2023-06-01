import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";

const CheckBox = ({
  title,
  isSelected,
  toggleSelected,
}: {
  title: string;
  isSelected: boolean;
  toggleSelected: () => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={toggleSelected}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          width: "100%",
        }}>
        <View
          style={{
            width: 12,
            height: 12,
            borderWidth: 2,
            borderColor: Colors.text,
            backgroundColor: isSelected ? Colors.primary : Colors.text,
          }}
        />
        <Text style={{ color: Colors.text, fontSize: 14 }}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;
