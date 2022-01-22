const fs = require('fs')

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)

  // Write address to json file:
  await fs.writeFile('../contract.json', JSON.stringify({ address: myNFT.address }), err => {
    return err ? console.log(err) : console.log('address written to file')
  })

  const recipient = '0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A'.toLowerCase()

  // minto some tokens!
  for (let index = 0; index < 5; index++) {
    const result = await myNFT.mintNFT(
      recipient,
      `https://raw.githubusercontent.com/jessgusclark/rsk-taco-nft/main/metadata/taco${index}.json`
    )

    console.log(`Taco ${index} has been minted. Hash: ${result.hash}`)
  }

  const total = await myNFT.getTotal()
  console.log(`Total NFTs: ${total.toNumber()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
