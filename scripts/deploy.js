const main = async function main() {
  const Transaction = await hre.ethers.getContractFactory('Transaction')
  const transactions = await Transaction.deploy()

  await transactions.deployed()

  console.log('Transaction deployed to :', transactions.address)
}

  const runMain = async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }


runMain()

//Transaction deployed to : 0x5FbDB2315678afecb367f032d93F642f64180aa3