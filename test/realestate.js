var RealEstate = artifacts.require("./RealEstate.sol");

contract("RealEstate", function(house) {
	var realEstateInstance;
	it("initializes the house with the correct values", function() {
		return RealEstate.deployed().then(function(instance) {
			realEstateInstance = instance;
			return instance.streetAddress();
		}).then(function(address) {
			assert.equal(address, "5 Avenue Anatole France, 75007 Paris", "contains the correct street address");
			return realEstateInstance.price();
		}).then(function(price) {
			assert.equal(price, 99000000000000000000, "contains the correct price");
			return realEstateInstance.buyer();
		}).then(function(buyer) {
			assert.equal(buyer, 0x0, "does not contain a buyer");
			return realEstateInstance.seller();
		}).then(function(seller) {
			assert.notEqual(seller, 0x0, "contains the correct seller");
		})
	});
})