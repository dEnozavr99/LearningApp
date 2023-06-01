import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../theme/colors";
import { Answer, Task, TaskType } from "../types";
import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox";

const TaskComponent = ({ item }: { item: Task }) => {
  const [answers, setAnswers] = useState(item.answers);

  const AnswerComponent =
    item.type === TaskType.ONE_ANSWER ? RadioButton : CheckBox;

  const pickAnswer = (answer: Answer) => {
    const answerToPick = answers?.find((item) => item.text === answer.text);

    let updated: any[] | undefined = [];
    // if (item.type === TaskType.ONE_ANSWER) {
    //   const previouslySelected = answers?.find((item) => item.selected);

    //   const updated = answers?.map((item) => {
    //     return {
    //       ...item,
    //       selected:
    //         item.text == previouslySelected?.text ? false : item.selected,
    //     };
    //   });

    //   setAnswers(updated);
    // }

    updated = answers?.map((item) => {
      return { ...item, selected: answerToPick?.text == item.text };
    });
  };

  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: 8,
        gap: 8,
      }}>
      <Text style={{ color: Colors.text, fontSize: 14 }}>{item.question}</Text>
      {item.icon && (
        <Image source={item.icon} style={{ alignSelf: "center" }} />
      )}
      <View
        style={{ height: 3, width: "100%", backgroundColor: Colors.title }}
      />
      <View style={{ gap: 8 }}>
        {answers?.map((answer) => (
          <AnswerComponent
            title={answer.text}
            isSelected={answer.selected}
            toggleSelected={() => {}}
          />
        ))}
        {answers == null && (
          <TextInput
            multiline
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 12,
              color: Colors.text,
              padding: 8,
              fontSize: 14,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default TaskComponent;
