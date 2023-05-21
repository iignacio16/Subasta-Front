//El objetivo de esta file es configurar una copia local del contrato
//para poder interactuar con el mismo desde la interfaz de usuario y que se refiera a 
//la dirección del contrato que se desplegó en la red de prueba de Ethereum. Sepolia.

//Importamos el archivo web3 de web3.js
import web3 from './web3';


//Direccion del contrato
const address = '0x5B4223F74925A880D812271d87cF9d3f31d9E022';

//ABI del contrato
const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "subastaId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "apostador",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cantidad",
        "type": "uint256"
      }
    ],
    "name": "NuevaOferta",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "subastaId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creador",
        "type": "address"
      }
    ],
    "name": "NuevaSubasta",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "subastaId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "ganador",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cantidad",
        "type": "uint256"
      }
    ],
    "name": "SubastaFinalizada",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "nftContract",
    "outputs": [
      {
        "internalType": "contract NFT",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "subastas",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "idSubasta",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "creador",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "nombreArticulo",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "idNFT",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "descripcion",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "precioActual",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "duracion",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finalizacion",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "ganador",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "finalizada",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idSubasta",
        "type": "uint256"
      }
    ],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_nombreArticulo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_simboloArticulo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_descripcion",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_precioInicial",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_duracion",
        "type": "uint256"
      }
    ],
    "name": "iniciarSubasta",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "idSubasta",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "nftContract",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "creador",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "nombreArticulo",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "idNFT",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "descripcion",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "precioActual",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duracion",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finalizacion",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "ganador",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "finalizada",
            "type": "bool"
          }
        ],
        "internalType": "struct Subasta.subasta",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_subastaId",
        "type": "uint256"
      }
    ],
    "name": "apostar",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_idSubasta",
        "type": "uint256"
      }
    ],
    "name": "finalizacionSubasta",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

  export default new web3.eth.Contract(abi, address);
 