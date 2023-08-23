import { useState } from "react";
import { Checkbox } from "@nextui-org/react";

const IndividualTask = ({ task, owner }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      //   color="warning"

      isSelected={isSelected}
      onValueChange={setIsSelected}
      className="flex mb-2 w-full max-w-full hover:bg-content2 border-b-1 border-stone-100"
    >
      <div>
        <p className={`${isSelected ? "line-through" : ""} text-neutral-700`}>
          {task}
        </p>
        <p className="text-default-400 text-xs">{owner || "Take it"}</p>
      </div>
    </Checkbox>
  );
};

export default IndividualTask;
