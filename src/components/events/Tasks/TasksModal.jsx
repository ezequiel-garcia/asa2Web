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
    if (onEdit) {
      setTaskTitle(onEdit.task);
      setAssigned("Josh");
    } else {
      resetValues();
    }
  }, [showModal, onEdit]);

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const resetValues = () => {
    setAssigned("");
    setTaskTitle("");
    setIsValid(true);
  };

  const handleClose = () => {
    console.log("saliendo amigo");
    resetValues();
    setShowModal(false);
  };

  const handleSave = (onClose) => {
    // console.log(taskTitle + " " + assigned);
    // setIsValid(taskTitle.trim().length > 0);
    if (taskTitle.trim().length > 0) {
      addTask({ id: taskTitle, task: taskTitle, owner: assigned });
      setAssigned("");
      setTaskTitle("");
      setIsValid(true);
      onClose();
    } else {
      setIsValid(false);
      return;
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleClose}
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
                <SelectUser
                  eventUsers={users}
                  setAssigned={setAssigned}
                  onEdit={onEdit}
                />
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
