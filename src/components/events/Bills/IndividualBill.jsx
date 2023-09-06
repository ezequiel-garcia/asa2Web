import { getDateForPrev } from "../../../util/dateFunctions";
import EditDeleteButtons from "../../ui/EditDeleteButtons";

const IndividualBill = ({ bill, onEdit }) => {
  const { date, title, amount, paiedBy } = bill;
  const dateFormat = getDateForPrev(date);
  return (
    <div className="flex items-center justify-between w-full px-2 py-3 border-b-1 border-stone-100">
      <div className="flex flex-[4] gap-3">
        <div className="flex flex-col items-center">
          <p className="font-extralight text-lg">{dateFormat.day}</p>
          <p className="font-light text-sm">{dateFormat.month}</p>
        </div>
        <div className="w-[.5px] h-12 bg-tertiary"></div>
        <div className="info-container">
          <div className="description-container">
            <h3>{title}</h3>
            <p className="text-sm">
              {paiedBy.name}{" "}
              <span className="font-normal text-tertiary lg:hidden">
                paied ${amount}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-between">
        <p className="hidden font-light  text-tertiary lg:inline">${amount}</p>
        <EditDeleteButtons editAction={() => onEdit(bill)} />
      </div>
    </div>
  );
};

export default IndividualBill;
