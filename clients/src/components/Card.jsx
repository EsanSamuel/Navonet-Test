import React from "react";
import image2 from "../assets/coin.png";
import image3 from "../assets/2.svg";

const Card = () => {
  return (
    <div className="mt-20">
      <h1 className="sm:text-[40px] text-[30px] text-white text-center">
        Blockchains for mass adoption
      </h1>

      <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-20 p-0 gap-3 py-20">
        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image2} />
          </div>
          <h1 className=" text-[25px] bg-gray">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>

          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>

        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image3} />
          </div>
          <h1 className=" gap-3 text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced Apps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>

          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>

        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image2} />
          </div>
          <h1 className=" text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>
          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
