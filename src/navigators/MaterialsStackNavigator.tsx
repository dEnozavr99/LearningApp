import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MaterialsScreen from "../screen/MaterialsScreen/MaterialsScreen";
import TaskScreen from "../screen/TaskScreen/TaskScreen";

const Stack = createStackNavigator();

const MaterialsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name={"Materials"} component={MaterialsScreen} />
      <Stack.Screen name={"Task"} component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default MaterialsStackNavigator;
