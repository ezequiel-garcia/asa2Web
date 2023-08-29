import IndividualBill from "./IndividualBill";

const bills = [
  {
    id: 1,
    date: new Date(2023, 8, 20),
    title: "Meat",
    amount: 300,
    paiedBy: "Pepe Argento",
  },
  {
    id: 2,
    date: new Date(2023, 8, 22),
    title: "Snacks",
    amount: 130,
    paiedBy: "Morokio",
  },
  {
    id: 3,
    date: new Date(),
    title: "Drinks",
    amount: 180,
    paiedBy: "Iekekel",
  },
];

const Bills = () => {
  return (
    <div className="">
      {bills.map((bill) => (
        <IndividualBill key={bill.id} bill={bill} />
      ))}
    </div>
  );
};

export default Bills;
