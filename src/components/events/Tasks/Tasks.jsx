import { useState } from "react";
import IndividualTask from "./IndividualTask";
import AddButton from "../../ui/AddButton";
import TasksModal from "./TasksModal";
import { useDisclosure } from "@nextui-org/react";

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

const addTask = (task) => {
  tasks.push(task);
};

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const show = () => setShowModal(true);

  return (
    <div className="mt-10">
      <div className="px-2">
        <AddButton buttonAction={show} />
      </div>
      <TasksModal
        showModal={showModal}
        setShowModal={setShowModal}
        addTask={addTask}
      />
      {tasks.map((task) => (
        <IndividualTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
