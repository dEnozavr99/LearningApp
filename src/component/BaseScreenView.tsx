import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import Colors from "../theme/colors";

const BaseScreenView = ({
  children,
  style,
}: {
  children: any;
  style?: StyleProp<ViewStyle> | undefined;
}) => {
  return (
    <View style={[{ backgroundColor: Colors.background }, style]}>
      {children}
    </View>
  );
};

export default BaseScreenView;
