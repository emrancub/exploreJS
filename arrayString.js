var studentName = ['Momin', 'Bulbul', 'Arif', 'Shadin'];
console.log(studentName);

// add a element in the last
studentName.push('Ronjit');
console.log(studentName);

// add a element in the biginnning 
studentName.unshift('Tumpa Das');
console.log(studentName);

// remove first element
studentName.shift();
console.log(studentName);

// remove last element
studentName.pop();
console.log(studentName);

// slice; some part will be delete
var someStudent = studentName.slice(2);
console.log(someStudent);

// slice; two value
var someStudent = studentName.slice(1,2);
console.log(someStudent);