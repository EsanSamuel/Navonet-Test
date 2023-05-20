// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transaction {
    uint256 transactionCount;

    event Transfer(address from,address receiver,uint amount , string message, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver,uint amount ,string memory message) public{
        transactionCount +=1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp));

        emit Transfer(msg.sender,receiver,amount,message,block.timestamp);

    }

    function getBlockchain() public view returns(TransferStruct[] memory){
        return transactions;
    }

    
    function getBlockchainCount() public view returns(uint256){
        return transactionCount;
    }


}