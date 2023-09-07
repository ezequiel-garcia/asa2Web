import React from "react";
import { Input } from "@nextui-org/react";
import { FiSend } from "react-icons/fi";

const InputPlace = () => {
  return (
    <Input
      className="w-full rounded-sm  "
      placeholder="Type a message"
      endContent={<FiSend color="grey" />}
    />
  );
};

export default InputPlace;
