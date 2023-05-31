import { ImageSourcePropType } from "react-native";

export enum HomeTabNavigatorRoutes {
  COURSES = "Courses",
  MATERIALS = "Materials",
  CALENDAR = "Calendar",
  CHAT = "Chat",
}

export interface HomeTabNavigatorRoutesData {
  key: HomeTabNavigatorRoutes;
  title: string;
  icon: ImageSourcePropType;
  component: any;
}
