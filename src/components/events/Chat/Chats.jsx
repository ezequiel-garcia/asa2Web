import React from "react";
import IndividualChat from "./IndividualChat";
import InputPlace from "./InputPlace";

const messages = [
  {
    message: "Hi my friends how are u??",
    time: "15:20",
    sentBy: 2,
  },
  {
    message: "Hi my friends how are u??",
    time: "15:20",
    sentBy: 2,
  },
  {
    message: "Hi im OK, How are u bro??",
    time: "15:20",
    sentBy: 1,
  },
  {
    message: "Hi my friends how are u??",
    time: "15:20",
    sentBy: 2,
  },
  {
    message:
      "I don't know what to do right now my friend, im tired and I have to wake up early. So maybe tomorrow we can do something but not today",
    time: "15:20",
    sentBy: 2,
  },
];

const Chats = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-3">
      <div className="flex flex-col-reverse h-full max-h-full overflow-scroll no-scrollbar">
        {messages.map((message) => (
          <IndividualChat message={message} />
        ))}
      </div>
      <div className="w-full ">
        <InputPlace />
      </div>
    </div>
  );
};

export default Chats;
