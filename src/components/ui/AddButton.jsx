import React from "react";

const AddButton = ({ buttonAction }) => {
  return (
    <button
      onClick={buttonAction}
      className="p-4 bg-tertiary rounded-full w-4 h-4 flex  items-center justify-center text-4xl font-thin text-primary mb-4 transition-all hover:scale-95"
    >
      <p>+</p>
    </button>
  );
};

export default AddButton;
