import React from "react";
import { AiOutlineHome, AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="card p-6 w-[65px]  rounded">
      <div className="text-center text-[#5f5f5f] bg-transparent">
        <Link to="/">
          <AiOutlineHome className="mt-10 bg-transparent" />
        </Link>

        <Link to="/form">
          <AiOutlineForm className="mt-10 bg-transparent" />
        </Link>

        <Link to="/api">
          <AiOutlineHome className="mt-10 bg-transparent" />
        </Link>

        <Link to="/api">
          <AiOutlineHome className="mt-10 bg-transparent" />
        </Link>
        <Link to="/transactions">
          <AiOutlineHome className="mt-10 bg-transparent" />
        </Link>
        <div className="bottom-0 mb-10 mt-[20%] bg-transparent">
          <AiOutlineHome className=" mt-20 bg-transparent" />
          <AiOutlineHome className=" mt-10 bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
