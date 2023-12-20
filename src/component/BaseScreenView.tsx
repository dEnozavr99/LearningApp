import { View, StyleProp, ViewStyle, SafeAreaView } from "react-native";
import React from "react";
import Colors from "../theme/colors";

const BaseScreenView = ({
  children,
  style,
  homeBarBackgroundColor,
}: {
  children: any;
  style?: StyleProp<ViewStyle> | undefined;
  homeBarBackgroundColor?: string | undefined;
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: homeBarBackgroundColor ?? Colors.background,
      }}>
      <View style={[{ backgroundColor: Colors.background }, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default BaseScreenView;
