import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[800px] ">
        <button
          className="2xl justify-end font-bold text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="rounded bg-white p-2 ">{children} </div>
      </div>
    </div>
  );
};

export default Modal;
