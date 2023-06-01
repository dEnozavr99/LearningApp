export enum MaterialType {
  THEORY = "theory",
  TASK = "task",
  LINK = "link",
}

export interface Material {
  title: string;
  type: any;
}

export interface Topic {
  title: string;
  materials: Material[];
}
