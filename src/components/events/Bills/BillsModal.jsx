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

const BillsModal = ({ onEdit, showModal, setShowModal, addBill }) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  //   const [assigned, setAssigned] = useState("");
  const [billTitle, setBillTitle] = useState("");
  const [billAmount, setBillAmount] = useState(0.0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (showModal) onOpen();
    if (onEdit) {
      setBillTitle(onEdit.title);
      setBillAmount(onEdit.amount);
    } else {
      resetValues();
    }
  }, [showModal, onEdit]);

  const handleChange = (e) => {
    e.target.name === "title" ? setBillTitle(e.target.value) : null;
    e.target.name === "amount" ? setBillAmount(e.target.value) : 0;
  };

  const resetValues = () => {
    setBillAmount(0.0);
    setBillTitle("");
    setIsValid(true);
  };

  const handleClose = () => {
    resetValues();
    setShowModal(false);
  };

  const handleSave = (onClose) => {
    if (billTitle.trim().length > 0) {
      //   addBill({ , task: taskTitle, owner: assigned });
      setAssigned("");
      setBillTitle("");
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
                {onEdit ? "Edit Bill" : "New Bill"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="title"
                  label="Bill Title"
                  placeholder="Enter bill title"
                  variant="bordered"
                  value={billTitle}
                  onChange={handleChange}
                  isRequired
                  errorMessage={!isValid && "You have to fill the bill title"}
                  //   validationState={!isValid ? "invalid" : "valid"}
                  validationState="valid"
                />
                <Input
                  label="Bill Amount"
                  name="amount"
                  placeholder="0.00"
                  variant="bordered"
                  value={billAmount}
                  onChange={handleChange}
                  type="number"
                  errorMessage={!isValid && "You have to fill the bill title"}
                  //   validationState={!isValid ? "invalid" : "valid"}
                  validationState="valid"
                />
                {/* <SelectUser
                  eventUsers={users}
                  setAssigned={setAssigned}
                  onEdit={onEdit}
                /> */}
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

export default BillsModal;
