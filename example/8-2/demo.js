var numArray = [ 1,5,2,11,7];

//console.log(numArray[0]); // First position
//console.log(numArray[1]); // Second  position

//console.log(numArray[4]); // last position
numArray[4]=18;
//console.log(numArray[4]); // last position with a different value

//console.log(numArray); // entire array

var students = [ 'Tom','Mary', 'Victor', 'John'];

// mixed type of data in an array ; not recommand
//var profile = ['TY Chen','NTHU',40,180,72];

//console.log(profile[0]);

//var  name = 'TY chen',affiliation = 'NTHU',age = 40;

var emptubj = {}; //An empty obect.

// A good profile of object
var profile = {
	name: 'Richard ou',
	age: 19,
    affiliation: 'NTHU',
    height: 170,
    weight: 70 
 };

 //console.log(profile.name); // Get the value of "name" key
 //console.log(profile['name']); // Same 

 var key =' name';
 //console.log(profile[key]);
 key = 'age';
 //console.log(profile[key]);

 profile.name = ' Richard'; //Change the "name" key
 console.log(profile.name);

 profile.gender= 'male'; // add a new "gender " key
 console.log(profile.gender);

 delete profile.gender;
 console.log(profile.gender);