# passport_verifiation
Prerequisites

	NPM
	NodeJS
	Geth

Steps

	create a folder
	create custom genesis file
	create custom data directory
	set custom networkID (ChainID)

Installation

1.	sudo npm install -g truffle
2.	truffle
3.	sudo npm install -g ethereumjs-testrpc
4.	testrpc
To configure truffle to use our testRPC client, populate truffle.js with:

module.exports = {
	  networks: {
	    development: {
	      host: "localhost",
	      port: 8545,
	      network_id: "*", // Match any network id
	      gas: 4600000
	    }
	  }
	};

Contract

contract user {
struct userInfo {
        uint id
    }
    mapping(address => bool) public voters;
    mapping(uint => userInfo) public candidates;
 uint public userCount;
    // Constructor
   constructor () public {
        adduser ("Prome","alam","Shah Alam","23-03-2020","Bangladeshi","Female",0);
    }
    function adduser (string memory _firstname,string memory _lastname,string memory _fathername,string memory _expdate,string memory _nationality,string memory _gender,uint _nId) private {
    userCount ++;
    candidates[userCount] = userInfo(userCount, _firstname,_lastname,_fathername,_expdate,_nationality,_gender,_nId );
}

function vote (uint _candidateId) public {

    require(!voters[msg.sender]);


    require(_candidateId > 0 && _candidateId <= userCount);

 voters[msg.sender]= true ;

 candidates[_candidateId].nId ++;


}



