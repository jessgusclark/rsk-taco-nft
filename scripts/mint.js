const { ethers } = require('ethers')

async function mint(recipient, index) {
  const privateKey = ''

  console.log(`Minting taco #${index} to ${recipient}...`);

  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
  const signer = await new ethers.Wallet( privateKey, provider )

  console.log('signer address:', signer.address)

  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = '0xe5eb362daf73d4c16b306342c64055fbaa6cd54c'

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const result = await contract.mintNFT(
    recipient,
    `https://raw.githubusercontent.com/jessgusclark/rsk-taco-nft/main/metadata/taco${index}.json`
  )

  console.log(result)
}

mint('0xa88dcbb2cd833e359c562b46f90772a82c9a5249', 2)
