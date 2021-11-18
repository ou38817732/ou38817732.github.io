function anotherMsg() {
	alert('I say the mouse cursorhas left the first div!');
}

window.onload = function() {
	let bodyEM = document.querySelector('body');
	bodyEM.addEventListener('click',function() {
		// Callback function
		//alert('Body is clicked!');
	});
	let firstDiv = document.querySelector('div');
	bodyEM.addEventListener('mouseenter',anotherMsg);
};