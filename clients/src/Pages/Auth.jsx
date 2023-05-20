import React, { useState } from "react";
import { Input } from "../components";
import image from "../assets/blockchain (1).png";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const Submit = () => {
    if (!name || !email) return <h1 className="text-white">ss</h1>;

    navigate("/EthHome", { state: { name: name } });
  };
  return (
    <div className=" ">
      <div className="sm:flex justify-between text-white sm:p-10 p-5">
        <div className="p-5 ">
          <img src={image} className=" image w-full mt-20 blur-[5px]" />
        </div>

        <div className="sm:w-[50%] w-full ">
          <h1 className="text-[40px] mt-20 font-[500]">Enter Details</h1>

          <Input
            placeholder="Enter Full Name"
            type="text"
            name="name"
            handleChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter Your Email"
            type="e-mail"
            name="email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex w-[100%] justify-between mt-10">
            <button
              className="button text-black px-10 py-3 rounded-[10px]"
              onClick={Submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
