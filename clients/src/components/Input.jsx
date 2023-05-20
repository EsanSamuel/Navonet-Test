import React from "react";

const Input = ({ placeholder, type, name, handleChange }) => {
  return (
    <div className="gap-3 mt-7 w-[100%]">
      <input
        className="w-full h-[60px] rounded-[10px] bg-[#121212] p-5 outline-[blue]"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
