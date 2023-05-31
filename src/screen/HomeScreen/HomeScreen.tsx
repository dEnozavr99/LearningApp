import { View, Text } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";

const HomeScreen = (): JSX.Element => (
  <BaseScreenView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{"Home"}</Text>
  </BaseScreenView>
);

export default HomeScreen;
