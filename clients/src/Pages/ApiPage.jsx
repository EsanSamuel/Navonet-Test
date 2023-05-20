import React, { useEffect, useState } from "react";
import { ApiCard } from "../components";
import { WiDirectionLeft } from "react-icons/wi";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const ApiPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="sm:p-10 p-5">
      <Link to="/">
        <WiDirectionLeft className="text-white text-[35px]" />
      </Link>
      <div className="py-10">
        <input
          className="w-full border border-[#eaeaea] h-[40px] rounded-[100px] text-white px-3"
          placeholder="Search rankings..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {data?.length > 0 ? (
        <div className="grid sm:grid-cols-4  gap-3">
          {data.map((datax) => (
            <ApiCard key={datax.id} {...datax} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center flex justify-center mt-5">
          <Circles
            height="50"
            width="50"
            radius="9"
            color="#5ce2ff"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </div>
  );
};

export default ApiPage;
