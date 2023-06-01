import { View, Text, FlatList } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import CourseHeader from "../../component/CourseHeader";
import TaskComponent from "./components/TaskComponent";
import { Task, TaskType } from "./types";

const TASKS_DATA: Task[] = [
  {
    question: "Через скільки точок можна провести пряму?",
    type: TaskType.ONE_ANSWER,
    answers: [
      {
        selected: false,
        text: "2",
      },
      {
        selected: false,
        text: "4",
      },
      {
        selected: false,
        text: "1",
      },
      {
        selected: false,
        text: "0",
      },
    ],
  },
  {
    question: "Виберіть правильне буквенне позначення для відрізку",
    type: TaskType.MULTIPLE,
    answers: [
      {
        selected: false,
        text: "2",
      },
      {
        selected: false,
        text: "4",
      },
      {
        selected: false,
        text: "1",
      },
      {
        selected: false,
        text: "0",
      },
    ],
  },
  {
    question: "Які точки лежать на прямій а?",
    type: TaskType.TEXT,
    icon: require("../../assets/icons/task_image.png"),
  },
];

const TaskScreen = () => {
  return (
    <BaseScreenView
      style={{
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 8,
        gap: 8,
      }}>
      <CourseHeader
        title="Геометрія"
        icon={require("../../assets/icons/geometry.png")}
      />
      <FlatList
        contentContainerStyle={{
          gap: 8,
        }}
        data={TASKS_DATA}
        renderItem={({ item }) => <TaskComponent item={item} />}
      />
    </BaseScreenView>
  );
};

export default TaskScreen;
