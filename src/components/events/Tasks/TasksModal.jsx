import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

const TasksModal = ({ onEdit }) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
      <Modal isOpen={true} onOpenChange={onOpenChange} placement="top-center">
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
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-white border-1 border-tertiary text-tertiary"
                  onPress={onClose}
                >
                  Sign in
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
