import React from "react";
import eth from "../assets/eth.webp";
import { Link } from "react-router-dom";
import Button from "./Button";

const Center = () => {
  return (
    <div className="text-center text-white sm:px-[25%] sm:mt-0 mt-20 p-5 w-full">
      <h1 className="text-[40px]">
        Join <b className="coinbile">Coinbile</b> today!!
      </h1>
      <p className="text-[#5f5f5f] text-[20px] font-[500]">
        Ready to experience the future of Ethereum transactions? Join{" "}
        <b className="coinbile">Coinbile</b> today and start sending Ethereum
        with ease. Whether you're a cryptocurrency enthusiast, a business owner,
        or an individual looking to explore the world of digital assets, our
        platform has everything you need. With our fast, secure, and
        user-friendly solution, sending Ethereum has never been easier. Sign up
        now and discover the convenience of <b className="coinbile">Coinbile</b>
        !
      </p>

      <div className="py-5 text-black">
        <Link to="/auth">
          <Button title="Get Started" />
        </Link>
      </div>

      <div className="w-full mt-10">
        <img src={eth} className="w-full" />
      </div>
    </div>
  );
};

export default Center;
