window.onload = function() {
	let button = document.querySelector('button');//query只會回傳第一個符合項目
	button.addEventListener('click',function() {
		alert('body clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click',function(){
		this.style.backgroundColor = 'red';
	});
};