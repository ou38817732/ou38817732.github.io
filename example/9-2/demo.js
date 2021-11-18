window.onload = function() {
	let firstP = document.querySelector('div > p');
	//console.log(firstP.style);//style=css feature
	firstP.style.backgroundColor = 'red';
	firstP.style.color = 'white';

	let allDivsPs = document.querySelectorAll('div > p');
	allDivsPs[0].style.cssText = 'background-color: green; color: red;';
};