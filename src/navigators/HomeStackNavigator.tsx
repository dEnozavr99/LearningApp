import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "../navigators/HomeTabNavigator";
import MaterialsScreen from "../screen/MaterialsScreen/MaterialsScreen";
import TaskScreen from "../screen/TaskScreen/TaskScreen";
import MeetingScreen from "../screen/MeetingScreen/MeetingScreen";
import ChatScreen from "../screen/ChatScreen/ChatScreen";
import Colors from "../theme/colors";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTintColor: Colors.title,
        headerPressColor: Colors.text,
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
      })}>
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Materials" component={MaterialsScreen} />
      <Stack.Screen name={"Task"} component={TaskScreen} />
      <Stack.Screen name="Meeting" component={MeetingScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
