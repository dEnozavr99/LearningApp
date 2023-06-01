import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import CourseHeader from "../../component/CourseHeader";
import TaskComponent from "./components/TaskComponent";
import { Task, TaskType } from "./types";
import { useNavigation } from "@react-navigation/core";
import Colors from "../../theme/colors";

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
  const navigation = useNavigation();

  const onSubmit = () => {
    Alert.alert(
      "Відправити відповідь",
      "Ваша відпвідь буде перевірена вчителем",
      [
        {
          text: "Так",
          style: "destructive",
          onPress: () => {
            navigation.goBack();
          },
        },
        { text: "Ні", style: "cancel" },
      ],
    );
  };

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
      <KeyboardAvoidingView>
        <FlatList
          contentContainerStyle={{
            gap: 8,
          }}
          data={TASKS_DATA}
          renderItem={({ item }) => <TaskComponent item={item} />}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          borderWidth: 3,
          borderColor: Colors.secondary,
          padding: 16,
        }}
        onPress={onSubmit}>
        <Text style={{ color: Colors.title, fontSize: 16 }}>
          {"Відправити"}
        </Text>
      </TouchableOpacity>
    </BaseScreenView>
  );
};

export default TaskScreen;
