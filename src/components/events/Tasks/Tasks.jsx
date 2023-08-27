import React from "react";
import IndividualTask from "./IndividualTask";

const Tasks = () => {
  return (
    <div className="mt-10">
      <IndividualTask task="Buy food" owner="Pepe" />
      <IndividualTask task="Buy Alcohol" />
      <IndividualTask task="Prepare chimi" />
    </div>
  );
};

export default Tasks;
