import { View, Text, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BaseScreenView from "../../component/BaseScreenView";
import Colors from "../../theme/colors";
import EventComponent from "./components/EventComponent";
import Course from "./components/Course";

const EVENTS = [
  "Домашнє завдання \nз геометрії",
  "Урок історії",
  "Контрольна з \nалгебри",
  "Урок географії",
  "Самостійна з хімії",
];

const COURSES = [
  {
    icon: require("../../assets/icons/geometry.png"),
    title: "Геометрія",
  },
  {
    icon: require("../../assets/icons/algebra.png"),
    title: "Алгебра",
  },
  {
    icon: require("../../assets/icons/chemistry.png"),
    title: "Хімія",
  },
  {
    icon: require("../../assets/icons/physics.png"),
    title: "Фізика",
  },
];

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <BaseScreenView style={{ flex: 1, padding: 25 }}>
      <Text style={{ color: Colors.title, fontSize: 20, marginBottom: 18 }}>
        Події
      </Text>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 18 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={EVENTS}
        renderItem={({ item, index }) => (
          <>
            <EventComponent title={item} />
            {index % 2 == 0 && index !== EVENTS.length - 1 && (
              <View style={{ width: 18 }} />
            )}
          </>
        )}
      />
      <Text style={{ color: Colors.title, fontSize: 20, marginBottom: 18 }}>
        Предмети
      </Text>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 18 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={COURSES}
        renderItem={({ item, index }) => (
          <>
            <Course
              title={item.title}
              icon={item.icon}
              onPress={() =>
                navigation.navigate("Materials", { course: item.title })
              }
            />
            {index % 2 == 0 && index !== COURSES.length - 1 && (
              <View style={{ width: 18 }} />
            )}
          </>
        )}
      />
    </BaseScreenView>
  );
};

export default HomeScreen;
