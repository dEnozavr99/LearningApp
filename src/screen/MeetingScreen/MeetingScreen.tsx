import { View, Text, FlatList } from "react-native";
import React from "react";
import BaseScreenView from "../../component/BaseScreenView";
import { useNavigation } from "@react-navigation/native";
import Attender from "./components/Attender";
import Colors from "../../theme/colors";
import VideoOption from "./components/VideoOption";

const ATTENDERS = [
  {
    fullName: "Андрій Яценко",
    image: require("../../assets/icons/andriy.png"),
  },
  {
    fullName: "Ярина Костів",
    image: require("../../assets/icons/yaryna.png"),
  },
  {
    fullName: "Тетяна Гриник",
    image: require("../../assets/icons/tetyana.png"),
  },
  {
    fullName: "Олег Красій",
    image: require("../../assets/icons/oleh.png"),
  },
  {
    fullName: "Христина Коаль",
    image: require("../../assets/icons/chrystyna.png"),
  },
  {
    fullName: "Маркіян Романів",
    image: require("../../assets/icons/markiyan.png"),
  },
];

const MeetingScreen = ({ route }) => {
  const navigation = useNavigation();

  const params = route.params;

  return (
    <BaseScreenView style={{ flex: 1 }} homeBarBackgroundColor={Colors.primary}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={ATTENDERS}
          renderItem={({ item, index }) => (
            <>
              <Attender {...item} />
              {index % 2 == 0 && index !== ATTENDERS.length - 1 && (
                <View style={{ width: 16 }} />
              )}
            </>
          )}
          numColumns={2}
          contentContainerStyle={{ flex: 1, gap: 16 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors.primary,
          height: 89,
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 8,
        }}>
        <VideoOption
          title="Замовкнути"
          image={require("../../assets/icons/microphone.png")}
        />
        <VideoOption
          title="Вимкнути камеру"
          image={require("../../assets/icons/camera.png")}
        />
        <VideoOption
          title="Поширити екран"
          image={require("../../assets/icons/share.png")}
        />
        <VideoOption
          title="Покинути зустріч"
          image={require("../../assets/icons/leave.png")}
        />
      </View>
    </BaseScreenView>
  );
};

export default MeetingScreen;
