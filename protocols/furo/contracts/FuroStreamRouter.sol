// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.10;

import './interfaces/IFuroStream.sol';

contract FuroStreamRouter is Multicall {
  IBentoBoxMinimal public immutable bentoBox;
  IFuroStream public immutable furoStream;
  address public immutable wETH;

  // custom errors
  error InsufficientShares();

  constructor(
    IBentoBoxMinimal _bentoBox,
    IFuroStream _furoStream,
    address _wETH
  ) {
    bentoBox = _bentoBox;
    furoStream = _furoStream;
    wETH = _wETH;
    _bentoBox.setMasterContractApproval(address(this), address(_furoStream), true, 0, bytes32(0), bytes32(0));
    _bentoBox.registerProtocol();
  }

  function setBentoBoxApproval(
    address user,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external payable {
    bentoBox.setMasterContractApproval(user, address(this), approved, v, r, s);
  }

  

  
}
