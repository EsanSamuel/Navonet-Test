import React from "react";
import { shortenAddress } from "../Utils/shortenAddress";

const TransactCard = ({
  message,
  addressFrom,
  addressTo,
  amount,
  timestamp,
}) => {
  return (
    <div className="rounded p-5 border gap-5 mt-2 text-white">
      <div className="flex gap-2 text-white">
        {message && <h1 className="text-white">{message}</h1>}
      </div>
      <div className="flex px-10 gap-2">
        <p className="font-bold">From:</p>
        <a
          href={`https://sepolia.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <p>{shortenAddress(addressFrom)}</p>
        </a>
      </div>
      <div className="flex gap-2  text-white px-10">
        <h1 className="font-bold">To:</h1>
        <a
          href={`https://sepolia.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <h1>{shortenAddress(addressTo)}</h1>
        </a>
      </div>
      <div className="flex gap-2  text-white px-10">
        <h1 className="font-bold">Amount:</h1>
        <h1>{amount}ETH</h1>
      </div>
      <div className="flex gap-2  text-white px-10">
        <h1 className="font-bold">Time:</h1>
        <h1>{timestamp}</h1>
      </div>
    </div>
  );
};

export default TransactCard;
