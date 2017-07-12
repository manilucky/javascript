//Demonstrate with an example on the creation of objects using JSON Object literal, using Object constructor call and using constructor function

//Json Object literal (object = bike, we can give only one set of values) 

var bike ={name:"acess125", nickName:"lucky",color:"red", milage:"20km/Lit", regNumber:5061};
	console.log('My lovely bike name: '+bike.name);
	console.log('My lovely bike nickName: '+bike.nickName);
	console.log('My lovely bike color,milage and regnumber: '+bike.color+' '+bike.milage+' '+bike.regNumber);

//Oject Constructor function (objectconstructor = scooty, using object constructor can create more new objects for the same object)

function scooty(name, nickName, color, milage, regNumber) {
   this.bikename= name;
   this.bikenickName= nickName; //(this key word is in object constructor doent have the value, only used for the new object)
   this.bikecolor=color;
   this.bikemilage=milage;
   this.bikeregnumber=regNumber;
}
var myBike = new scooty("acess125","lucky","red","20km/Lit",5061);
var ammuBike = new scooty("pleasure","Ammubike","red","15km/lit",1585);
 console.log('My bike model: '+myBike.bikename+' '+'nickName:  '+myBike.bikenickName+' '+'color: '+myBike.bikecolor+' '+'milage: '+myBike.bikemilage+' '+'registration number: '+myBike.bikeregnumber);
 console.log('Ammu bike model: '+ammuBike.bikename+' '+'nickName:  '+ammuBike.bikenickName+' '+'color: '+ammuBike.bikecolor+' '+'milage: '+ammuBike.bikemilage+' '+ 'registration number: '+ammuBike.bikeregnumber);
