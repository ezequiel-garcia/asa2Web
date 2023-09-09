import React from "react";

import { users } from "../../../dummyData";

const user = users[0];

const IndividualChat = ({ message }) => {
  return (
    <div
      className={`flex justify-between  bg-primary rounded p-2 m-2 ${
        message.sentBy === user.id ? "bg-primary-50" : null
      }`}
    >
      <div className="flex items-center gap-4">
        {message.sentBy !== user.id && (
          <img
            src={user.profilePicture}
            className="w-10 h-10 lg:w-14 lg:h-14 rounded object-cover"
          />
        )}

        <div className="flex-1">
          <h3>{message.sentBy !== user.id ? user.name : "You"}</h3>
          <p>{message.message}</p>
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
