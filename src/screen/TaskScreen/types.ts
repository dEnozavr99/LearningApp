export enum TaskType {
  ONE_ANSWER,
  MULTIPLE,
  TEXT,
}

export interface Answer {
  selected: boolean;
  text: string;
}

export interface Task {
  question: string;
  type: TaskType;
  icon?: any;
  answers?: Answer[];
}
