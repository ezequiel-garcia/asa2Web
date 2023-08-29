import React from "react";
import IndividualTask from "./IndividualTask";
import AddButton from "../../ui/AddButton";
import TasksModal from "./TasksModal";

const tasks = [
  {
    id: 1,
    task: "Buy food",
    owner: "Pepe",
  },
  {
    id: 2,
    task: "Buy alcohol",
    owner: "",
  },
  {
    id: 3,
    task: "Preparar chimi",
    owner: "",
  },
];

const Tasks = () => {
  return (
    <div className="mt-10">
      <div className="px-2">
        <AddButton />
      </div>
      <TasksModal />
      {tasks.map((task) => (
        <IndividualTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
