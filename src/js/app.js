App = {
web3Provider: null,
contracts: {},
account: '0x0',

init: function() {
return App.initWeb3();
},

initWeb3: function() {
// TODO: refactor conditional
if (typeof web3 !== 'undefined') {
// If a web3 instance is already provided by Meta Mask.
// //App.web3Provider = web3.currentProvider;
//web3 = new Web3(web3.currentProvider);

App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
web3 = new Web3(App.web3Provider);
} else {
// Specify default instance if no web3 instance provided
App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
web3 = new Web3(App.web3Provider);
}
return App.initContract();
},

initContract: function() {
$.getJSON("user.json", function(user) {
// Instantiate a new truffle contract from the artifact
App.contracts.user = TruffleContract(user);
// Connect provider to interact with contract
App.contracts.user.setProvider(App.web3Provider);

App.listenForEvents();

return App.render();
});
},

// Listen for events emitted from the contract
listenForEvents: function() {
App.contracts.user.deployed().then(function(instance) {
// Restart Chrome if you are unable to receive this event
// This is a known issue with Metamask
// https://github.com/MetaMask/metamask-extension/issues/2393
instance.votedEvent({}, {
fromBlock: 0,
toBlock: 'latest'
}).watch(function(error, event) {
console.log("event triggered", event)
// Reload when a new vote is recorded
App.render();
});
});
},

render: function() {
var userInstance;
var loader = $("#loader");
var content = $("#content");

loader.show();
content.hide();

// Load account data
web3.eth.getCoinbase(function(err, account) {
if (err === null) {
App.account = account;
$("#accountAddress").html("Your Account: " + account);
}
});

// Load contract data
App.contracts.user.deployed().then(function(instance) {
userInstance = instance;
return userInstance.userCount();
}).then(function(userCount) {
var candidatesResults = $("#candidatesResults");
candidatesResults.empty();

var candidatesSelect = $('#candidatesSelect');
candidatesSelect.empty();

for (var i = 1; i <= userCount; i++) {
userInstance.candidates(i).then(function(candidate) {
var id = candidate[0];
var firstname = candidate[1];
var lastname = candidate[2];
var fathername = candidate[3];
var expdate = candidate[4];
var nationality = candidate[5];
var gender = candidate[6];
var nId = candidate[7];

// Render candidate Result
var candidateTemplate = "<tr><th>" + id + "</th><td>" + firstname + "</td><td>" + lastname + "</td><td>" + fathername + "</td><td>" + expdate + "</td><td>" + nationality +  "</td><td>" + gender + "</td><td>"  +  nId + "</td></tr>"
candidatesResults.append(candidateTemplate);
});
}

loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
