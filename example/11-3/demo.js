window.onload = function(){
	// mixing jQuery codes with Javascript codes; bad!
	let ps = $('body > p');
	//console.log(ps[0]); 

	// get the last element in JavaScript and jQuery
	// plain in js
	let psJS = document.querySelectorAll('body > p');
	let emLengthJS = psJS.length;
	let lastPosJS = emLengthJS -1;
	//console.log(psJS[lastPosJS]);

	//jQuery
	let psJQ = $('body > p');
	//console.log(psJQ.eq(-1));//eq()= equal to //negative number = counting from the end
    //console.log(psJQ.eq(0));// 0 or positive num = counting from the begin

    // Get HTML from an element: innerHTML vs. html()
    //console.log(psJS[lastPosJS].innerHTML); // plain JavaScript
    //console.log(psJQ.eq(-1).html()); //jQuery
    //console.log(psJQ.eq(-1).innerHTML); // Mixing jQuery with JavaScript= undefined

    // Change the HTML contents of an element
    // psJS[lastPosJS].innerHTML = 'Content Changed!';// plain JavaScript

    psJQ.eq(-1).html('Content Changed!'); // jQuery
};