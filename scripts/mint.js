const { ethers } = require('ethers')
const contractInfo = require('../contract.json')

async function mint(recipient, index) {
  const privateKey = ''

  console.log(`Minting taco #${index} to ${recipient}...`);

  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
  const signer = await new ethers.Wallet( privateKey, provider )

  console.log('signer address:', signer.address)

  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = contractInfo.address.toLowerCase()

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const result = await contract.mintNFT(
    recipient,
    `https://raw.githubusercontent.com/jessgusclark/rsk-taco-nft/main/metadata/taco${index}.json`
  )

  console.log(result)
}

mint('0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A', 0)
