# Taco NFT on the RSK Testnet

This is a work in progress and serves as a test NFT for a wallet that is in progress. 

## Testnet:

- [0xe5eB362DAF73d4C16b306342C64055FbAA6cd54C](https://explorer.testnet.rsk.co/address/0xe5eb362daf73d4c16b306342c64055fbaa6cd54c)

## Minting a new taco:

```
npx hardhat console

const abi = [] // get the ABI from artifacts/contracts/MyNFT.sol/MyNFT.json
const [deployer] = await ethers.getSigners();
const contractAddress = '0xe5eb362daf73d4c16b306342c64055fbaa6cd54c';

let contract = new ethers.Contract(contractAddress, abi, deployer);

const result = await contract.mintNFT('0x3dd03d7d6c3137f1eb7582ba5957b8a2e26f304a', 'https://raw.githubusercontent.com/jessgusclark/rsk-taco-nft/main/metadata/taco1.json')

console.log(result.hash) // the hash

```
