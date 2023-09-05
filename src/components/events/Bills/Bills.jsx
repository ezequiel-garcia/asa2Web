import { useState } from "react";
import IndividualBill from "./IndividualBill";
import AddButton from "../../ui/AddButton";
import BillsModal from "./BillsModal";

const bills = [
  {
    id: 1,
    date: new Date(2023, 8, 20),
    title: "Meat",
    amount: 300,
    paiedBy: { id: "1", name: "Pepe Argento" },
  },
  {
    id: 2,
    date: new Date(2023, 8, 22),
    title: "Snacks",
    amount: 130,
    paiedBy: { id: "2", name: "Morokio" },
  },
  {
    id: 3,
    date: new Date(),
    title: "Drinks",
    amount: 180,
    paiedBy: { id: "3", name: "Iekekel" },
  },
];

const Bills = () => {
  const [showModal, setShowModal] = useState(false);
  const [editBill, setEditBill] = useState(null);

  const show = () => {
    setEditBill(null);
    setShowModal(true);
  };

  const onEdit = (billForEdit) => {
    setEditBill(billForEdit);
    setShowModal(true);
  };

  const addBill = () => {
    console.log("adding bill");
    null;
  };

  return (
    <div className="mt-10">
      <div className="px-2">
        <AddButton buttonAction={show} />
      </div>
      {bills.map((bill) => (
        <IndividualBill key={bill.id} bill={bill} onEdit={onEdit} />
      ))}
      <BillsModal
        showModal={showModal}
        setShowModal={setShowModal}
        addBill={addBill}
        onEdit={editBill}
      />
    </div>
  );
};

export default Bills;
