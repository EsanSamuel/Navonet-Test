import React, { useEffect, useState } from "react";
import { SiDatastax } from "react-icons/si";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  {
    /*}{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 26816,
    "market_cap": 519612836950,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 563107908544,
    "total_volume": 13221260075,
    "high_24h": 27288,
    "low_24h": 26517,
    "price_change_24h": -449.8366883514209,
    "price_change_percentage_24h": -1.64979,
    "market_cap_change_24h": -9692751776.93982,
    "market_cap_change_percentage_24h": -1.83122,
    "circulating_supply": 19377937,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -61.157,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 39450.88831,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-05-19T14:48:21.456Z"
}*/
  }

  return (
    <div className="w-[100%] sm:p-10 ">
      <h1 className="text-white text-[30px] font-bold text-center">
        Get Latest Crypto ratings with
        <span className="coinbile"> Coinbile</span>
      </h1>

      <div className="sm:flex justify-between">
        <div className="sm:w-[40%] sm:mr-5 mt-20">
          <h1 className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tempore
            veritatis voluptatum quod enim animi fuga, voluptas eveniet
            quibusdam nihil doloribus nostrum consectetur tenetur, praesentium
            et eius illo sunt quia?
          </h1>

          <div className="mt-5">
            <Link to="/api">
              <Button title="View All" />
            </Link>
          </div>
        </div>

        {data?.length > 0 ? (
          <div className=" grid sm:grid-cols-2 gap-3 sm:w-[50%] w-full mt-10 ">
            {data.map((datax) => (
              <div
                key={datax.id}
                className="rounded p-5 border gap-5 mt-2 text-white"
              >
                <div className="flex gap-2 text-white">
                  <img src={datax.image} className="w-[30px]" />
                  <h1 className="text-white">
                    {datax.name} ({datax.symbol})
                  </h1>
                </div>
                <div className="flex px-10 gap-2">
                  <p className="font-bold">Ranking : </p>
                  <p>{datax.market_cap_rank}</p>
                </div>
                <div className="flex gap-2  text-white px-10">
                  <h1 className="font-bold">Price:</h1>
                  <h1>${datax.current_price}</h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white text-center flex justify-center p-10">
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
    </div>
  );
};

export default Api;
