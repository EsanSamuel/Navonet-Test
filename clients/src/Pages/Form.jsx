import React, { useContext, useState } from "react";
import { Button, Navbar, Sidebar } from "../components";
import { TransactionContext } from "../Context/Transaction";
import { SiEthereum } from "react-icons/si";
import { ThreeDots } from "react-loader-spinner";

const Input = ({ placeholder, name, handleChange, value, type }) => (
  <input
    className="w-full card h-[50px] rounded p-2 mt-10 text-white outline-[blue]"
    placeholder={placeholder}
    onChange={(e) => handleChange(e, name)}
    value={value}
    step="0.0001"
    type={type}
  />
);

const Form = () => {
  const [form, setForm] = useState();

  const { formData, sendTransaction, handleChange, isloading } =
    useContext(TransactionContext);

  const Submit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    sendTransaction();
  };

  return (
    <div className=" flex sm:h-[150vh] h-[160vh]">
      <div className="fixed sm:flex hidden relative p-3 h-[100vh]">
        <Sidebar />
      </div>

      <div className=" w-full p-5">
        <h1 className="text-white text-center py-3 text-[30px]">
          Send Ethereum
        </h1>
        <div className="sm:flex gap-3">
          <Input
            placeholder="Enter Address"
            name="addressTo"
            handleChange={handleChange}
          />

          <Input
            placeholder="Enter Amount(ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
        </div>

        <div className="sm:flex gap-3">
          <Input placeholder="Enter Address" />
          <Input placeholder="Enter Address" />
        </div>

        <div className="w-full button mt-10 rounded h-[20%] p-5 ">
          <h1 className="text-center  text-[25px] bg-transparent">
            <SiEthereum className="bg-transparent" /> Send Ethereum with
            Coinbile
          </h1>
        </div>
        <textarea
          className="w-full mt-10 h-[30%] card rounded p-3 text-white outline-[blue]"
          placeholder="Enter Message"
          name="message"
          handleChange={handleChange}
        />

        <div className="py-2 ">
          {isloading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#5ce2ff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <Button title="Send ETH " handleClick={Submit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
