export default {
  "1": [
    {
      "name": "ethereum",
      "chainId": "1",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "56": [
    {
      "name": "bsc",
      "chainId": "56",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "100": [
    {
      "name": "gnosis",
      "chainId": "100",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0x7a6DA9903d0a481F40b8336c1463487BC8C0407e",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "128": [
    {
      "name": "heco",
      "chainId": "128",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "137": [
    {
      "name": "polygon",
      "chainId": "137",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "31337": [
    {
      "name": "hardhat",
      "chainId": "31337",
      "contracts": {}
    }
  ],
  "42161": [
    {
      "name": "arbitrum",
      "chainId": "42161",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0xa010eE0226cd071BeBd8919A1F675cAE1f1f5D3e",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "43114": [
    {
      "name": "avalanche",
      "chainId": "43114",
      "contracts": {
        "KashiPairMediumRiskV1": {
          "address": "0x513037395FA0C9c35E41f89189ceDfE3bD42fAdb",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "bentoBox_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "accruedAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeFraction",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint64",
                  "name": "rate",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "utilization",
                  "type": "uint256"
                }
              ],
              "name": "LogAccrue",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogAddAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogAddCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogBorrow",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "name": "LogExchangeRate",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "LogFeeTo",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveAsset",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogRemoveCollateral",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "LogRepay",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "feeTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feesEarnedFraction",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdrawFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "accrueInfo",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "interestPerSecond",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "lastAccrued",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "feesEarnedFraction",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "addCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "asset",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "borrow",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collateral",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8[]",
                  "name": "actions",
                  "type": "uint8[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "datas",
                  "type": "bytes[]"
                }
              ],
              "name": "cook",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "value1",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value2",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exchangeRate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "feeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "init",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "maxBorrowParts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "open",
                  "type": "bool"
                }
              ],
              "name": "liquidate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterContract",
              "outputs": [
                {
                  "internalType": "contract KashiPairMediumRiskV1",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracle",
              "outputs": [
                {
                  "internalType": "contract IOracle",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "oracleData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "fraction",
                  "type": "uint256"
                }
              ],
              "name": "removeAsset",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "removeCollateral",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "skim",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "part",
                  "type": "uint256"
                }
              ],
              "name": "repay",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFeeTo",
                  "type": "address"
                }
              ],
              "name": "setFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "swapper",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                }
              ],
              "name": "setSwapper",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract ISwapper",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "swappers",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalAsset",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalBorrow",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "updateExchangeRate",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "updated",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "rate",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userBorrowPart",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "userCollateralShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ]
} as const