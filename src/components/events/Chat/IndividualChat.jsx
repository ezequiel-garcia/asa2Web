import React from "react";

import { users } from "../../../dummyData";

const user = users[0];

const message = {
  message: "Hi my friends how are u??",
  time: "15:20",
  sentBy: 2,
};

const IndividualChat = () => {
  return (
    <div className="flex justify-between  w-full bg-primary rounded p-2 my-3">
      <div className="flex items-center gap-4">
        {message.sentBy !== user.id && (
          <img
            src={user.profilePicture}
            className="w-12 h-12 rounded-md object-cover"
          />
        )}
        <div>
          <div>{message.sentBy !== user.id ? user.name : "You"}</div>
          <div>{message.message}</div>
        </div>
      </div>
      {/* Time */}
      <div className="flex items-end">
        <p>{message.time}</p>
      </div>
    </div>
  );
};

export default IndividualChat;
