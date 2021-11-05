//alert('This is an alert ');

function printMsg() {
	console.log('This is a message in the console');
}

printMsg();   

var varFunction =function() {
	console.log('This is a function in a variable')
};

varFunction();

//----------------------------------------

alwaysDoFirst();

function alwaysDoFirst() {
	console.log(' You can call this function anywhere it is built');
} 

// callThisLater(); //

var callThisLater= function() {
 console.log('You can only call this function after it is built.')
};

callThisLater();