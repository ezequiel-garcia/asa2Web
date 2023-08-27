import { getDateForPrev } from "../../../util/dateFunctions";
import EditDeleteButtons from "../../ui/EditDeleteButtons";

const IndividualBill = () => {
  const bill = {
    date: new Date(),
    title: "Meat",
    amount: 200,
    paiedBy: "Pepe Argento",
  };

  const { date, title, amount, paiedBy } = bill;
  const dateFormat = getDateForPrev(date);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-3">
        <div className="date">
          <p>{dateFormat.day}</p>
          <p>{dateFormat.month}</p>
        </div>
        <div className="w-0.5 h-10 bg-primary-50"></div>

        <div className="info-container">
          <div className="description-container">
            <h3>{title}</h3>
            <p className="text-sm">{paiedBy}</p>
          </div>
        </div>
      </div>
      <EditDeleteButtons />
    </div>
  );
};

export default IndividualBill;
