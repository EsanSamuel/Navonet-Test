import React, { useContext, useState } from "react";
import Button from "./Button";
import image from "../assets/blockchain (1).png";
import { SiEthereum } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TransactionContext } from "../Context/Transaction";

const Text = () => {
  return (
    <div className="sm:px-10  top sm:flex justify-between ">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className="mt-10 sm:text-[60px] text-[30px] text-white py-10 font-bold">
          Send and receive Ethereum with <b className="coinbile">Coinbile</b>.
        </h1>
        <p className="text-[#5f5f5f] text-[20px] font-[500] sm:w-[89%]">
          Welcome to <b className="coinbile">Coinbile</b>, the secure and
          hassle-free platform for sending Ethereum. Whether you're a seasoned
          cryptocurrency enthusiast or just starting your journey, our platform
          provides a seamless experience for sending Ethereum quickly and
          securely. Say goodbye to complicated processes and long wait times.
          With our user-friendly interface and robust security measures, you can
          send Ethereum with confidence.
        </p>

        <div className="py-5">
          <Link to="/auth">
            <Button title="Get Started" />
          </Link>
        </div>
      </motion.div>

      <div className="w-full h-full sm:mt-20">
        <img
          src={image}
          className="text-white sm:mt-0 mt-20 h-[10%] image w-full"
        />
      </div>
    </div>
  );
};

export default Text;
