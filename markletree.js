const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

let whitelistadress = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
    "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
    "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
    "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678",
    "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7",
  
]

const leafnodes = whitelistadress.map(addr => keccak256(addr));
const markleTree = new MerkleTree(leafnodes, keccak256, { sortPairs: true });
const claimingAddr = leafnodes[0];
const rootHash = markleTree.getRoot().toString('hex');
const getHasProof = markleTree.getHexProof(claimingAddr);

console.log(leafnodes[0].toString('hex'));
console.log("Root Hash:\n", rootHash);
console.log("Markle Tree:\n", markleTree.toString());
console.log("Get Claim Address Proof:\n", getHasProof.toString());




// └─ a231c712b2b141571edbaedee20ccc37b167e52355dfca2d1c770aafe8be6c6a
// ├─ ad244e5bd3fb328e827d41c235daf10d4022beee814f707874034bc00dd1c448
// │  ├─ 9d997719c0a5b5f6db9b8ac69a988be57cf324cb9fffd51dc2c37544bb520d65
// │  │  ├─ 5931b4ed56ace4c46b68524cb5bcbf4195f1bbaacbe5228fbd090546c88dd229 *
// │  │  └─ 999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb *
// │  └─ 4726e4102af77216b09ccd94f40daa10531c87c4d60bba7f3b3faf5ff9f19b3c *
// │     ├─ 04a10bfd00977f54cc3450c9b25c9b3a502a089eba0097ba35fc33c4ea5fcb54
// │     └─ dfbe3e504ac4e35541bebad4d0e7574668e16fefa26cd4172f93e18b59ce9486
// └─ 8ae49953bfe334e3f76b36474f9b64b4bd519645d05279d438f24f9ec75866a2 *
//    ├─ 03feca1f6d34efc6b067b22571e52b426876788ec566341008f23c3f6ae64b7d
//    │  ├─ f6d82c545c22b72034803633d3dda2b28e89fb704f3c111355ac43e10612aedc
//    │  └─ c23d89d4ba0f8b56a459710de4b44820d73e93736cfc0667f35cdd5142b70f0d
//    └─ 1c22adb6b75b7a618594eacef369bc4f0ec06380e8630fd7580f9bf0ea413ca8
//       └─ 1c22adb6b75b7a618594eacef369bc4f0ec06380e8630fd7580f9bf0ea413ca8


//0x999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb
//0x4726e4102af77216b09ccd94f40daa10531c87c4d60bba7f3b3faf5ff9f19b3c
//0x8ae49953bfe334e3f76b36474f9b64b4bd519645d05279d438f24f9ec75866a2