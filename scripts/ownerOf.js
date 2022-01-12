const { ethers } = require('ethers')

async function getOwnerOf(index) {
  console.log('starting...')
  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = '0xe5eb362daf73d4c16b306342c64055fbaa6cd54c'
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const owner = await contract.ownerOf(index.toString())
  console.log(`Owner: ${owner}`)

  const uri = await contract.tokenURI(index.toString())
  console.log(`URI: ${uri}`)
}

getOwnerOf(1)
