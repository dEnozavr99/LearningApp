import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import React from "react";
import Colors from "../../../theme/colors";
import { Answer } from "../types";

const CheckBox = ({
  title,
  isSelected,
  toggleSelected,
}: {
  title: string;
  isSelected: boolean;
  toggleSelected: (answer: Answer) => void;
}) => {
  const onPress = () => {
    const answer: Answer = { text: title, selected: isSelected };

    toggleSelected(answer);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
