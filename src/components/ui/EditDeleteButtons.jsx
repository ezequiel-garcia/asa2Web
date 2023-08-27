import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const EditDeleteButtons = ({ editAction, deleteAction }) => {
  return (
    <div className="flex items-center gap-4">
      <button onClick={editAction}>
        {<AiOutlineEdit className=" text-xl" />}
      </button>
      <button onClick={deleteAction}>
        {<AiOutlineDelete className="text-xl text-coral-red " />}
      </button>
    </div>
  );
};

export default EditDeleteButtons;
