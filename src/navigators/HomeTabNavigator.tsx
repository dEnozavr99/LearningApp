import { View, Text, Image } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeTabNavigatorRoutes, HomeTabNavigatorRoutesData } from "./types";
import Colors from "../theme/colors";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import Header from "../component/Header";
import MaterialsScreen from "../screen/MaterialsScreen/MaterialsScreen";
import CalendarScreen from "../screen/CalendarScreen/CalendarScreen";
import ChatsScreen from "../screen/ChatsScreen/ChatsScreen";

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
    component: MaterialsScreen,
  },
  {
    key: HomeTabNavigatorRoutes.CALENDAR,
    title: "Календар",
    icon: require("../assets/icons/calendar.png"),
    component: CalendarScreen,
  },
  {
    key: HomeTabNavigatorRoutes.CHAT,
    title: "Чат",
    icon: require("../assets/icons/chat.png"),
    component: ChatsScreen,
  },
];

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        header: ({ navigation, route, options }) => (
          <Header style={options.headerStyle} />
        ),
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        tabBarStyle: { backgroundColor: Colors.secondary, height: 90 },
        tabBarLabelStyle: { fontSize: 18 },
        tabBarIcon: ({ focused }): React.ReactNode => {
          const routeData = TabRoutesData.find(
            (item) => item.title === route.name,
          );
          const iconColor = focused ? Colors.title : Colors.text;

          return (
            <Image
              source={routeData!.icon}
              style={{ tintColor: iconColor, height: 28 }}
            />
          );
        },
        tabBarInactiveTintColor: Colors.text,
        tabBarActiveTintColor: Colors.title,
        tabBarActiveBackgroundColor: Colors.secondary,
        tabBarInactiveBackgroundColor: Colors.secondary,
      })}>
      {TabRoutesData.map((tabRouteData) => (
        <Tab.Screen
          key={tabRouteData.key}
          name={tabRouteData.title}
          component={tabRouteData.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
