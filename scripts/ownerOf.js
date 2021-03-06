const { ethers } = require('ethers')
const contractInfo = require('../contract.json')

async function getOwnerOf(index) {
  console.log('starting...')
  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = contractInfo.address.toLowerCase()
  const contract = new ethers.Contract(contractAddress, abi, provider);

  console.log('Contract setup')
  const owner = await contract.ownerOf(index.toString())
  console.log(`Owner: ${owner}`)

  const uri = await contract.tokenURI(index.toString())
  console.log(`URI: ${uri}`)
}

getOwnerOf(0)
