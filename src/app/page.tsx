"use client";

import Chat from "@/components/Chat";
import Hero from "@/components/Hero";
import { Message } from "@/interfaces";
import { useState } from "react";

export default function Home() {
  const [startChat, setStartChat] = useState(false);
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const handleStartChat = () => {
    setStartChat(true);
    const newMessage: Message = {
      id: String(messages.length + 1),
      text: question,
      type: "question",
    };
    setMessages([...messages, newMessage]);
    setQuestion("");
  };
  const handleInputChange =
    (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

  return (
    <div className="w-full h-[100vh] bg-[#222222] flex justify-center">
      {startChat ? (
        <Chat
          handleStartChat={handleStartChat}
          messages={messages}
          value={question}
          onInputChange={handleInputChange(question, setQuestion)}
        />
      ) : (
        <Hero
          handleStartChat={handleStartChat}
          value={question}
          onInputChange={handleInputChange(question, setQuestion)}
        />
      )}
    </div>
  );
}
