import React from "react";

import image2 from "../assets/coin.png";
import ethImg from "../assets/eth-2.jpg";

const Service = () => {
  return (
    <div className="flex justify-between text-white mt-20 sm:p-20 p-5" >
      <div className="sm:p-20 " >
        <h1 className="text-[40px]">Our Services</h1>
        <p className="text-[#5f5f5f] text-[20px] font-[500] sm:w-[60%]">
          At <b className="coinbile">Coinbile</b>, we understand the importance of speed and
          reliability when it comes to cryptocurrency transactions. Our platform
          leverages the power of the Ethereum network to ensure that your
          transactions are processed swiftly. Whether you're sending Ethereum to
          friends, family, or making a payment, our system is optimized to
          provide you with the fastest and most reliable transaction experience.
        </p>

        <button className="button rounded-[100px] mt-10 px-5 py-3 text-[black]">
          Learn More
        </button>
        
      </div>
      
    </div>
  );
};

export default Service;
