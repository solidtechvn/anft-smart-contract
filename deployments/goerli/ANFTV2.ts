export default {
  "address": "0xFec811f8Cab1F3dD778f09e3f385178A581b78f5",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakingAddr",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
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
          "internalType": "address",
          "name": "_first",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_second",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_third",
          "type": "uint256"
        }
      ],
      "name": "Dummy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_validator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listingAddress",
          "type": "address"
        }
      ],
      "name": "ListingCreation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_stakingAddr",
          "type": "address"
        }
      ],
      "name": "UpdateStakingAddr",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
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
      "name": "VALIDATOR",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        }
      ],
      "name": "createListing",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
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
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_in",
          "type": "bool"
        }
      ],
      "name": "handleListingTx",
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "listingStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_isCreated",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_active",
          "type": "bool"
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakingAddress",
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
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_listingAddr",
          "type": "address"
        }
      ],
      "name": "toggleListingStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "recipient",
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
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
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
          "name": "_stakingAddr",
          "type": "address"
        }
      ],
      "name": "updateStakingAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0xd059d6d95cf4bb982ac3dcf58f557e106a1aaefbf0de58c599220a00ca4b73a5",
  "receipt": {
    "to": null,
    "from": "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "contractAddress": "0xFec811f8Cab1F3dD778f09e3f385178A581b78f5",
    "transactionIndex": 6,
    "gasUsed": "2514135",
    "logsBloom": "0x00000004000000000000000000000000000000000000010000040000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000008000000800000000000000000000000000000000000000040020000000000000000000800000000000000000000000010000000000000000002000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000001000000000000000000002000000000000000000000000000000000000000100000000000020040000000000000000000000000000000080000000000000000000000000000000",
    "blockHash": "0x2e8def0ff14c63bebe0b11f2b1793d23561576dacbff067fdd8af25039520f49",
    "transactionHash": "0xd059d6d95cf4bb982ac3dcf58f557e106a1aaefbf0de58c599220a00ca4b73a5",
    "logs": [
      {
        "transactionIndex": 6,
        "blockNumber": 5972555,
        "transactionHash": "0xd059d6d95cf4bb982ac3dcf58f557e106a1aaefbf0de58c599220a00ca4b73a5",
        "address": "0xFec811f8Cab1F3dD778f09e3f385178A581b78f5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x000000000000000000000000000000000000000003fb1625d33a3796d0000000",
        "logIndex": 24,
        "blockHash": "0x2e8def0ff14c63bebe0b11f2b1793d23561576dacbff067fdd8af25039520f49"
      },
      {
        "transactionIndex": 6,
        "blockNumber": 5972555,
        "transactionHash": "0xd059d6d95cf4bb982ac3dcf58f557e106a1aaefbf0de58c599220a00ca4b73a5",
        "address": "0xFec811f8Cab1F3dD778f09e3f385178A581b78f5",
        "topics": [
          "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x",
        "logIndex": 25,
        "blockHash": "0x2e8def0ff14c63bebe0b11f2b1793d23561576dacbff067fdd8af25039520f49"
      },
      {
        "transactionIndex": 6,
        "blockNumber": 5972555,
        "transactionHash": "0xd059d6d95cf4bb982ac3dcf58f557e106a1aaefbf0de58c599220a00ca4b73a5",
        "address": "0xFec811f8Cab1F3dD778f09e3f385178A581b78f5",
        "topics": [
          "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
          "0xa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x",
        "logIndex": 26,
        "blockHash": "0x2e8def0ff14c63bebe0b11f2b1793d23561576dacbff067fdd8af25039520f49"
      }
    ],
    "blockNumber": 5972555,
    "cumulativeGasUsed": "3340134",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xbB16550010cA6e7648A065a3DA7ccff39CEfcAC5"
  ],
  "solcInputHash": "9cac9ccb27fe7996be99fd70b42f878a",
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_first\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_second\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_third\",\"type\":\"uint256\"}],\"name\":\"Dummy\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_validator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listingAddress\",\"type\":\"address\"}],\"name\":\"ListingCreation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"UpdateStakingAddr\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VALIDATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_listingId\",\"type\":\"uint256\"}],\"name\":\"createListing\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_in\",\"type\":\"bool\"}],\"name\":\"handleListingTx\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"listingStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"_isCreated\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stakingAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_listingAddr\",\"type\":\"address\"}],\"name\":\"toggleListingStatus\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"updateStakingAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Dummy(address,uint256,uint256)\":{\"details\":\"Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing validator shall be the validator address making the transaction. Owner of the listing shall be the specified address  Emits a {ListingCreation} event\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"constructor\":{\"details\":\"Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"handleListingTx(address,uint256,bool)\":{\"details\":\"Handle transactions from listings and only from listings  If `_in` is true, _amount will be transfered from `_userAddr` to staking address Otherwise, `_amount` will be transfered from staking address to `_userAddr` Returns true if the transation is success Emits a {Transfer} event from IERC20\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"toggleListingStatus(address)\":{\"details\":\"Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only validators The `_listingAddr` must be the address of a created listing \"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"},\"updateStakingAddress(address)\":{\"details\":\"Update the funds address. Shall be handy if there's a need in changing the initial address, or the previous address is compromised.\"}},\"stateVariables\":{\"VALIDATOR\":{\"details\":\"Validators are authorized accounts to handle listing\"},\"stakingAddress\":{\"details\":\"The funds address for paying out rewards and receiving payments\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/v2/ANFTV2.sol\":\"ANFTV2\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":1},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/AccessControl.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IAccessControl.sol\\\";\\nimport \\\"../utils/Context.sol\\\";\\nimport \\\"../utils/Strings.sol\\\";\\nimport \\\"../utils/introspection/ERC165.sol\\\";\\n\\n/**\\n * @dev Contract module that allows children to implement role-based access\\n * control mechanisms. This is a lightweight version that doesn't allow enumerating role\\n * members except through off-chain means by accessing the contract event logs. Some\\n * applications may benefit from on-chain enumerability, for those cases see\\n * {AccessControlEnumerable}.\\n *\\n * Roles are referred to by their `bytes32` identifier. These should be exposed\\n * in the external API and be unique. The best way to achieve this is by\\n * using `public constant` hash digests:\\n *\\n * ```\\n * bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\");\\n * ```\\n *\\n * Roles can be used to represent a set of permissions. To restrict access to a\\n * function call, use {hasRole}:\\n *\\n * ```\\n * function foo() public {\\n *     require(hasRole(MY_ROLE, msg.sender));\\n *     ...\\n * }\\n * ```\\n *\\n * Roles can be granted and revoked dynamically via the {grantRole} and\\n * {revokeRole} functions. Each role has an associated admin role, and only\\n * accounts that have a role's admin role can call {grantRole} and {revokeRole}.\\n *\\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\\n * that only accounts with this role will be able to grant or revoke other\\n * roles. More complex role relationships can be created by using\\n * {_setRoleAdmin}.\\n *\\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\\n * grant and revoke this role. Extra precautions should be taken to secure\\n * accounts that have been granted it.\\n */\\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\\n    struct RoleData {\\n        mapping(address => bool) members;\\n        bytes32 adminRole;\\n    }\\n\\n    mapping(bytes32 => RoleData) private _roles;\\n\\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\\n\\n    /**\\n     * @dev Modifier that checks that an account has a specific role. Reverts\\n     * with a standardized message including the required role.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     *\\n     * _Available since v4.1._\\n     */\\n    modifier onlyRole(bytes32 role) {\\n        _checkRole(role, _msgSender());\\n        _;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) public view override returns (bool) {\\n        return _roles[role].members[account];\\n    }\\n\\n    /**\\n     * @dev Revert with a standard message if `account` is missing `role`.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     */\\n    function _checkRole(bytes32 role, address account) internal view {\\n        if (!hasRole(role, account)) {\\n            revert(\\n                string(\\n                    abi.encodePacked(\\n                        \\\"AccessControl: account \\\",\\n                        Strings.toHexString(uint160(account), 20),\\n                        \\\" is missing role \\\",\\n                        Strings.toHexString(uint256(role), 32)\\n                    )\\n                )\\n            );\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) public view override returns (bytes32) {\\n        return _roles[role].adminRole;\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) public virtual override {\\n        require(account == _msgSender(), \\\"AccessControl: can only renounce roles for self\\\");\\n\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event. Note that unlike {grantRole}, this function doesn't perform any\\n     * checks on the calling account.\\n     *\\n     * [WARNING]\\n     * ====\\n     * This function should only be called from the constructor when setting\\n     * up the initial roles for the system.\\n     *\\n     * Using this function in any other way is effectively circumventing the admin\\n     * system imposed by {AccessControl}.\\n     * ====\\n     */\\n    function _setupRole(bytes32 role, address account) internal virtual {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Sets `adminRole` as ``role``'s admin role.\\n     *\\n     * Emits a {RoleAdminChanged} event.\\n     */\\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\\n        bytes32 previousAdminRole = getRoleAdmin(role);\\n        _roles[role].adminRole = adminRole;\\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\\n    }\\n\\n    function _grantRole(bytes32 role, address account) private {\\n        if (!hasRole(role, account)) {\\n            _roles[role].members[account] = true;\\n            emit RoleGranted(role, account, _msgSender());\\n        }\\n    }\\n\\n    function _revokeRole(bytes32 role, address account) private {\\n        if (hasRole(role, account)) {\\n            _roles[role].members[account] = false;\\n            emit RoleRevoked(role, account, _msgSender());\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x183481af1c40d2efb26b86f63d6fe9e22f24c87e436d60a69f261b38500e7cd6\",\"license\":\"MIT\"},\"@openzeppelin/contracts/access/IAccessControl.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev External interface of AccessControl declared to support ERC165 detection.\\n */\\ninterface IAccessControl {\\n    /**\\n     * @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\\n     *\\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\\n     * {RoleAdminChanged} not being emitted signaling this.\\n     *\\n     * _Available since v3.1._\\n     */\\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\\n\\n    /**\\n     * @dev Emitted when `account` is granted `role`.\\n     *\\n     * `sender` is the account that originated the contract call, an admin role\\n     * bearer except when using {AccessControl-_setupRole}.\\n     */\\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Emitted when `account` is revoked `role`.\\n     *\\n     * `sender` is the account that originated the contract call:\\n     *   - if using `revokeRole`, it is the admin role bearer\\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\\n     */\\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {AccessControl-_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) external;\\n}\\n\",\"keccak256\":\"0xfe0edb09653ed10e8a1bfe03eb9b0ff06775666eee817a95bd3d0799f1ee2b44\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"./extensions/IERC20Metadata.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20, IERC20Metadata {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(_msgSender(), recipient, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n\\n        uint256 currentAllowance = _allowances[sender][_msgSender()];\\n        require(currentAllowance >= amount, \\\"ERC20: transfer amount exceeds allowance\\\");\\n        unchecked {\\n            _approve(sender, _msgSender(), currentAllowance - amount);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        uint256 currentAllowance = _allowances[_msgSender()][spender];\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(_msgSender(), spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) internal virtual {\\n        require(sender != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(recipient != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        uint256 senderBalance = _balances[sender];\\n        require(senderBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[sender] = senderBalance - amount;\\n        }\\n        _balances[recipient] += amount;\\n\\n        emit Transfer(sender, recipient, amount);\\n\\n        _afterTokenTransfer(sender, recipient, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n}\\n\",\"keccak256\":\"0xb03df8481a954604ad0c9125680893b2e3f7ff770fe470e38b89ac61b84e8072\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0x027b891937d20ccf213fdb9c31531574256de774bda99d3a70ecef6e1913ed2a\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x83fe24f5c04a56091e50f4a345ff504c8bff658a76d4c43b16878c8f940c53b2\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _HEX_SYMBOLS = \\\"0123456789abcdef\\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI's implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\\"0\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\\"0x00\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n}\\n\",\"keccak256\":\"0x391d3ba97ab6856a16b225d6ee29617ad15ff00db70f3b4df1ab5ea33aa47c9d\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0x5718c5df9bd67ac68a796961df938821bb5dc0cd4c6118d77e9145afb187409b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n// CAUTION\\n// This version of SafeMath should only be used with Solidity 0.8 or later,\\n// because it relies on the compiler's built in overflow checks.\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations.\\n *\\n * NOTE: `SafeMath` is no longer needed starting with Solidity 0.8. The compiler\\n * now has built in overflow checking.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            uint256 c = a + b;\\n            if (c < a) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b > a) return (false, 0);\\n            return (true, a - b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n            // benefit is lost if 'b' is also tested.\\n            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n            if (a == 0) return (true, 0);\\n            uint256 c = a * b;\\n            if (c / a != b) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a / b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a % b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a + b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a * b;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a % b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {trySub}.\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b <= a, errorMessage);\\n            return a - b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a / b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting with custom message when dividing by zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryMod}.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a % b;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8666f020bd8fc9dc14f07e2ebc52b5f236ab4cdde7c77679b08cb2f94730043b\",\"license\":\"MIT\"},\"contracts/v2/ANFTV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\\";\\nimport \\\"@openzeppelin/contracts/access/AccessControl.sol\\\";\\nimport \\\"./ListingV2.sol\\\";\\nimport \\\"./IANFTV2.sol\\\";\\n\\ncontract ANFTV2 is IANFTV2, ERC20, AccessControl {\\n    /**\\n     * @dev Validators are authorized accounts to handle listing\\n     */\\n    bytes32 public constant VALIDATOR = keccak256(\\\"VALIDATOR\\\");\\n\\n    /**\\n     * @dev The funds address for paying out rewards and receiving payments\\n     */\\n    address public stakingAddress;\\n\\n    /**\\n     * @dev A listing address must be both `_isCreated` and `_active` to be able to operate.\\n     * Otherwise malicious accounts can call handleListingTx functions\\n     *\\n     * The `_isCreated` property is immutable. It's remains true with the addresses of listings \\n     * created by the validator,\\n     *\\n     * The `_active` property is mutable by the validators.\\n     */\\n    struct ListingStatusModel {\\n        bool _isCreated;\\n        bool _active;\\n    }\\n    mapping (address => ListingStatusModel) public listingStatus;\\n\\n    /**\\n     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR\\n     * Staking address is set here\\n     */\\n    constructor(address _stakingAddr) ERC20(\\\"ANFT Token\\\", \\\"ANFT\\\") {\\n        _mint(msg.sender, 1232000000 * 10 ** decimals());\\n        stakingAddress = _stakingAddr;\\n        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);\\n        _setupRole(VALIDATOR, msg.sender);\\n    }\\n\\n    /**\\n     * @dev Handle transactions from listings and only from listings\\n     * \\n     * If `_in` is true, _amount will be transfered from `_userAddr` to staking address\\n     * Otherwise, `_amount` will be transfered from staking address to `_userAddr`\\n     *\\n     * Returns true if the transation is success\\n     *\\n     * Emits a {Transfer} event from IERC20\\n     */\\n    function handleListingTx (address _userAddr, uint256 _amount, bool _in) public override returns (bool) {\\n        require(listingStatus[msg.sender]._isCreated, \\\"ANFTV2: Invalid Listing\\\");\\n        require(listingStatus[msg.sender]._active, \\\"ANFTV2: Inactive Listing\\\");\\n        address sender;\\n        address recipient;\\n        (sender, recipient) = _in ? (_userAddr, stakingAddress) : (stakingAddress, _userAddr);\\n        super._transfer(sender, recipient, _amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Create a new listing (the tokenized version of a real estate product)\\n     * \\n     * Restricted to only validators\\n     *\\n     * A newly created listing is set with two properties: `_isCreated` and `_active`\\n     *\\n     * Listing validator shall be the validator address making the transaction. Owner of the listing shall be\\n     * the specified address\\n     * \\n     * Emits a {ListingCreation} event\\n     */\\n\\n    event Dummy(address _first, uint256 _second, uint256 _third);\\n\\n    function createListing(address _owner, uint256 _listingId) public override {\\n        require(hasRole(VALIDATOR, msg.sender), \\\"ANFTV2: Unauthorized\\\");\\n        ListingV2 newListing = new ListingV2(msg.sender, _owner, _listingId);\\n        emit ListingCreation(msg.sender, _owner, address(newListing));    \\n        emit Dummy(address(this), 12, 15);\\n        listingStatus[address(newListing)]._isCreated = true;    \\n        listingStatus[address(newListing)]._active = true;    \\n    }\\n\\n    /**\\n     * @dev Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation\\n     *\\n     * Restricted to only validators\\n     *\\n     * The `_listingAddr` must be the address of a created listing\\n     * \\n     */\\n    function toggleListingStatus (address _listingAddr) public override {\\n        require(hasRole(VALIDATOR, msg.sender), \\\"ANFTV2: Unauthorized\\\");\\n        require(listingStatus[_listingAddr]._isCreated, \\\"ANFTV2: Invalid Listing\\\");\\n        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;\\n    }\\n\\n    /**\\n     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,\\n     * or the previous address is compromised.\\n     */    \\n    function updateStakingAddress (address _stakingAddr) public override {\\n        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), \\\"ANFTV2: Unauthorized\\\");\\n        stakingAddress = _stakingAddr;\\n        emit UpdateStakingAddr(_stakingAddr);\\n    }\\n\\n\\n}\\n\\n\",\"keccak256\":\"0x09cf35366ed9394b85b9735e47b91720245b5bba82f3faf05d4e828eed833c9b\",\"license\":\"MIT\"},\"contracts/v2/IANFTV2.sol\":{\"content\":\"pragma solidity ^0.8.0;\\n\\ninterface IANFTV2 {\\n    function handleListingTx (address _userAddr, uint256 _amount, bool _in) external returns (bool);\\n    function createListing(address _owner, uint256 _listingId) external ;\\n    function toggleListingStatus (address _listingAddr) external ;\\n    function updateStakingAddress (address _stakingAddr) external ;\\n\\n\\n    /**\\n     * @dev Emitted a new Listing is created. `_validator` should be the caller, \\n     * `_owner` should be the specified address and `_listingAddress` is the\\n     * newly created listing address\\n     */\\n    event ListingCreation(address _validator, address _owner, address _listingAddress);\\n\\n    /**\\n     * @dev Emitted when the staking address is updated, `_stakingAddr` should be the new address \\n     */\\n    event UpdateStakingAddr(address _stakingAddr);\\n}\",\"keccak256\":\"0xf29b84e5760cdcd6482ebea01f8c7f0a8ab2c7d34c394291371129502e75fc3f\"},\"contracts/v2/ListingStorage.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This contract stores basic configurations for a listing.\\n *\\n * The purpose of the this is abtract the basic getters-setters away from the staking/rewards logic\\n */\\n\\ncontract ListingStorage {\\n\\n    /**\\n     * @dev Owner is the address pays tokens to take/maintain the ownership for a listing\\n     */\\n    address public owner;\\n\\n    /**\\n     * @dev Listing ID is to bind the Listing NFT on the blockchain with the listing data in\\n     * the real world\\n     */\\n    uint256 public listingId;\\n\\n    /**\\n     * @dev Validator is the authorized account to update the listing configurations\\n     */\\n    address public validator;\\n\\n    /**\\n     * @dev Token contract should be the contract create this listing\\n     */\\n    address public tokenContract;\\n\\n    /**\\n     * @dev Ownership value should be in the unix timestamp, determinating if the listing is forfeited by the owner\\n     * (ownership < block/timestamp) and ready to be taken by another owner user.\\n     */\\n    uint256 public ownership;\\n\\n    /**\\n     * @dev The market value of the listing in real world. Determined by the board, mutable by the validator\\n     */\\n    uint256 public value;\\n\\n    /**\\n     * @dev Daily payment determines how long the owner has the ownership over the listing with the tokens they pay.\\n     */\\n    uint256 public dailyPayment;\\n\\n    /**\\n     * @dev Workers are addresses authorized by the owner to use the listing in the real world\\n     */\\n    mapping (address => bool) public workers;\\n\\n    /**\\n     * @dev Options are business activities in real world. Each options has a rewards percentage (sum up to 100);\\n     * Reward value for each option is set by the validator. \\n     *\\n     * `_isSet` flag is default to false, until the option is set by the validator\\n     * The flag is to prevent users from participating in the activities which arent set up by the validator.\\n     *\\n     * Everytime an user participates in an activity, the `_totalStake` is increased by the registered amount\\n     */\\n    struct OptionModel {\\n        uint256 _totalStake;\\n        uint256 _reward;\\n        bool _isSet;\\n    }\\n    mapping (uint => OptionModel) public options;\\n\\n    /**\\n     * @dev Option reward value is set up by and only by the validator\\n     * Reward should not exceed 100;\\n     * The sum of reward values from all options should be 100;\\n     * \\n     * `isSet` is toggled to true for options which were setup\\n     *\\n     * For example A, B, C, D are options. Ar, Br, Cr, Dr are the reward values respectively\\n     * The validator should set up the option carefully, so Ar + Br + Cr + Dr = 100\\n     */\\n    function setupOptionReward (uint256 _optionId, uint256 _reward) public onlyValidator {\\n        require(_reward <= 100, \\\"Listing: Invalid reward value\\\");\\n        options[_optionId]._reward = _reward;\\n        options[_optionId]._isSet = true;\\n    }   \\n    \\n    /**\\n     * @dev Validator can update the listing ID\\n     */\\n    function updatelistingId (uint256 _listingId) public onlyValidator {\\n        listingId = _listingId;\\n    }\\n\\n    /**\\n     * @dev Validator can update the owner value\\n     * Owner value can only changeable if the current owner has forfeited the listing\\n     */\\n    function updateOwner (address _newOwner) public onlyValidator {\\n        require(ownership < block.timestamp, \\\"Ownership not expired!\\\");\\n        owner = _newOwner;\\n    }\\n    \\n    /**\\n     * @dev Validator can update the listing value to reflect the real estate price in the real world\\n     */\\n    function updateValue (uint256 _value) public onlyValidator {\\n        value = _value;\\n    }\\n\\n    /**\\n     * @dev Validator can update the daily payment value to reflect the real estate price in the real world\\n     */\\n    function updateDailyPayment (uint256 _dailyPayment) public onlyValidator {\\n        dailyPayment = _dailyPayment;\\n    }\\n\\n    /**\\n     * @dev Validator can update themselves\\n     */\\n    function updateValidator (address _validator) public onlyValidator {\\n        validator = _validator;\\n    }\\n\\n    /**\\n     * @dev Owner can update worker status. Which means they can choose/unchoose who\\n     * can use the listing in real world\\n     */\\n    function updateWorker(address _worker) public {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired\\\");\\n        workers[_worker] = !workers[_worker];\\n        emit UpdateWorker(_worker, workers[_worker]);\\n    }\\n    \\n    /**\\n     * @dev Modifier, restricting access to only the validator\\n     */\\n    modifier onlyValidator() {\\n        require(msg.sender == validator, \\\"Listing: Unauth!\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Emitted when the worker status is updated.\\n     *\\n     * `_worker` is the updated address, `_isAuthorized` is the new status\\n     */\\n    event UpdateWorker(address _worker, bool _isAuthorized);\\n}\\n\",\"keccak256\":\"0xc9449297824674a2478c99536c1d3497ded525cef033d2f4ff8273cd9a695a83\",\"license\":\"MIT\"},\"contracts/v2/ListingV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\nimport \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\nimport \\\"./ANFTV2.sol\\\";\\nimport \\\"./ListingStorage.sol\\\";\\n\\n/**\\n * @dev This contract represents a real estate product. Basic getter-setters are within {ListingStorage}\\n * This contract focus more on the staking/reward logic\\n */\\ncontract ListingV2 is ListingStorage {\\n\\n    using SafeMath for uint;\\n\\n    /**\\n    * @dev Stake info is recorded every time an user registers for staking and updated when they update their previous staking\\n    *\\n    * Stakings are recorded by the option (or business activity) ID, combined with user's address\\n    * A JSON represenation of a staking record:\\n    {\\n        \\\"1\\\": {\\n            \\\"0x000001\\\": {\\n                \\\"_start\\\": \\\"1000\\\",\\n                \\\"_amount\\\": \\\"100\\\",\\n                \\\"_active\\\": true\\n            }\\n        }\\n    }\\n    * This could be understood as: Address `0x000001` staking for the option with ID = 1. The stake starts at\\n    * the timestamp of 100 with the registered amount of 1,000 tokens. The stake is still active (user hasnt canceled)\\n    */\\n    struct StakingModel {\\n        uint256 _start;\\n        uint256 _amount;\\n        bool _active;\\n    }\\n    mapping (uint256 => mapping (address => StakingModel)) public stakings;\\n\\n    /**\\n    * @dev The reward pool is for paying out rewards for stakeholder.\\n    * \\n    * Reward pool is:\\n    *   - Increased when owner transfer tokens to extend ownership\\n    *   - Decreased when owner withdraw tokens\\n    *   - Decreased when paying rewards for stakeholder.\\n    */\\n    uint256 public rewardPool;\\n\\n    /**\\n    * @dev Total stake represents the tokens are staked for all options\\n    * \\n    * TotalStake is:\\n    *   - Increased when user stake (register) for any options\\n    *   - Decreased when user unstake (unregister) for any options\\n    */\\n    uint256 public totalStake;\\n\\n    /**\\n    * @dev Owner and validator is configed upon listing creation according to the specified arguments\\n    * \\n    * Ownership value is initialized to be the current block.timestamp\\n    *\\n    * Token contract should be the Caller/Listing creator address\\n    */\\n    constructor(address _validator, address _owner, uint256 _listingId) {\\n        owner = _owner;\\n        validator = _validator;\\n        listingId = _listingId;\\n        ownership = block.timestamp;\\n        tokenContract = msg.sender;\\n    }\\n\\n    /**\\n    * @dev Owner can extend ownership by transfering tokens to the staking address\\n    * \\n    * sender must be listing owner owner to extend listing ownership, OR the ownership value is in the past (current owner forfeits the listing).\\n    * In the forfeit case, the sender will be the new owner, and new ownership would be time credit added on top of current timestamp\\n    *\\n    * Time credit formula:\\n    *   C = (A / D) x 86400\\n    *      C (timestamp): Time credit (in seconds)\\n    *      A (tokens): Transfered amount to extend ownership\\n    *      D (tokens): Daily payment, specified by the validator\\n    *      86400: Total seconds in a day (60*60*24)\\n    */\\n    function extendOwnership (uint256 _amount) public {\\n        require(msg.sender == owner || ownership <  block.timestamp, \\\"Listing: Unauth!\\\");\\n        \\n        bool success = ANFTV2(tokenContract).handleListingTx(msg.sender, _amount, true);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        uint256 existingOwnership = ownership;\\n        address existingOwner = owner;\\n        \\n        if (existingOwnership < block.timestamp) {\\n            owner = msg.sender;\\n            existingOwnership = block.timestamp;\\n        }\\n\\n        rewardPool = rewardPool.add(_amount);\\n        uint256 credDays = _amount.div(dailyPayment);\\n        \\n        ownership = existingOwnership.add(credDays.mul(86400));\\n        emit OwnershipExtension(existingOwner, owner, existingOwnership, ownership, _amount);\\n\\n    }\\n\\n    /**\\n    * @dev Owner can partially withdraw the tokens they previously transfered to extend the listing ownership (and forfeit the ownership)\\n    * \\n    * Ownership value must be in the future (larger or equal to block.timestamp)\\n    *\\n    * Ownership withdraw formula:\\n    *   CL = OS - TS\\n    *   VR = (CL / 86400) * D\\n    *      CL (timestamp): Time credit left\\n    *      OS (timestamp): Exisiting ownership\\n    *      TS (timestamp): Current block timestamp\\n    *      D  (tokens):  Daily payment, specified by the validator\\n    *      VR (tokens): Value to return to the owner\\n    *\\n    * `valueToReturn` shall be transfered from Funds account to user, if success the ownership value\\n    * should be reset to current TS, and rewardPool is decreased by `valueToReturn`\\n    */\\n    function withdraw() public {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired!\\\");\\n\\n        uint256 valueToReturn = ((ownership - block.timestamp).div(86400)).mul(dailyPayment);\\n\\n        bool success = ANFTV2(tokenContract).handleListingTx(msg.sender, valueToReturn, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        emit Withdraw(owner, valueToReturn);\\n\\n        rewardPool = rewardPool.sub(valueToReturn);\\n        ownership = block.timestamp;\\n    }\\n\\n    /**\\n    * @dev Stakeholders can claim their reward they previously registed\\n    * \\n    * See {calculateStakeholderReward} for the reward payout formula\\n    *\\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    * Users must have at least `_amount` tokens in their balance\\n    *\\n    * If the transfer from the funds address to user's address fulfilled, an {Claim} event is emitted\\n    * rewardPool is decreased by the payout amount, and the stake start is reset to the current block.timestamp\\n    */\\n    function claimReward (uint256 _optionId) public {\\n        StakingModel storage userStake = stakings[_optionId][msg.sender];\\n        require(userStake._active, \\\"Listing: Register first!\\\");\\n\\n        uint256 callerBalance = ANFTV2(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= userStake._amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        uint256 payoutAmount = calculateStakeholderReward(_optionId, userStake);\\n        bool success = ANFTV2(tokenContract).handleListingTx(msg.sender, payoutAmount, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        emit Claim(msg.sender, payoutAmount, userStake._start, block.timestamp);\\n\\n        userStake._start = block.timestamp;\\n        rewardPool = rewardPool.sub(payoutAmount);              \\n    }\\n\\n    /**\\n    * @dev User can register to be a stakeholder.\\n    * \\n    * NOTE The key difference of this staking model is the user's token balance isnt deducted (like other staking models).\\n    * Users, however, need to have at least registered amount in their balance WHEN they claim rewards\\n    *\\n    * Users must have at least `_amount` tokens in their balance\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * `_amount` is the registered amount\\n    * `_optionId` is the option which user would like to register\\n    * `_increase` flag helps user increase/decrease the amount they previously registered\\n    *\\n    * Both listing total stake and option total stake is increased by `_amount`\\n    * Emits an {Register} event\\n    */\\n    function register (uint256 _amount, uint256 _optionId, bool _increase) public onlyActiveListing {\\n        require(options[_optionId]._isSet, \\\"Listing: Option not available\\\");\\n        uint256 callerBalance = ANFTV2(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= _amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        StakingModel storage userStake = stakings[_optionId][msg.sender];\\n\\n        userStake._amount = _increase ? userStake._amount.add(_amount) : userStake._amount.sub(_amount);\\n        userStake._start = block.timestamp;\\n        userStake._active = true;\\n\\n        options[_optionId]._totalStake = options[_optionId]._totalStake.add(_amount);\\n  \\n        totalStake = totalStake.add(_amount);\\n\\n        emit Register(msg.sender, _amount, _optionId, block.timestamp);\\n    }\\n\\n    /**\\n    * @dev User can unregister their previous stake\\n    * \\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * Staking info is reset to initial status\\n    *\\n    * `_optionId` is the option which user would like to unregister\\n    *\\n    * Both listing total stake and option total stake is decreased by `_amount`\\n    * Emits an {Unregister} event\\n    */\\n    function unregister(uint256 _optionId) public onlyActiveListing {\\n        StakingModel storage userStake = stakings[_optionId][msg.sender];\\n\\n        require(userStake._active, \\\"Listing: Register first!\\\");\\n\\n        options[_optionId]._totalStake = options[_optionId]._totalStake.sub(userStake._amount);\\n\\n        totalStake = totalStake.sub(userStake._amount);\\n\\n        userStake._amount = 0;\\n        userStake._active = false;\\n        userStake._start = 0;\\n\\n        emit Unregister(msg.sender, block.timestamp);\\n    }\\n\\n    /**\\n    * @dev Stakeholder reward formula\\n    * \\n    * T    = TS * 100 / LV\\n    * RTd  = DA * T%\\n    * Ar   = ((RTd * 100 / Ap) / At) * Ax\\n    * Rm   = Ar * Sd\\n\\n    *   T(%)      : Percentage for total token rewarding (less or equal than 86)\\n    *               If listing is forfeited, T is less or equal than 50\\n    *   TS        :   Total tokens staked for the listing\\n    *   LV        :   Listing value\\n    *   RTd       :  Total tokens for rewarding daily for ALL stakeholder (daily avaiable tokens for claiming)\\n    *   DA        :   Daily Payment\\n    *   Ap(%)     :     Reward percentage value for the chosen option\\n    *   At(tokens): The staked amount for an option by the stakeholder\\n    *   Ax(tokens): Available daily tokens for claiming for ONE stakeholder for one option\\n    *   Ar(tokens): Available daily tokens for claiming for ONE stakeholder for one option\\n    *   Sd(days)  : Staked days\\n    *   Rm(tokens): The reward for a stakeholder after a period of time\\n    */\\n    function calculateStakeholderReward (uint256 _optionId, StakingModel storage _userStake) private view returns (uint256) {\\n        uint256 T = totalStake.mul(100).div(value);\\n        if (T > 86) {\\n            T = 86;\\n        }\\n\\n        if (ownership < block.timestamp && T > 50) {\\n            T = 50;\\n        }\\n\\n        uint256 RTd = dailyPayment.mul(T).div(100);\\n\\n        OptionModel memory optionInfo = options[_optionId];\\n\\n        uint256 Ar = (RTd.mul(optionInfo._reward).div(100)).mul(_userStake._amount).div(optionInfo._totalStake);\\n\\n        uint256 Sd = (block.timestamp - _userStake._start) / 86400;\\n\\n        return Ar.mul(Sd);\\n    }\\n\\n    /**\\n     * @dev Modifier, making sure the current listing is active to proceed further logic\\n     */\\n    modifier onlyActiveListing() {\\n        (, bool _active) = ANFTV2(tokenContract).listingStatus(address(this));\\n\\n        require(_active, \\\"Listing: Inactive listing!\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Emitted when the owner extends ownership with the listing\\n     *\\n     * `_prevOwner` is the previous owner address\\n     * `_newOwner` is the new owner address\\n     * `_start` is the existing ownership\\n     * `_end` is when the ownership ends\\n     * `_amount` is the transfered amount\\n     */\\n    event OwnershipExtension (address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount);\\n\\n    /**\\n     * @dev Emitted when the owner withdraws tokens (forfeit ownership)\\n     *\\n     * `owner` is the owner withdrawing\\n     * `_valueToReturn` is the amount to return to the owner\\n     */\\n    event Withdraw (address owner, uint256 _valueToReturn);\\n\\n    /** @dev Emitted when an user claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_reward` is the reward amount\\n     * `_from` -> `_to` is the staking period of time\\n     */\\n    event Claim(address _stakeholder, uint256 _reward, uint256 _from, uint256 _to);\\n\\n    /** @dev Emitted when an user registers for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_amount` is the registered amount\\n     * `_optionId` is the chosen option\\n     * `_start` is when the user registers\\n     */\\n    event Register(address _stakeholder, uint256 _amount, uint256 _optionId, uint256 _start);\\n\\n    /** @dev Emitted when an user unregisters for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_at` is when the user unregisters\\n     */\\n    event Unregister(address _stakeholder, uint _at);\\n\\n\\n}\",\"keccak256\":\"0xd0c01f234b4e82d2eea0ba8e5d858c7c1bbf965c4c0f669224ee91038233dab3\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002e8538038062002e8583398101604081905262000034916200037f565b604080518082018252600a81526920a7232a102a37b5b2b760b11b6020808301918252835180850190945260048452631053919560e21b9084015281519192916200008291600391620002d9565b50805162000098906004906020840190620002d9565b505050620000d333620000b06200012e60201b60201c565b620000bd90600a62000413565b620000cd9063496ed400620004d2565b62000133565b600680546001600160a01b0319166001600160a01b038316179055620000fb6000336200021c565b620001277fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a336200021c565b5062000547565b601290565b6001600160a01b0382166200018e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001a29190620003af565b90915550506001600160a01b03821660009081526020819052604081208054839290620001d1908490620003af565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35b5050565b6200021882826200022e8282620002ac565b620002185760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002683390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b828054620002e790620004f4565b90600052602060002090601f0160209004810192826200030b576000855562000356565b82601f106200032657805160ff191683800117855562000356565b8280016001018555821562000356579182015b828111156200035657825182559160200191906001019062000339565b506200036492915062000368565b5090565b5b8082111562000364576000815560010162000369565b60006020828403121562000391578081fd5b81516001600160a01b0381168114620003a8578182fd5b9392505050565b60008219821115620003c557620003c562000531565b500190565b600181815b808511156200040b578160001904821115620003ef57620003ef62000531565b80851615620003fd57918102915b93841c9390800290620003cf565b509250929050565b6000620003a860ff8416836000826200042f57506001620002d3565b816200043e57506000620002d3565b8160018114620004575760028114620004625762000482565b6001915050620002d3565b60ff84111562000476576200047662000531565b50506001821b620002d3565b5060208310610133831016604e8410600b8410161715620004a7575081810a620002d3565b620004b38383620003ca565b8060001904821115620004ca57620004ca62000531565b029392505050565b6000816000190483118215151615620004ef57620004ef62000531565b500290565b600181811c908216806200050957607f821691505b602082108114156200052b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b61292e80620005576000396000f3fe608060405234801561001057600080fd5b50600436106101335760003560e01c806301ffc9a71461013857806306fdde0314610160578063095ea7b31461017557806318160ddd1461018857806323b872dd1461019a578063248a9ca3146101ad5780632f2ff15d146101c0578063313ce567146101d557806336568abe146101e4578063393df8cb146101f7578063395093511461020d5780635b06a1d1146102205780636b62393e1461023357806370a082311461024657806385e1c7241461026f57806391d148541461028257806395d89b4114610295578063a217fddf1461029d578063a457c2d7146102a5578063a9059cbb146102b8578063d547741f146102cb578063d7b4be24146102de578063dd62ed3e146102fe578063e6d50cd714610337578063e9dc65bb1461037a575b600080fd5b61014b6101463660046111b2565b61038d565b60405190151581526020015b60405180910390f35b6101686103c4565b604051610157919061125d565b61014b61018336600461110c565b610456565b6002545b604051908152602001610157565b61014b6101a83660046110d1565b61046c565b61018c6101bb366004611178565b61051b565b6101d36101ce366004611190565b610530565b005b60405160128152602001610157565b6101d36101f2366004611190565b610552565b61018c600080516020620028d983398151915281565b61014b61021b36600461110c565b6105d0565b6101d361022e366004611085565b61060c565b6101d3610241366004611085565b610689565b61018c610254366004611085565b6001600160a01b031660009081526020819052604090205490565b6101d361027d36600461110c565b610728565b61014b610290366004611190565b61085e565b610168610889565b61018c600081565b61014b6102b336600461110c565b610898565b61014b6102c636600461110c565b610931565b6101d36102d9366004611190565b61093e565b6006546102f1906001600160a01b031681565b6040516101579190611249565b61018c61030c36600461109f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610363610345366004611085565b60076020526000908152604090205460ff8082169161010090041682565b604080519215158352901515602083015201610157565b61014b610388366004611135565b61095b565b60006001600160e01b03198216637965db0b60e01b14806103be57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103d390611369565b80601f01602080910402602001604051908101604052809291908181526020018280546103ff90611369565b801561044c5780601f106104215761010080835404028352916020019161044c565b820191906000526020600020905b81548152906001019060200180831161042f57829003601f168201915b5050505050905090565b6000610463338484610a2e565b50600192915050565b6000610479848484610b52565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105035760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105108533858403610a2e565b506001949350505050565b60009081526005602052604090206001015490565b6105398261051b565b6105438133610d22565b61054d8383610d86565b505050565b6001600160a01b03811633146105c25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104fa565b6105cc8282610e0c565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104639185906106079086906112ef565b610a2e565b61061760003361085e565b6106335760405162461bcd60e51b81526004016104fa906112c1565b600680546001600160a01b0319166001600160a01b0383161790556040517f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d9061067e908390611249565b60405180910390a150565b6106a2600080516020620028d98339815191523361085e565b6106be5760405162461bcd60e51b81526004016104fa906112c1565b6001600160a01b03811660009081526007602052604090205460ff166106f65760405162461bcd60e51b81526004016104fa90611290565b6001600160a01b03166000908152600760205260409020805461ff001981166101009182900460ff1615909102179055565b610741600080516020620028d98339815191523361085e565b61075d5760405162461bcd60e51b81526004016104fa906112c1565b600033838360405161076e9061105b565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f0801580156107a8573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a160408051308152600c6020820152600f8183015290517fbf99df89c6b2ecf16ce40c2c19f755c0d43bf528d38fc8a47af1b92e4662e2539181900360600190a16001600160a01b03166000908152600760205260409020805461ffff19166101011790555050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103d390611369565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561091a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104fa565b6109273385858403610a2e565b5060019392505050565b6000610463338484610b52565b6109478261051b565b6109518133610d22565b61054d8383610e0c565b3360009081526007602052604081205460ff1661098a5760405162461bcd60e51b81526004016104fa90611290565b33600090815260076020526040902054610100900460ff166109e95760405162461bcd60e51b8152602060048201526018602482015277414e465456323a20496e616374697665204c697374696e6760401b60448201526064016104fa565b60008083610a03576006546001600160a01b031686610a12565b60065486906001600160a01b03165b9092509050610a22828287610b52565b50600195945050505050565b6001600160a01b038316610a905760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104fa565b6001600160a01b038216610af15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104fa565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610bb65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104fa565b6001600160a01b038216610c185760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104fa565b6001600160a01b03831660009081526020819052604090205481811015610c905760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104fa565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610cc79084906112ef565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d1391815260200190565b60405180910390a35b50505050565b610d2c828261085e565b6105cc57610d44816001600160a01b03166014610e73565b610d4f836020610e73565b604051602001610d609291906111da565b60408051601f198184030181529082905262461bcd60e51b82526104fa9160040161125d565b610d90828261085e565b6105cc5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610dc83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e16828261085e565b156105cc5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610e82836002611307565b610e8d9060026112ef565b6001600160401b03811115610eb257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610edc576020820181803683370190505b509050600360fc1b81600081518110610f0557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f4257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610f66846002611307565b610f719060016112ef565b90505b6001811115611005576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fb357634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610fd757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610ffe81611352565b9050610f74565b5083156110545760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104fa565b9392505050565b61151e80620013bb83390190565b80356001600160a01b038116811461108057600080fd5b919050565b600060208284031215611096578081fd5b61105482611069565b600080604083850312156110b1578081fd5b6110ba83611069565b91506110c860208401611069565b90509250929050565b6000806000606084860312156110e5578081fd5b6110ee84611069565b92506110fc60208501611069565b9150604084013590509250925092565b6000806040838503121561111e578182fd5b61112783611069565b946020939093013593505050565b600080600060608486031215611149578283fd5b61115284611069565b9250602084013591506040840135801515811461116d578182fd5b809150509250925092565b600060208284031215611189578081fd5b5035919050565b600080604083850312156111a2578182fd5b823591506110c860208401611069565b6000602082840312156111c3578081fd5b81356001600160e01b031981168114611054578182fd5b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b81526000835161120c816017850160208801611326565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161123d816028840160208801611326565b01602801949350505050565b6001600160a01b0391909116815260200190565b602081526000825180602084015261127c816040850160208701611326565b601f01601f19169190910160400192915050565b602080825260179082015276414e465456323a20496e76616c6964204c697374696e6760481b604082015260600190565b60208082526014908201527310539195158c8e88155b985d5d1a1bdc9a5e995960621b604082015260600190565b60008219821115611302576113026113a4565b500190565b6000816000190483118215151615611321576113216113a4565b500290565b60005b83811015611341578181015183820152602001611329565b83811115610d1c5750506000910152565b600081611361576113616113a4565b506000190190565b600181811c9082168061137d57607f821691505b6020821081141561139e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe608060405234801561001057600080fd5b5060405161151e38038061151e83398101604081905261002f91610093565b600080546001600160a01b039384166001600160a01b0319918216179091556002805494909316938116939093179091556001554260045560038054909116331790556100ce565b80516001600160a01b038116811461008e57600080fd5b919050565b6000806000606084860312156100a7578283fd5b6100b084610077565b92506100be60208501610077565b9150604084015190509250925092565b611441806100dd6000396000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c8063103a62ba1461012d5780632a421332146101425780633a5381b5146101a15780633ccfd60b146101c15780633fa4f245146101c95780634048a257146101e0578063409e2205146102135780634338fbaa14610245578063506f50bc1461024e57806354a499021461026157806355a373d614610274578063573c0bd3146102875780635d03147a1461029a578063635b2770146102a357806366666aa9146102b657806380e4cc9d146102bf578063880cdc31146102d25780638b0e9f3f146102e55780638da5cb5b146102ee5780639405dfdd14610301578063a02b161e1461030a578063a5edfb531461031d578063ae169a5014610330578063c24be7fb14610343575b600080fd5b61014061013b36600461114e565b610356565b005b61017f61015036600461117e565b600960209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6002546101b4906001600160a01b031681565b6040516101989190611202565b61014061038e565b6101d260055481565b604051908152602001610198565b6102036101ee3660046110df565b60076020526000908152604090205460ff1681565b6040519015158152602001610198565b61017f61022136600461114e565b60086020526000908152604090208054600182015460029092015490919060ff1683565b6101d260065481565b61014061025c36600461114e565b61053b565b61014061026f3660046111a9565b61056a565b6003546101b4906001600160a01b031681565b61014061029536600461114e565b61060d565b6101d260045481565b6101406102b13660046110df565b61063c565b6101d2600a5481565b6101406102cd3660046110df565b610688565b6101406102e03660046110df565b61076a565b6101d2600b5481565b6000546101b4906001600160a01b031681565b6101d260015481565b61014061031836600461114e565b610800565b61014061032b36600461114e565b610973565b61014061033e36600461114e565b610b20565b6101406103513660046111ca565b610d13565b6002546001600160a01b031633146103895760405162461bcd60e51b8152600401610380906112e1565b60405180910390fd5b600655565b6000546001600160a01b031633146103b85760405162461bcd60e51b8152600401610380906112e1565b4260045410156104085760405162461bcd60e51b815260206004820152601b60248201527a4c697374696e673a204f776e65727368697020657870697265642160281b6044820152606401610380565b600061043160065461042b620151804260045461042591906113cd565b90610f91565b90610fa4565b60035460405163e9dc65bb60e01b81529192506000916001600160a01b039091169063e9dc65bb9061046b9033908690869060040161122f565b602060405180830381600087803b15801561048557600080fd5b505af1158015610499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd91906110f9565b9050806104dc5760405162461bcd60e51b81526004016103809061133f565b6000546040517f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649161051b916001600160a01b03909116908590611216565b60405180910390a1600a546105309083610fb0565b600a55505042600455565b6002546001600160a01b031633146105655760405162461bcd60e51b8152600401610380906112e1565b600155565b6002546001600160a01b031633146105945760405162461bcd60e51b8152600401610380906112e1565b60648111156105e55760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c75650000006044820152606401610380565b600091825260086020526040909120600180820192909255600201805460ff19169091179055565b6002546001600160a01b031633146106375760405162461bcd60e51b8152600401610380906112e1565b600555565b6002546001600160a01b031633146106665760405162461bcd60e51b8152600401610380906112e1565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106b25760405162461bcd60e51b8152600401610380906112e1565b4260045410156107015760405162461bcd60e51b815260206004820152601a602482015279131a5cdd1a5b99ce8813dddb995c9cda1a5c08195e1c1a5c995960321b6044820152606401610380565b6001600160a01b038116600081815260076020908152604091829020805460ff8082161560ff1990921682179092558351948552161515908301527f988d040d21ebfc430db6cf3c20bc0a6f4ff9d36f2cb7c6dea70424a709746734910160405180910390a150565b6002546001600160a01b031633146107945760405162461bcd60e51b8152600401610380906112e1565b42600454106107de5760405162461bcd60e51b81526020600482015260166024820152754f776e657273686970206e6f7420657870697265642160501b6044820152606401610380565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460405163e6d50cd760e01b81526000916001600160a01b03169063e6d50cd790610831903090600401611202565b604080518083038186803b15801561084857600080fd5b505afa15801561085c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108809190611115565b915050806108a05760405162461bcd60e51b81526004016103809061130b565b60008281526009602090815260408083203384529091529020600281015460ff166108dd5760405162461bcd60e51b815260040161038090611278565b60018101546000848152600860205260409020546108fa91610fb0565b6000848152600860205260409020556001810154600b5461091a91610fb0565b600b5560006001820181905560028201805460ff1916905581556040517f46d17c3a7286a693e0dc0769e261984d3981e0f266eda030d0b63bcaa23e776d906109669033904290611216565b60405180910390a1505050565b6000546001600160a01b031633148061098d575042600454105b6109a95760405162461bcd60e51b8152600401610380906112e1565b60035460405163e9dc65bb60e01b81526000916001600160a01b03169063e9dc65bb906109df903390869060019060040161122f565b602060405180830381600087803b1580156109f957600080fd5b505af1158015610a0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3191906110f9565b905080610a505760405162461bcd60e51b81526004016103809061133f565b6004546000546001600160a01b031642821015610a7d57600080546001600160a01b031916331790554291505b600a54610a8a9085610fbc565b600a55600654600090610a9e908690610f91565b9050610ab7610ab08262015180610fa4565b8490610fbc565b6004819055600054604080516001600160a01b038087168252909216602083015281018590526060810191909152608081018690527fef4746b8d8b529d352fbea5e8f5194179982c1cb712ce4e35c471cfeaefb8bb49060a00160405180910390a15050505050565b60008181526009602090815260408083203384529091529020600281015460ff16610b5d5760405162461bcd60e51b815260040161038090611278565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610b8e903390600401611202565b60206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611166565b90508160010154811015610c045760405162461bcd60e51b8152600401610380906112aa565b6000610c108484610fc8565b60035460405163e9dc65bb60e01b81529192506000916001600160a01b039091169063e9dc65bb90610c4a9033908690869060040161122f565b602060405180830381600087803b158015610c6457600080fd5b505af1158015610c78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9c91906110f9565b905080610cbb5760405162461bcd60e51b81526004016103809061133f565b83546040517f45c072aa05b9853b5a993de7a28bc332ee01404a628cec1a23ce0f659f842ef191610cf191339186914290611252565b60405180910390a1428455600a54610d099083610fb0565b600a555050505050565b60035460405163e6d50cd760e01b81526000916001600160a01b03169063e6d50cd790610d44903090600401611202565b604080518083038186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d939190611115565b91505080610db35760405162461bcd60e51b81526004016103809061130b565b60008381526008602052604090206002015460ff16610e145760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c650000006044820152606401610380565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610e45903390600401611202565b60206040518083038186803b158015610e5d57600080fd5b505afa158015610e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e959190611166565b905084811015610eb75760405162461bcd60e51b8152600401610380906112aa565b6000848152600960209081526040808320338452909152902083610ee9576001810154610ee49087610fb0565b610ef8565b6001810154610ef89087610fbc565b60018083019190915542825560028201805460ff19169091179055600085815260086020526040902054610f2c9087610fbc565b600086815260086020526040902055600b54610f489087610fbc565b600b556040517fb1ff33da568b8aef91249b2b57eb76b04eba1f8643e8bef5914442dbd7ccb2bf90610f81903390899089904290611252565b60405180910390a1505050505050565b6000610f9d828461138e565b9392505050565b6000610f9d82846113ae565b6000610f9d82846113cd565b6000610f9d8284611376565b600080610fe76005546104256064600b54610fa490919063ffffffff16565b90506056811115610ff6575060565b426004541080156110075750603281115b15611010575060325b600061102c606461042584600654610fa490919063ffffffff16565b60008681526008602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908901549495509361108992610425919061042b9060649084908a90610fa4565b90506000620151808760000154426110a191906113cd565b6110ab919061138e565b90506110b78282610fa4565b98975050505050505050565b80356001600160a01b03811681146110da57600080fd5b919050565b6000602082840312156110f0578081fd5b610f9d826110c3565b60006020828403121561110a578081fd5b8151610f9d816113fa565b60008060408385031215611127578081fd5b8251611132816113fa565b6020840151909250611143816113fa565b809150509250929050565b60006020828403121561115f578081fd5b5035919050565b600060208284031215611177578081fd5b5051919050565b60008060408385031215611190578182fd5b823591506111a0602084016110c3565b90509250929050565b600080604083850312156111bb578182fd5b50508035926020909101359150565b6000806000606084860312156111de578081fd5b833592506020840135915060408401356111f7816113fa565b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393909316835260208301919091521515604082015260600190565b6001600160a01b0394909416845260208401929092526040830152606082015260800190565b6020808252601890820152774c697374696e673a2052656769737465722066697273742160401b604082015260600190565b6020808252601e908201527f4c697374696e673a20496e73756666696369656e742062616c616e6365210000604082015260600190565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b6020808252601a90820152794c697374696e673a20496e616374697665206c697374696e672160301b604082015260600190565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b60008219821115611389576113896113e4565b500190565b6000826113a957634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156113c8576113c86113e4565b500290565b6000828210156113df576113df6113e4565b500390565b634e487b7160e01b600052601160045260246000fd5b801515811461140857600080fd5b5056fea264697066735822122060dd1be6021540465d2e84616b53a5a2ff7313e0e2d8b16ce012855bb374eea164736f6c63430008040033a95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715aa2646970667358221220080133e82081881827ba84ee15f01229efb5cddc11150b04052dcc15628c8eb964736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101335760003560e01c806301ffc9a71461013857806306fdde0314610160578063095ea7b31461017557806318160ddd1461018857806323b872dd1461019a578063248a9ca3146101ad5780632f2ff15d146101c0578063313ce567146101d557806336568abe146101e4578063393df8cb146101f7578063395093511461020d5780635b06a1d1146102205780636b62393e1461023357806370a082311461024657806385e1c7241461026f57806391d148541461028257806395d89b4114610295578063a217fddf1461029d578063a457c2d7146102a5578063a9059cbb146102b8578063d547741f146102cb578063d7b4be24146102de578063dd62ed3e146102fe578063e6d50cd714610337578063e9dc65bb1461037a575b600080fd5b61014b6101463660046111b2565b61038d565b60405190151581526020015b60405180910390f35b6101686103c4565b604051610157919061125d565b61014b61018336600461110c565b610456565b6002545b604051908152602001610157565b61014b6101a83660046110d1565b61046c565b61018c6101bb366004611178565b61051b565b6101d36101ce366004611190565b610530565b005b60405160128152602001610157565b6101d36101f2366004611190565b610552565b61018c600080516020620028d983398151915281565b61014b61021b36600461110c565b6105d0565b6101d361022e366004611085565b61060c565b6101d3610241366004611085565b610689565b61018c610254366004611085565b6001600160a01b031660009081526020819052604090205490565b6101d361027d36600461110c565b610728565b61014b610290366004611190565b61085e565b610168610889565b61018c600081565b61014b6102b336600461110c565b610898565b61014b6102c636600461110c565b610931565b6101d36102d9366004611190565b61093e565b6006546102f1906001600160a01b031681565b6040516101579190611249565b61018c61030c36600461109f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610363610345366004611085565b60076020526000908152604090205460ff8082169161010090041682565b604080519215158352901515602083015201610157565b61014b610388366004611135565b61095b565b60006001600160e01b03198216637965db0b60e01b14806103be57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103d390611369565b80601f01602080910402602001604051908101604052809291908181526020018280546103ff90611369565b801561044c5780601f106104215761010080835404028352916020019161044c565b820191906000526020600020905b81548152906001019060200180831161042f57829003601f168201915b5050505050905090565b6000610463338484610a2e565b50600192915050565b6000610479848484610b52565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105035760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105108533858403610a2e565b506001949350505050565b60009081526005602052604090206001015490565b6105398261051b565b6105438133610d22565b61054d8383610d86565b505050565b6001600160a01b03811633146105c25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104fa565b6105cc8282610e0c565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104639185906106079086906112ef565b610a2e565b61061760003361085e565b6106335760405162461bcd60e51b81526004016104fa906112c1565b600680546001600160a01b0319166001600160a01b0383161790556040517f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d9061067e908390611249565b60405180910390a150565b6106a2600080516020620028d98339815191523361085e565b6106be5760405162461bcd60e51b81526004016104fa906112c1565b6001600160a01b03811660009081526007602052604090205460ff166106f65760405162461bcd60e51b81526004016104fa90611290565b6001600160a01b03166000908152600760205260409020805461ff001981166101009182900460ff1615909102179055565b610741600080516020620028d98339815191523361085e565b61075d5760405162461bcd60e51b81526004016104fa906112c1565b600033838360405161076e9061105b565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f0801580156107a8573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a160408051308152600c6020820152600f8183015290517fbf99df89c6b2ecf16ce40c2c19f755c0d43bf528d38fc8a47af1b92e4662e2539181900360600190a16001600160a01b03166000908152600760205260409020805461ffff19166101011790555050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103d390611369565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561091a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104fa565b6109273385858403610a2e565b5060019392505050565b6000610463338484610b52565b6109478261051b565b6109518133610d22565b61054d8383610e0c565b3360009081526007602052604081205460ff1661098a5760405162461bcd60e51b81526004016104fa90611290565b33600090815260076020526040902054610100900460ff166109e95760405162461bcd60e51b8152602060048201526018602482015277414e465456323a20496e616374697665204c697374696e6760401b60448201526064016104fa565b60008083610a03576006546001600160a01b031686610a12565b60065486906001600160a01b03165b9092509050610a22828287610b52565b50600195945050505050565b6001600160a01b038316610a905760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104fa565b6001600160a01b038216610af15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104fa565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610bb65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104fa565b6001600160a01b038216610c185760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104fa565b6001600160a01b03831660009081526020819052604090205481811015610c905760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104fa565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610cc79084906112ef565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d1391815260200190565b60405180910390a35b50505050565b610d2c828261085e565b6105cc57610d44816001600160a01b03166014610e73565b610d4f836020610e73565b604051602001610d609291906111da565b60408051601f198184030181529082905262461bcd60e51b82526104fa9160040161125d565b610d90828261085e565b6105cc5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610dc83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e16828261085e565b156105cc5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610e82836002611307565b610e8d9060026112ef565b6001600160401b03811115610eb257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610edc576020820181803683370190505b509050600360fc1b81600081518110610f0557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f4257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610f66846002611307565b610f719060016112ef565b90505b6001811115611005576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fb357634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610fd757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610ffe81611352565b9050610f74565b5083156110545760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104fa565b9392505050565b61151e80620013bb83390190565b80356001600160a01b038116811461108057600080fd5b919050565b600060208284031215611096578081fd5b61105482611069565b600080604083850312156110b1578081fd5b6110ba83611069565b91506110c860208401611069565b90509250929050565b6000806000606084860312156110e5578081fd5b6110ee84611069565b92506110fc60208501611069565b9150604084013590509250925092565b6000806040838503121561111e578182fd5b61112783611069565b946020939093013593505050565b600080600060608486031215611149578283fd5b61115284611069565b9250602084013591506040840135801515811461116d578182fd5b809150509250925092565b600060208284031215611189578081fd5b5035919050565b600080604083850312156111a2578182fd5b823591506110c860208401611069565b6000602082840312156111c3578081fd5b81356001600160e01b031981168114611054578182fd5b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b81526000835161120c816017850160208801611326565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161123d816028840160208801611326565b01602801949350505050565b6001600160a01b0391909116815260200190565b602081526000825180602084015261127c816040850160208701611326565b601f01601f19169190910160400192915050565b602080825260179082015276414e465456323a20496e76616c6964204c697374696e6760481b604082015260600190565b60208082526014908201527310539195158c8e88155b985d5d1a1bdc9a5e995960621b604082015260600190565b60008219821115611302576113026113a4565b500190565b6000816000190483118215151615611321576113216113a4565b500290565b60005b83811015611341578181015183820152602001611329565b83811115610d1c5750506000910152565b600081611361576113616113a4565b506000190190565b600181811c9082168061137d57607f821691505b6020821081141561139e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe608060405234801561001057600080fd5b5060405161151e38038061151e83398101604081905261002f91610093565b600080546001600160a01b039384166001600160a01b0319918216179091556002805494909316938116939093179091556001554260045560038054909116331790556100ce565b80516001600160a01b038116811461008e57600080fd5b919050565b6000806000606084860312156100a7578283fd5b6100b084610077565b92506100be60208501610077565b9150604084015190509250925092565b611441806100dd6000396000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c8063103a62ba1461012d5780632a421332146101425780633a5381b5146101a15780633ccfd60b146101c15780633fa4f245146101c95780634048a257146101e0578063409e2205146102135780634338fbaa14610245578063506f50bc1461024e57806354a499021461026157806355a373d614610274578063573c0bd3146102875780635d03147a1461029a578063635b2770146102a357806366666aa9146102b657806380e4cc9d146102bf578063880cdc31146102d25780638b0e9f3f146102e55780638da5cb5b146102ee5780639405dfdd14610301578063a02b161e1461030a578063a5edfb531461031d578063ae169a5014610330578063c24be7fb14610343575b600080fd5b61014061013b36600461114e565b610356565b005b61017f61015036600461117e565b600960209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6002546101b4906001600160a01b031681565b6040516101989190611202565b61014061038e565b6101d260055481565b604051908152602001610198565b6102036101ee3660046110df565b60076020526000908152604090205460ff1681565b6040519015158152602001610198565b61017f61022136600461114e565b60086020526000908152604090208054600182015460029092015490919060ff1683565b6101d260065481565b61014061025c36600461114e565b61053b565b61014061026f3660046111a9565b61056a565b6003546101b4906001600160a01b031681565b61014061029536600461114e565b61060d565b6101d260045481565b6101406102b13660046110df565b61063c565b6101d2600a5481565b6101406102cd3660046110df565b610688565b6101406102e03660046110df565b61076a565b6101d2600b5481565b6000546101b4906001600160a01b031681565b6101d260015481565b61014061031836600461114e565b610800565b61014061032b36600461114e565b610973565b61014061033e36600461114e565b610b20565b6101406103513660046111ca565b610d13565b6002546001600160a01b031633146103895760405162461bcd60e51b8152600401610380906112e1565b60405180910390fd5b600655565b6000546001600160a01b031633146103b85760405162461bcd60e51b8152600401610380906112e1565b4260045410156104085760405162461bcd60e51b815260206004820152601b60248201527a4c697374696e673a204f776e65727368697020657870697265642160281b6044820152606401610380565b600061043160065461042b620151804260045461042591906113cd565b90610f91565b90610fa4565b60035460405163e9dc65bb60e01b81529192506000916001600160a01b039091169063e9dc65bb9061046b9033908690869060040161122f565b602060405180830381600087803b15801561048557600080fd5b505af1158015610499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd91906110f9565b9050806104dc5760405162461bcd60e51b81526004016103809061133f565b6000546040517f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649161051b916001600160a01b03909116908590611216565b60405180910390a1600a546105309083610fb0565b600a55505042600455565b6002546001600160a01b031633146105655760405162461bcd60e51b8152600401610380906112e1565b600155565b6002546001600160a01b031633146105945760405162461bcd60e51b8152600401610380906112e1565b60648111156105e55760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c75650000006044820152606401610380565b600091825260086020526040909120600180820192909255600201805460ff19169091179055565b6002546001600160a01b031633146106375760405162461bcd60e51b8152600401610380906112e1565b600555565b6002546001600160a01b031633146106665760405162461bcd60e51b8152600401610380906112e1565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106b25760405162461bcd60e51b8152600401610380906112e1565b4260045410156107015760405162461bcd60e51b815260206004820152601a602482015279131a5cdd1a5b99ce8813dddb995c9cda1a5c08195e1c1a5c995960321b6044820152606401610380565b6001600160a01b038116600081815260076020908152604091829020805460ff8082161560ff1990921682179092558351948552161515908301527f988d040d21ebfc430db6cf3c20bc0a6f4ff9d36f2cb7c6dea70424a709746734910160405180910390a150565b6002546001600160a01b031633146107945760405162461bcd60e51b8152600401610380906112e1565b42600454106107de5760405162461bcd60e51b81526020600482015260166024820152754f776e657273686970206e6f7420657870697265642160501b6044820152606401610380565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460405163e6d50cd760e01b81526000916001600160a01b03169063e6d50cd790610831903090600401611202565b604080518083038186803b15801561084857600080fd5b505afa15801561085c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108809190611115565b915050806108a05760405162461bcd60e51b81526004016103809061130b565b60008281526009602090815260408083203384529091529020600281015460ff166108dd5760405162461bcd60e51b815260040161038090611278565b60018101546000848152600860205260409020546108fa91610fb0565b6000848152600860205260409020556001810154600b5461091a91610fb0565b600b5560006001820181905560028201805460ff1916905581556040517f46d17c3a7286a693e0dc0769e261984d3981e0f266eda030d0b63bcaa23e776d906109669033904290611216565b60405180910390a1505050565b6000546001600160a01b031633148061098d575042600454105b6109a95760405162461bcd60e51b8152600401610380906112e1565b60035460405163e9dc65bb60e01b81526000916001600160a01b03169063e9dc65bb906109df903390869060019060040161122f565b602060405180830381600087803b1580156109f957600080fd5b505af1158015610a0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3191906110f9565b905080610a505760405162461bcd60e51b81526004016103809061133f565b6004546000546001600160a01b031642821015610a7d57600080546001600160a01b031916331790554291505b600a54610a8a9085610fbc565b600a55600654600090610a9e908690610f91565b9050610ab7610ab08262015180610fa4565b8490610fbc565b6004819055600054604080516001600160a01b038087168252909216602083015281018590526060810191909152608081018690527fef4746b8d8b529d352fbea5e8f5194179982c1cb712ce4e35c471cfeaefb8bb49060a00160405180910390a15050505050565b60008181526009602090815260408083203384529091529020600281015460ff16610b5d5760405162461bcd60e51b815260040161038090611278565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610b8e903390600401611202565b60206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611166565b90508160010154811015610c045760405162461bcd60e51b8152600401610380906112aa565b6000610c108484610fc8565b60035460405163e9dc65bb60e01b81529192506000916001600160a01b039091169063e9dc65bb90610c4a9033908690869060040161122f565b602060405180830381600087803b158015610c6457600080fd5b505af1158015610c78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9c91906110f9565b905080610cbb5760405162461bcd60e51b81526004016103809061133f565b83546040517f45c072aa05b9853b5a993de7a28bc332ee01404a628cec1a23ce0f659f842ef191610cf191339186914290611252565b60405180910390a1428455600a54610d099083610fb0565b600a555050505050565b60035460405163e6d50cd760e01b81526000916001600160a01b03169063e6d50cd790610d44903090600401611202565b604080518083038186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d939190611115565b91505080610db35760405162461bcd60e51b81526004016103809061130b565b60008381526008602052604090206002015460ff16610e145760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c650000006044820152606401610380565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610e45903390600401611202565b60206040518083038186803b158015610e5d57600080fd5b505afa158015610e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e959190611166565b905084811015610eb75760405162461bcd60e51b8152600401610380906112aa565b6000848152600960209081526040808320338452909152902083610ee9576001810154610ee49087610fb0565b610ef8565b6001810154610ef89087610fbc565b60018083019190915542825560028201805460ff19169091179055600085815260086020526040902054610f2c9087610fbc565b600086815260086020526040902055600b54610f489087610fbc565b600b556040517fb1ff33da568b8aef91249b2b57eb76b04eba1f8643e8bef5914442dbd7ccb2bf90610f81903390899089904290611252565b60405180910390a1505050505050565b6000610f9d828461138e565b9392505050565b6000610f9d82846113ae565b6000610f9d82846113cd565b6000610f9d8284611376565b600080610fe76005546104256064600b54610fa490919063ffffffff16565b90506056811115610ff6575060565b426004541080156110075750603281115b15611010575060325b600061102c606461042584600654610fa490919063ffffffff16565b60008681526008602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908901549495509361108992610425919061042b9060649084908a90610fa4565b90506000620151808760000154426110a191906113cd565b6110ab919061138e565b90506110b78282610fa4565b98975050505050505050565b80356001600160a01b03811681146110da57600080fd5b919050565b6000602082840312156110f0578081fd5b610f9d826110c3565b60006020828403121561110a578081fd5b8151610f9d816113fa565b60008060408385031215611127578081fd5b8251611132816113fa565b6020840151909250611143816113fa565b809150509250929050565b60006020828403121561115f578081fd5b5035919050565b600060208284031215611177578081fd5b5051919050565b60008060408385031215611190578182fd5b823591506111a0602084016110c3565b90509250929050565b600080604083850312156111bb578182fd5b50508035926020909101359150565b6000806000606084860312156111de578081fd5b833592506020840135915060408401356111f7816113fa565b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393909316835260208301919091521515604082015260600190565b6001600160a01b0394909416845260208401929092526040830152606082015260800190565b6020808252601890820152774c697374696e673a2052656769737465722066697273742160401b604082015260600190565b6020808252601e908201527f4c697374696e673a20496e73756666696369656e742062616c616e6365210000604082015260600190565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b6020808252601a90820152794c697374696e673a20496e616374697665206c697374696e672160301b604082015260600190565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b60008219821115611389576113896113e4565b500190565b6000826113a957634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156113c8576113c86113e4565b500290565b6000828210156113df576113df6113e4565b500390565b634e487b7160e01b600052601160045260246000fd5b801515811461140857600080fd5b5056fea264697066735822122060dd1be6021540465d2e84616b53a5a2ff7313e0e2d8b16ce012855bb374eea164736f6c63430008040033a95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715aa2646970667358221220080133e82081881827ba84ee15f01229efb5cddc11150b04052dcc15628c8eb964736f6c63430008040033",
  "devdoc": {
    "events": {
      "Dummy(address,uint256,uint256)": {
        "details": "Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing validator shall be the validator address making the transaction. Owner of the listing shall be the specified address  Emits a {ListingCreation} event"
      }
    },
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "constructor": {
        "details": "Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here"
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "handleListingTx(address,uint256,bool)": {
        "details": "Handle transactions from listings and only from listings  If `_in` is true, _amount will be transfered from `_userAddr` to staking address Otherwise, `_amount` will be transfered from staking address to `_userAddr` Returns true if the transation is success Emits a {Transfer} event from IERC20"
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "toggleListingStatus(address)": {
        "details": "Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only validators The `_listingAddr` must be the address of a created listing "
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      },
      "updateStakingAddress(address)": {
        "details": "Update the funds address. Shall be handy if there's a need in changing the initial address, or the previous address is compromised."
      }
    },
    "stateVariables": {
      "VALIDATOR": {
        "details": "Validators are authorized accounts to handle listing"
      },
      "stakingAddress": {
        "details": "The funds address for paying out rewards and receiving payments"
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 499,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_balances",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 505,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_allowances",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 507,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 509,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_name",
        "offset": 0,
        "slot": "3",
        "type": "t_string_storage"
      },
      {
        "astId": 511,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_symbol",
        "offset": 0,
        "slot": "4",
        "type": "t_string_storage"
      },
      {
        "astId": 24,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "_roles",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_bytes32,t_struct(RoleData)19_storage)"
      },
      {
        "astId": 2438,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "stakingAddress",
        "offset": 0,
        "slot": "6",
        "type": "t_address"
      },
      {
        "astId": 2448,
        "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
        "label": "listingStatus",
        "offset": 0,
        "slot": "7",
        "type": "t_mapping(t_address,t_struct(ListingStatusModel)2443_storage)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_address,t_struct(ListingStatusModel)2443_storage)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => struct ANFTV2.ListingStatusModel)",
        "numberOfBytes": "32",
        "value": "t_struct(ListingStatusModel)2443_storage"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_bytes32,t_struct(RoleData)19_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => struct AccessControl.RoleData)",
        "numberOfBytes": "32",
        "value": "t_struct(RoleData)19_storage"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(ListingStatusModel)2443_storage": {
        "encoding": "inplace",
        "label": "struct ANFTV2.ListingStatusModel",
        "members": [
          {
            "astId": 2440,
            "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
            "label": "_isCreated",
            "offset": 0,
            "slot": "0",
            "type": "t_bool"
          },
          {
            "astId": 2442,
            "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
            "label": "_active",
            "offset": 1,
            "slot": "0",
            "type": "t_bool"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_struct(RoleData)19_storage": {
        "encoding": "inplace",
        "label": "struct AccessControl.RoleData",
        "members": [
          {
            "astId": 16,
            "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
            "label": "members",
            "offset": 0,
            "slot": "0",
            "type": "t_mapping(t_address,t_bool)"
          },
          {
            "astId": 18,
            "contract": "contracts/v2/ANFTV2.sol:ANFTV2",
            "label": "adminRole",
            "offset": 0,
            "slot": "1",
            "type": "t_bytes32"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}