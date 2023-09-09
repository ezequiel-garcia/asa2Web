import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { FiSend } from "react-icons/fi";

const InputPlace = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    // <Input
    //   classNames={{
    //     input: ["bg-transparent"],

    //     innerWrapper: [
    //       "bg-transparent",

    //       "w-full",
    //       "rounded-sm",
    //       "shadow-sm",
    //       "focus:bg-red-400",
    //       //   "bg-backgroundsLight",
    //     ],
    //     inputWrapper: [
    //       "bg-backgroundsLight",
    //       "shadow-lg",
    //       "hover:bg-default-200/70",
    //     ],
    //   }}
    //   placeholder="Type a message"
    //   endContent={<FiSend color="grey" />}
    // />
    <div className="w-full flex justify-between items-center shadow-md rounded p-3 bg-backgroundsLight">
      <input
        autoFocus
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={handleChange}
        className="w-full focus:outline-none bg-transparent"
      />
      <FiSend color="grey" />
    </div>
  );
};

export default InputPlace;
