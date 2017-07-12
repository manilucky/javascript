
//convert a object to json string with the help of JSON.stringify() method

var employee = {
	"firstName": "Michael",
	"lastName": "Sandra",
	"experience": "15 years",
	"salary": "150K"
};
var empjson = JSON.stringify(employee); // {"firstName":"Michael","lastName":"Sandra","experience":"15 years","salary":"150K"}
console.log(empjson);
// other method to console
console.log(JSON.stringify(employee));





//json string to object with the help of JSON.parse() methd
var employeeJson = '{"firstName":"Michael","lastName":"Sandra","experience":"15 years","salary":"150K"}';
var empObject = JSON.parse(employeeJson);
console.log(empObject); 
// other method to console
console.log(JSON.parse(employeeJson));