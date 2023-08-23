import React from "react";
import { Avatar } from "@nextui-org/react";
import IndividualTask from "./IndividualTask";

const Tasks = () => {
  return (
    <div className="">
      <IndividualTask task="Buy food" owner="Pepe" />
      <IndividualTask task="Buy Alcohol" />
      <IndividualTask task="Prepare chimi" />
    </div>
  );
};

export default Tasks;
