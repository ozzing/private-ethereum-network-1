var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var Web3 = require('web3');
var ethTx = require('ethereumjs-tx');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

const address = '52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67';
const priv_key = Buffer.from(
  '08c370cdbdf20998ed90842fb90f9e2fd9633ed29ba6d76797170d93a9eb6fce',
  'hex'
);
var ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'mint_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors origin issue
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// app.use(express.static(path.join(__dirname, '../wallet-front/build')));

const user_test = [
  { id: 1, name: '유저1' },
  { id: 2, name: '유저2' },
  { id: 3, name: '유저3' },
];

app.get('/', (req, res) => {
  //유저 정보 반환
  res.json({ ok: true, users: user_test });
});

// app.get('/', function (req, res) {
//   // res.sendFile(__dirname + "/index.html")
//   res.sendFile(path.join(__dirname, '../wallet-front/build/index.html'));
// });

app.get('/deploy', function (req, res) {
  // res.sendFile(path.join(__dirname,'../wallet-front/build/index.html'))
  // res.sendFile(__dirname + '/deploy.html');
});

app.post('/deploy', function (req, res) {
  var name_ = req.body.tokenName;
  var symbol_ = req.body.tokenSymbol;
  var mint_ = req.body.tokenSupply;

  var erc20Contract = new web3.eth.Contract([
    {
      inputs: [
        { internalType: 'string', name: 'name_', type: 'string' },
        { internalType: 'string', name: 'symbol_', type: 'string' },
        { internalType: 'uint256', name: 'mint_', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ]);

  var erc20 = erc20Contract.deploy({
    data: '0x60806040523480156200001157600080fd5b506040516200193f3803806200193f83398181016040528101906200003791906200034c565b82600390805190602001906200004f92919062000207565b5081600490805190602001906200006892919062000207565b506200007b33826200008460201b60201c565b505050620006cb565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ee906200041e565b60405180910390fd5b6200010b60008383620001fd60201b60201c565b80600260008282546200011f9190620004cd565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001769190620004cd565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001dd919062000440565b60405180910390a3620001f9600083836200020260201b60201c565b5050565b505050565b505050565b82805462000215906200056a565b90600052602060002090601f01602090048101928262000239576000855562000285565b82601f106200025457805160ff191683800117855562000285565b8280016001018555821562000285579182015b828111156200028457825182559160200191906001019062000267565b5b50905062000294919062000298565b5090565b5b80821115620002b357600081600090555060010162000299565b5090565b6000620002ce620002c88462000486565b6200045d565b905082815260208101848484011115620002ed57620002ec62000668565b5b620002fa84828562000534565b509392505050565b600082601f8301126200031a576200031962000663565b5b81516200032c848260208601620002b7565b91505092915050565b6000815190506200034681620006b1565b92915050565b60008060006060848603121562000368576200036762000672565b5b600084015167ffffffffffffffff8111156200038957620003886200066d565b5b620003978682870162000302565b935050602084015167ffffffffffffffff811115620003bb57620003ba6200066d565b5b620003c98682870162000302565b9250506040620003dc8682870162000335565b9150509250925092565b6000620003f5601f83620004bc565b9150620004028262000688565b602082019050919050565b62000418816200052a565b82525050565b600060208201905081810360008301526200043981620003e6565b9050919050565b60006020820190506200045760008301846200040d565b92915050565b6000620004696200047c565b9050620004778282620005a0565b919050565b6000604051905090565b600067ffffffffffffffff821115620004a457620004a362000634565b5b620004af8262000677565b9050602081019050919050565b600082825260208201905092915050565b6000620004da826200052a565b9150620004e7836200052a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200051f576200051e620005d6565b5b828201905092915050565b6000819050919050565b60005b838110156200055457808201518184015260208101905062000537565b8381111562000564576000848401525b50505050565b600060028204905060018216806200058357607f821691505b602082108114156200059a576200059962000605565b5b50919050565b620005ab8262000677565b810181811067ffffffffffffffff82111715620005cd57620005cc62000634565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620006bc816200052a565b8114620006c857600080fd5b50565b61126480620006db6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610d25565b60405180910390f35b6100e660048036038101906100e19190610b6f565b610308565b6040516100f39190610d0a565b60405180910390f35b61010461032b565b6040516101119190610e27565b60405180910390f35b610134600480360381019061012f9190610b1c565b610335565b6040516101419190610d0a565b60405180910390f35b610152610364565b60405161015f9190610e42565b60405180910390f35b610182600480360381019061017d9190610b6f565b610369565b60405161018f9190610d0a565b60405180910390f35b6101b260048036038101906101ad9190610aaf565b6103a0565b6040516101bf9190610e27565b60405180910390f35b6101d06103e8565b6040516101dd9190610d25565b60405180910390f35b61020060048036038101906101fb9190610b6f565b61047a565b60405161020d9190610d0a565b60405180910390f35b610230600480360381019061022b9190610b6f565b6104f1565b60405161023d9190610d0a565b60405180910390f35b610260600480360381019061025b9190610adc565b610514565b60405161026d9190610e27565b60405180910390f35b60606003805461028590610f57565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610f57565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059b565b90506103208185856105a3565b600191505092915050565b6000600254905090565b60008061034061059b565b905061034d85828561076e565b6103588585856107fa565b60019150509392505050565b600090565b60008061037461059b565b90506103958185856103868589610514565b6103909190610e79565b6105a3565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103f790610f57565b80601f016020809104026020016040519081016040528092919081815260200182805461042390610f57565b80156104705780601f1061044557610100808354040283529160200191610470565b820191906000526020600020905b81548152906001019060200180831161045357829003601f168201915b5050505050905090565b60008061048561059b565b905060006104938286610514565b9050838110156104d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cf90610e07565b60405180910390fd5b6104e582868684036105a3565b60019250505092915050565b6000806104fc61059b565b90506105098185856107fa565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90610de7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90610d67565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107619190610e27565b60405180910390a3505050565b600061077a8484610514565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f457818110156107e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dd90610d87565b60405180910390fd5b6107f384848484036105a3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086190610dc7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190610d47565b60405180910390fd5b6108e5838383610a7b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290610da7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109fe9190610e79565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a629190610e27565b60405180910390a3610a75848484610a80565b50505050565b505050565b505050565b600081359050610a9481611200565b92915050565b600081359050610aa981611217565b92915050565b600060208284031215610ac557610ac4610fe7565b5b6000610ad384828501610a85565b91505092915050565b60008060408385031215610af357610af2610fe7565b5b6000610b0185828601610a85565b9250506020610b1285828601610a85565b9150509250929050565b600080600060608486031215610b3557610b34610fe7565b5b6000610b4386828701610a85565b9350506020610b5486828701610a85565b9250506040610b6586828701610a9a565b9150509250925092565b60008060408385031215610b8657610b85610fe7565b5b6000610b9485828601610a85565b9250506020610ba585828601610a9a565b9150509250929050565b610bb881610ee1565b82525050565b6000610bc982610e5d565b610bd38185610e68565b9350610be3818560208601610f24565b610bec81610fec565b840191505092915050565b6000610c04602383610e68565b9150610c0f82610ffd565b604082019050919050565b6000610c27602283610e68565b9150610c328261104c565b604082019050919050565b6000610c4a601d83610e68565b9150610c558261109b565b602082019050919050565b6000610c6d602683610e68565b9150610c78826110c4565b604082019050919050565b6000610c90602583610e68565b9150610c9b82611113565b604082019050919050565b6000610cb3602483610e68565b9150610cbe82611162565b604082019050919050565b6000610cd6602583610e68565b9150610ce1826111b1565b604082019050919050565b610cf581610f0d565b82525050565b610d0481610f17565b82525050565b6000602082019050610d1f6000830184610baf565b92915050565b60006020820190508181036000830152610d3f8184610bbe565b905092915050565b60006020820190508181036000830152610d6081610bf7565b9050919050565b60006020820190508181036000830152610d8081610c1a565b9050919050565b60006020820190508181036000830152610da081610c3d565b9050919050565b60006020820190508181036000830152610dc081610c60565b9050919050565b60006020820190508181036000830152610de081610c83565b9050919050565b60006020820190508181036000830152610e0081610ca6565b9050919050565b60006020820190508181036000830152610e2081610cc9565b9050919050565b6000602082019050610e3c6000830184610cec565b92915050565b6000602082019050610e576000830184610cfb565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610e8482610f0d565b9150610e8f83610f0d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ec457610ec3610f89565b5b828201905092915050565b6000610eda82610eed565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610f42578082015181840152602081019050610f27565b83811115610f51576000848401525b50505050565b60006002820490506001821680610f6f57607f821691505b60208210811415610f8357610f82610fb8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61120981610ecf565b811461121457600080fd5b50565b61122081610f0d565b811461122b57600080fd5b5056fea2646970667358221220a0593a5cb318ce244974c12d6e149876df107bb0c1958349341eb3200fcde53464736f6c63430008070033',
    arguments: [name_, symbol_, mint_],
  });

  var set_string_byte_code = erc20.encodeABI();

  web3.eth.getTransactionCount(address, 'pending', (err, nonce) => {
    var Raw_Tx = {
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(1000),
      gasLimit: web3.utils.toHex(3000000),
      data: set_string_byte_code,
      from: address,
    };

    var Signature = new Buffer.from(priv_key, 'hex');

    var Make_Tx = new ethTx(Raw_Tx);
    Make_Tx.sign(Signature);

    var Serialized_Tx = Make_Tx.serialize();
    var Raw_Tx_Hex = '0x' + Serialized_Tx.toString('hex');

    web3.eth.sendSignedTransaction(Raw_Tx_Hex).on('receipt', (receipt) => {
      console.log('receipt : ', receipt);
      res.json({ receipt: receipt });
    });
  });
});

app.get('/send', function (req, res) {
  res.sendFile(__dirname + '/send.html');
});

app.post('/send', function (req, res) {
  var contract_address = req.body.contract_address;
  console.log(contract_address);
  var contract = new web3.eth.Contract(ABI, contract_address);
  var set_contract = contract.methods.transfer(
    req.body.address,
    req.body.value
  );
  var set_contract_byte = set_contract.encodeABI();

  web3.eth.getTransactionCount(address, 'pending', (err, nonce) => {
    var Raw_Tx = {
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(1000),
      gasLimit: web3.utils.toHex(3000000),
      data: set_contract_byte,
      from: address,
      to: contract_address,
    };
    var Signature = new Buffer.from(priv_key, 'hex');

    var Make_Tx = new ethTx(Raw_Tx);
    Make_Tx.sign(Signature);

    var Serialized_Tx = Make_Tx.serialize();
    var Raw_Tx_Hex = '0x' + Serialized_Tx.toString('hex');

    web3.eth.sendSignedTransaction(Raw_Tx_Hex).on('receipt', (receipt) => {
      res.json({ receipt: receipt });
    });
  });
});

app.get('/balance', function (req, res) {
  res.sendFile(__dirname + '/balance.html');
});
app.post('/balance', function (req, res) {
  var contract_address = req.body.contract_address;
  var contract = new web3.eth.Contract(ABI, contract_address);
  contract.methods
    .balanceOf(req.body.address)
    .call()
    .then((data) => {
      res.send(data);
    });
});

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../wallet-front/build/index.html'));
// });

var server = app.listen(3000, function () {
  console.log('server is working now');
});
