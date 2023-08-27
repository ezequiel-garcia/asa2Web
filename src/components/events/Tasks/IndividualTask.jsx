import { useState } from "react";
import { Checkbox, cn } from "@nextui-org/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import EditDeleteButtons from "../../ui/EditDeleteButtons";

const IndividualTask = ({ task, owner }) => {
  const [isSelected, setIsSelected] = useState(false);

  const editAction = () => {
    console.log("EDit clicked");
  };

  const deleteAction = () => {
    console.log("Delete clicked");
  };

  return (
    <Checkbox
      color="warning"
      isSelected={isSelected}
      onValueChange={setIsSelected}
      classNames={{
        base: cn(
          "flex mb-2 w-full max-w-full hover:bg-content2 border-b-1 border-stone-100 rounded"
        ),
        label: "w-full ",
      }}
    >
      <div className="flex w-full justify-between items-center">
        <div>
          <p className={`${isSelected ? "line-through" : ""} text-neutral-700`}>
            {task}
          </p>
          <p className="text-default-400 text-xs">{owner || "Take it"}</p>
        </div>
        {
          <EditDeleteButtons
            editAction={editAction}
            deleteAction={deleteAction}
          />
        }
      </div>
    </Checkbox>
  );
};

export default IndividualTask;
