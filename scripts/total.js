const { ethers } = require('ethers')
const contractInfo = require('../contract.json')
// import contract from '../contract.json'

async function total () {
  console.log('getting total...')

  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')

  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = contractInfo.address.toLowerCase()
  // console.log(contractAddress)
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const total = await contract.getTotal()

  console.log(total.toNumber())
}

total()
