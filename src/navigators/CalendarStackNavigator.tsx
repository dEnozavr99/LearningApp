import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "../screen/CalendarScreen/CalendarScreen";
import MeetingScreen from "../screen/MeetingScreen/MeetingScreen";

const Stack = createStackNavigator();

const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Meeting" component={MeetingScreen} />
    </Stack.Navigator>
  );
};

export default CalendarStackNavigator;
