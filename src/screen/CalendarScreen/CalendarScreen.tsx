import { View, Text } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import CalendarHeader from "./components/CalendarHeader";
import { FlatList } from "react-native-gesture-handler";
import { Event } from "./types";
import EventItem from "./components/EventItem";

const EVENT_DATA: Event[] = [
  {
    time: "08.30",
    icon: require("../../assets/icons/geography.png"),
    title: "Географія",
  },
  {
    time: "09.25",
    icon: require("../../assets/icons/algebra.png"),
    title: "Алгебра",
  },
  {
    time: "10.20",
    icon: require("../../assets/icons/geometry.png"),
    title: "Геометрія",
  },
  {
    time: "11.25",
    icon: require("../../assets/icons/chemistry.png"),
    title: "Хімія",
  },
  {
    time: "12.40",
    icon: require("../../assets/icons/physics.png"),
    title: "Фізика",
  },
];

const CalendarScreen = () => {
  return (
    <BaseScreenView style={{ flex: 1, gap: 30, paddingHorizontal: 16 }}>
      <CalendarHeader />
      <FlatList
        contentContainerStyle={{ gap: 25 }}
        data={EVENT_DATA}
        renderItem={({ item }) => <EventItem {...item} />}
      />
    </BaseScreenView>
  );
};

export default CalendarScreen;
