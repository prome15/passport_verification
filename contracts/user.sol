pragma solidity 0.5.0;

contract user {
struct userInfo {
        uint id;
        string firstname;
        string lastname;
        string fathername;
        string expdate;
        string nationality;
        string gender;

        uint nId;
    }

    mapping(uint => userInfo) public candidates;

 uint public userCount;


    // Constructor
   constructor () public {
        adduser ("Prome","alam","Shah Alam","23-03-2020","Bangladeshi","Female",11223344);
        adduser ("Umme","jannath","Aftab Uddin","4-10-2021","Bangladeshi","Female",11223345);
        adduser ("Jalal","uddin","Daraj Uddin","24-5-2021","Bangladeshi","Male",11223346);
        adduser ("Innaiya","islam","Maruf Islam","7-2-2020","Bangladeshi","Female",11223347);
        adduser ("Innamal","islam","Maruf Islam","10-2-2020","Bangladeshi","Male",11223348);
    }
    function adduser (string memory _firstname,string memory _lastname,string memory _fathername,string memory _expdate,string memory _nationality,string memory _gender,uint _nId) private {
    userCount ++;
    candidates[userCount] = userInfo(userCount, _firstname,_lastname,_fathername,_expdate,_nationality,_gender,_nId );
}
}
