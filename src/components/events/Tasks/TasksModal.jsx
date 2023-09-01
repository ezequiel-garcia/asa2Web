import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import SelectUser from "./SelectUser";

import { users } from "../../../dummyData";

const TasksModal = ({ onEdit, showModal, setShowModal, addTask }) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [assigned, setAssigned] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (showModal) onOpen();
  }, [showModal]);

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
    setIsValid(e.target.value.trim().length > 0);
  };

  const handleSave = (onClose) => {
    console.log(taskTitle + " " + assigned);
    setIsValid(taskTitle.trim().length > 0);
    if (!isValid) {
      return;
    } else {
      addTask({ id: taskTitle, task: taskTitle, owner: assigned });
      setAssigned("");
      setIsValid(true);
      setTaskTitle("");
      onClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => setShowModal(false)}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {onEdit ? "Edit Task" : "New Task"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Task"
                  placeholder="Enter new task"
                  variant="bordered"
                  value={taskTitle}
                  onChange={handleChange}
                  isRequired
                  errorMessage={!isValid && "You have to fill the task title"}
                  //   validationState={!isValid ? "invalid" : "valid"}
                  validationState="valid"
                />
                <SelectUser eventUsers={users} setAssigned={setAssigned} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-white border-1 border-tertiary text-tertiary"
                  onPress={() => handleSave(onClose)}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TasksModal;
