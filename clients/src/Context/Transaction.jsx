import React, { useState, useEffect, createContext } from "react";
import { ethers, parseEther } from "ethers";

import { ContractAddress, ContractABI } from "../Utils/contract";

const { ethereum } = window;

export const TransactionContext = createContext();

//This is the first step for declaring the providers
const getTransaction =  () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = provider.getSigner();
  const transaction = new ethers.Contract(ContractAddress, ContractABI, signer);

  return transaction;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });
  const [isloading, setIsloading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [balance, setBalance] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("please install metamask");

      const transactionContract = getTransaction();

      //calling the getBlockchain() function from the smart contract
      const Alltransaction = await transactionContract.getBlockchain();

      //mapping over the Alltransaction(getBlockchain() function)  to get the structured values from the smart Contract
      const ExistingTransaction = Alltransaction.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).tolocalestring(),
        message: transaction.message,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
      }));

      console.log(ExistingTransaction);

      setTransactions(ExistingTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const IfTransationsIsExisting = async () => {
    try {
      if (!ethereum) return alert("please install metamask");

      const transactionContract = getTransaction();
      const AllTransactionCount = transactionContract.getBlockchainCount();

      window.localStorage.setItem("transactionCount", AllTransactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  //This is the logic to connect the web-App to metaMask
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

      window.Location.reload;
    } catch (error) {
      console.log(error);
    }
  };

  //This is to check if your wallet is connected to your webapp
  const checkifWalletisConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        console.log(accounts);

        getAllTransactions();
        setCurrentAccount(accounts[0]);
      } else {
        ("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //This is the logic to send ethereum to different wallet
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addressTo, amount, message } = formData;

      const transactionContract = getTransaction();
      //const Amount = ethers.formatEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: amount,
          },
        ],
      });

      const transactionHash = transactionContract.addToBlockchain(
        addressTo,
        amount,
        message
      );

      console.log(transactionHash);

      setIsloading(true);
      console.log(`loading - ${transactionHash}`);
      await transactionHash;

      setIsloading(false);
      console.log(`Success - ${transactionHash}`);

      const transactionCount = transactionContract.getBlockchainCount();
      setTransactionCount(transactionCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkifWalletisConnected();
    IfTransationsIsExisting();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
        isloading,
        balance,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
