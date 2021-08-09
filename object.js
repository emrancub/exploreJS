var student = {id: 2028024, phone: 1614159009, university: 'Northestern University'};
var student1 = {id: 152392002, phone: 170251011, university: 'City University'};

// Individual Property
var phone = student.phone;
var phoneNo = student["phone"];
var phoneNumber = "phone";
var phoneNum = student[phoneNumber];

//change value
student1.phone = 1914159009;
student1["phone"] = 1814159009;
student1[phoneNumber] = 1335689099;

// New Property Add
student1.country= 'Bangladesh';
student1["country"] = "bangladesh"
var countyName = "country";
student1[countyName] = 'Bidesh';

console.log(phoneNum);
console.log(student1);