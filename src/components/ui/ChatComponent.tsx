import React from "react";

// Define the object type
interface Message {
  id: string;
  text: string;
  type: "question" | "response";
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatComponent: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="w-full h-[95vh]  py-5 overflow-y-auto flex justify-center">
      <div className="w-[80vw] flex flex-col">
        {messages.map((item) => {
          return (
            <div
              className={`${
                item.type === "question"
                  ? "bg-[#1f2e28] ml-auto"
                  : "bg-transparent mr-auto"
              } w-auto h-auto py-3 px-8  rounded-2xl max-w-[70%]  my-4`}
            >
              <p className="text-base text-justify leading-[25px]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatComponent;
