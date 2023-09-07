import React from "react";
import IndividualChat from "./IndividualChat";
import InputPlace from "./InputPlace";

const Chats = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-3">
      <div className="flex flex-col-reverse h-full max-h-full overflow-scroll">
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        {/* <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat /> */}
      </div>
      <div className="w-full ">
        <InputPlace />
      </div>
    </div>
  );
};

export default Chats;
