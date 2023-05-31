import { ImageSourcePropType } from "react-native";

export enum HomeTabNavigatorRoutes {
  COURSES = "Courses",
  MATERIALS = "Materials",
  CALENDAR = "Calendar",
  CHAT = "Chat",
}

export interface HomeTabNavigatorRoutesData {
  key: HomeTabNavigatorRoutes;
  title: String;
  icon: ImageSourcePropType;
  component: any;
}
