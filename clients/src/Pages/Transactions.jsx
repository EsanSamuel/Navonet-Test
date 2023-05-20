import React, { useContext } from "react";
import dummyData from "../Utils/dummyData";
import { TransactCard } from "../components";
import { TransactionContext } from "../Context/Transaction";

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  return (
    <div className="p-10">
      {currentAccount ? (
        <div>
          <h1 className="text-center font-bold text-white text-[30px] py-5">
            Transactions History
          </h1>

          {transactions?.length > 0 ? (
            <div className="grid sm:grid-cols-4  gap-3 ">
              {transactions.reverse().map((transaction, i) => (
                <TransactCard key={i} {...transaction} />
              ))}
            </div>
          ) : (
            <h1 className="text-center  text-white text-[20px] py-5">
              No Transactions made yet
            </h1>
          )}
        </div>
      ) : (
        <h1 className="text-center font-bold text-white text-[30px] py-5">
          Connect Wallet to see all transactions
        </h1>
      )}
    </div>
  );
};

export default Transactions;
