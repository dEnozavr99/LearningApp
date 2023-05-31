import { View, Text, FlatList } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import CourseHeader from "../../component/CourseHeader";
import { MaterialType, Topic } from "./types";
import TopicItem from "./components/TopicItem";

const MATERIALS_DATA: Topic[] = [
  {
    title: "Точка і пряма",
    materials: [
      {
        title: "Теоретичні відомості",
        type: MaterialType.THEORY,
      },
      {
        title: "Практичні завдання",
        type: MaterialType.TASK,
      },
      {
        title: "Завдання для самоконтролю",
        type: MaterialType.TASK,
      },
      {
        title: "Додаткові відомості",
        type: MaterialType.LINK,
      },
    ],
  },
  {
    title: "Площина",
    materials: [
      {
        title: "Теоретичні відомості",
        type: MaterialType.THEORY,
      },
      {
        title: "Практичні завдання",
        type: MaterialType.TASK,
      },
      {
        title: "Завдання для самоконтролю",
        type: MaterialType.TASK,
      },
      {
        title: "Додаткові відомості",
        type: MaterialType.LINK,
      },
    ],
  },
  {
    title: "Трикутник",
    materials: [
      {
        title: "Теоретичні відомості",
        type: MaterialType.THEORY,
      },
      {
        title: "Практичні завдання",
        type: MaterialType.TASK,
      },
      {
        title: "Завдання для самоконтролю",
        type: MaterialType.TASK,
      },
      {
        title: "Додаткові відомості",
        type: MaterialType.LINK,
      },
    ],
  },
];

const MaterialsScreen = () => {
  return (
    <BaseScreenView style={{ flex: 1, padding: 16, gap: 16 }}>
      <CourseHeader
        icon={require("../../assets/icons/geometry.png")}
        title="Геометрія"
      />
      <FlatList
        contentContainerStyle={{ gap: 15 }}
        data={MATERIALS_DATA}
        renderItem={({ item, index }) => (
          <TopicItem
            item={{ ...item, title: `Тема ${index + 1}. ${item.title}` }}
          />
        )}
      />
    </BaseScreenView>
  );
};

export default MaterialsScreen;
