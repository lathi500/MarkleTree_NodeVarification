// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/MerkleProof.sol";

contract Markle
{
    bytes32 public rootHash = 0x70b8e8088ae556faa07c4b4c972240935971ff7249949faf0cc1648dff84055b;

    mapping(address => bool) public AllreadyClaimed;
  

    // bytes32[] public _markleProof;
 


    function userlistMint(bytes32[] memory _markleProof) public
    {
        require(!AllreadyClaimed[msg.sender],"Allready claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_markleProof, rootHash, leaf),"Invalide");
        AllreadyClaimed[msg.sender] = true;
    }

    // function varifyLeaf() public returns(bool)
    // {
       
    // }

    // ["0x999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb",
    //  "0x4726e4102af77216b09ccd94f40daa10531c87c4d60bba7f3b3faf5ff9f19b3c",
    //  "0x8ae49953bfe334e3f76b36474f9b64b4bd519645d05279d438f24f9ec75866a2"]
}
