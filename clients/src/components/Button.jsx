import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <div>
      <button
        className="button px-5 py-2 rounded hover:opacity-[100%]"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
