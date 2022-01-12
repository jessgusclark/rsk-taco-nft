const { ethers } = require('ethers')

async function mint() {
  const privateKey = ''

  console.log('starting...')
  const provider = await new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co')
  const signer = await new ethers.Wallet( privateKey, provider )

  console.log('signer address:', signer.address)

  const abi = require('../artifacts/contracts/MyNFT.sol/MyNFT.json').abi
  const contractAddress = '0xe5eb362daf73d4c16b306342c64055fbaa6cd54c'

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const result = await contract.mintNFT(
    '0x3dd03d7d6c3137f1eb7582ba5957b8a2e26f304a',
    'https://raw.githubusercontent.com/jessgusclark/rsk-taco-nft/main/metadata/taco1.json'
  )

  console.log(result)
}

// mint()
