pragma solidity >=0.4.21 <0.7.0;

contract RealEstate {
    
    address payable public seller;
    address public buyer;
    string public streetAddress;
    string title;
    uint256 public price;
    
    constructor() public {
        // Who is the seller?
        seller = msg.sender;
        // What is the street address?
        streetAddress = "5 Avenue Anatole France, 75007 Paris";
        // What is the title?
        title = "dGl0bGU=";
        // What is the price?
        price = 99000000000000000000; // 99 Ether
    }
    
    function buyHouse() payable public {
        require(seller != address(0));
        require(buyer == address(0));
        require(msg.sender != seller);
        require(msg.value == price);
        buyer = msg.sender;
        seller.transfer(msg.value);
    }
}