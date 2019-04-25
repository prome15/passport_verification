var user = artifacts.require("./user.sol");

contract("user", function(accounts) {
  var userInstance;

  it("initializes with one candidate", function() {
    return user.deployed().then(function(instance) {
      return instance.userCount();
    }).then(function(count) {
      assert.equal(count, 1);
    });
  });

  it("it initializes the candidates with the correct values", function() {
    return user.deployed().then(function(instance) {
      userInstance = instance;
      return userInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Prome", "contains the correct firstname");
      assert.equal(candidate[2], "alam", "contains the correct lastname");
      assert.equal(candidate[3], "Shah Alam", "contains the correct fathername");
      assert.equal(candidate[4], "23-03-2020", "contains the correct expdate");
      assert.equal(candidate[5], "Bangladeshi", "contains the correct nationality");
      assert.equal(candidate[6], "Female", "contains the correct gender");
      assert.equal(candidate[7], 11223344, "contains the correct nId");

      return userInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Umme", "contains the correct name");
      assert.equal(candidate[2], "jannath", "contains the correct lastname");
      assert.equal(candidate[3], "Aftab Uddin", "contains the correct fathername");
      assert.equal(candidate[4], "4-10-2021", "contains the correct expdate");
      assert.equal(candidate[5], "Bangladeshi", "contains the correct nationality");
      assert.equal(candidate[6], "Female", "contains the correct gender");
      assert.equal(candidate[7], 11223345, "contains the correct nId");
      return userInstance.candidates(3);
    }).then(function(candidate) {
      assert.equal(candidate[0], 3, "contains the correct id");
      assert.equal(candidate[1], "Jalal", "contains the correct name");
      assert.equal(candidate[2], "Uddin", "contains the correct lastname");
      assert.equal(candidate[3], "Daraj Uddin", "contains the correct fathername");
      assert.equal(candidate[4], "24-5-2021", "contains the correct expdate");
      assert.equal(candidate[5], "Bangladeshi", "contains the correct nationality");
      assert.equal(candidate[6], "Male", "contains the correct gender");
      assert.equal(candidate[7], 11223346, "contains the correct nId");
      return userInstance.candidates(4);
    }).then(function(candidate) {
      assert.equal(candidate[0], 4, "contains the correct id");
      assert.equal(candidate[1], "Innaiya", "contains the correct name");
      assert.equal(candidate[2], "islam", "contains the correct lastname");
      assert.equal(candidate[3], "Maruf Islam", "contains the correct fathername");
      assert.equal(candidate[4], "7-2-2020", "contains the correct expdate");
      assert.equal(candidate[5], "Bangladeshi", "contains the correct nationality");
      assert.equal(candidate[6], "Female", "contains the correct gender");
      assert.equal(candidate[7], 11223347, "contains the correct nId");
      return userInstance.candidates(5);
    }).then(function(candidate) {
      assert.equal(candidate[0], 5, "contains the correct id");
      assert.equal(candidate[1], "Innamal", "contains the correct name");
      assert.equal(candidate[2], "islam", "contains the correct lastname");
      assert.equal(candidate[3], "Maruf Islam", "contains the correct fathername");
      assert.equal(candidate[4], "10-2-2020", "contains the correct expdate");
      assert.equal(candidate[5], "Bangladeshi", "contains the correct nationality");
      assert.equal(candidate[6], "Male", "contains the correct gender");
      assert.equal(candidate[7], 11223348, "contains the correct nId");


    });

  });
});
