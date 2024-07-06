// interfaces/Message.ts
export interface Message {
  id: string;
  text: string;
  type: "question" | "response";
}
