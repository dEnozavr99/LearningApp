import { View, Text, Image } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeTabNavigatorRoutes, HomeTabNavigatorRoutesData } from "./types";
import Colors from "../theme/colors";

const HomeScreen = (): JSX.Element => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{"Home"}</Text>
  </View>
);

const SettingsScreen = (): JSX.Element => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{"Settings"}</Text>
  </View>
);

const TabRoutesData: HomeTabNavigatorRoutesData[] = [
  {
    key: HomeTabNavigatorRoutes.COURSES,
    title: "Курси",
    icon: require("../assets/icons/courses.png"),
    component: HomeScreen,
  },
  {
    key: HomeTabNavigatorRoutes.MATERIALS,
    title: "Матеріали",
    icon: require("../assets/icons/materials.png"),
    component: SettingsScreen,
  },
  {
    key: HomeTabNavigatorRoutes.CALENDAR,
    title: "Календар",
    icon: require("../assets/icons/calendar.png"),
    component: SettingsScreen,
  },
  {
    key: HomeTabNavigatorRoutes.CHAT,
    title: "Чат",
    icon: require("../assets/icons/chat.png"),
    component: SettingsScreen,
  },
];

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ focused }): React.ReactNode => {
          const routeData = TabRoutesData.find(
            (item) => item.key === route.name,
          );
          const iconColor = focused ? Colors.title : Colors.text;

          return (
            <Image source={routeData!.icon} style={{ tintColor: iconColor }} />
          );
        },
        tabBarInactiveTintColor: Colors.text,
        tabBarActiveTintColor: Colors.title,
      })}>
      {TabRoutesData.map((tabRouteData) => (
        <Tab.Screen
          key={tabRouteData.key}
          name={tabRouteData.key}
          component={HomeScreen}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
