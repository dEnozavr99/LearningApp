export interface IChatItem {
  icon: any;
  title: string;
  messages: Message[];
  messageCount: number;
}

export interface Message {
  author: MessageSender;
  text: string;
}

export interface MessageSender {
  fullName: string;
  icon: any;
}
