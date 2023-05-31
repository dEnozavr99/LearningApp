import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { MaterialType, Topic } from "../types";
import Colors from "../../../theme/colors";

const CellHeight = 54;

const TopicItem = ({ item }: { item: Topic }) => {
  const [expanded, setExpanded] = useState(false);

  const getMaterialIcon = (type: MaterialType) => {
    let icon = null;

    switch (type) {
      case MaterialType.THEORY: {
        icon = require("../../../assets/icons/theory.png");

        break;
      }
      case MaterialType.TASK: {
        icon = require("../../../assets/icons/task.png");

        break;
      }
      case MaterialType.LINK: {
        icon = require("../../../assets/icons/link.png");

        break;
      }
      default: {
        break;
      }
    }

    return icon;
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleExpanded}>
      <View
        style={{
          width: "100%",
          borderRadius: 12,
          backgroundColor: Colors.secondary,
        }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.primary,
            height: CellHeight,
            borderRadius: 12,
          }}>
          <Text style={{ color: Colors.text }}>{item.title}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 8,
            paddingBottom: 8,
            paddingTop: 16,
            gap: 15,
            height: expanded ? "auto" : CellHeight,
            display: expanded ? "flex" : "none",
          }}>
          {item.materials.map((material) => {
            const imageSource = getMaterialIcon(material.type);

            return (
              <View
                key={`${item.title}_${material.type}_${material.title}`}
                style={{ gap: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <Image
                    source={imageSource}
                    style={{ tintColor: Colors.text, width: 24, height: 24 }}
                  />
                  <Text style={{ color: Colors.text, fontSize: 14 }}>
                    {material.title}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: Colors.title,
                    width: "100%",
                    height: 3,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopicItem;
