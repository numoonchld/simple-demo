# Simple Hardhat Project Demo on AltLayer

To use this repo:

```bash
git clone https://github.com/jimmychu0807-altresearch/simple-demo.git

# Edit `.env` to add your deployment private key account. A well-known private key to test with is `d331dde427c2e524d1d7cec5c74e8b1cfcf56b1fcc7e9fc6110f698889e78a9c`. Do not use this key in production.

yarn install

# To deploy the ERC20 token on Alt Devnet
yarn hardhat compile
yarn hardhat --network altDevNet run scripts/deploy.ts

# Mark the deployed address, then to verify the contract
yarn hardhat --network altDevNet verify <deployed address>

# Interact with the contract on block explorer:
#   https://devnet-explorer.altlayer.io/
```
