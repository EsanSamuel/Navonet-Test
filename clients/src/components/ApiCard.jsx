import React from "react";

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

const ApiCard = ({ image, name, symbol, market_cap_rank, current_price }) => {
  return (
    <div className="rounded p-5 border gap-5 mt-2 text-white">
      <div className="flex gap-2 text-white">
        <img src={image} className="w-[30px]" />
        <h1 className="text-white">
          {name} ({symbol})
        </h1>
      </div>
      <div className="flex px-10 gap-2">
        <p className="font-bold">Ranking : </p>
        <p>{market_cap_rank}</p>
      </div>
      <div className="flex gap-2  text-white px-10">
        <h1 className="font-bold">Price:</h1>
        <h1>${current_price}</h1>
      </div>
    </div>
  );
};

export default ApiCard;
