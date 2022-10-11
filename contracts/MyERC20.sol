// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Pausable, Ownable {
  constructor() ERC20("My Token", "MYERC20") {}

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function mint(address to, uint256 amount) public onlyOwner {
    console.log("minting amount: %s to: %s", amount, to);
    _mint(to, amount);
  }

  function _beforeTokenTransfer(address from, address to, uint256 amount)
    internal
    whenNotPaused
    override
  {
    super._beforeTokenTransfer(from, to, amount);
  }
}
