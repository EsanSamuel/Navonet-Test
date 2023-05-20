import React, { useContext, useState } from "react";
import { Button } from "./";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TransactionContext } from "../Context/Transaction";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { connectWallet } = useContext(TransactionContext);

  return (
    <div className="mt-0 ">
      <div className=" sm:p-10  p-5 flex justify-between">
        <h1 className=" coinbile text-[#fff] font-[600] text-[30px]">
          Coinbile
        </h1>

        <ul className="flex gap-5 text-white sm:flex hidden bg-none text-center">
          <li className="p-3 rounded-[100px] bg-[#121212]">Products</li>
          <li className="p-3 rounded-[100px] bg-[#121212]">Ranking</li>
          <li className="p-3 rounded-[100px] bg-[#121212]">Solution</li>
        </ul>

        <div className="  sm:flex hidden ">
          <Link to="/auth">
            <Button title="Get Started" />
          </Link>
        </div>

        <CiMenuFries
          className="sm:hidden text-white text-[25px]"
          onClick={() => setNavbar(true)}
        />
      </div>

      {navbar && (
        <div className="fixed w-full h-full nav bg-[#121212]  z-10 p-10 top-0">
          <ul className="text-white text-center py-10  ">
            <AiOutlineClose
              onClick={() => setNavbar(false)}
              className="text-[25px]"
            />
            <li className="mt-">Products</li>
            <li className="mt-10">Ranking</li>
            <li className="mt-10">Solution</li>
            <div className="mt-10 text-black">
              <Link to="/auth">
                <Button title="Get Started" />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
