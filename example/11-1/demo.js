window.onload = function() {
	let button = document.querySelector('button');//query只會回傳第一個符合項目
	button.addEventListener('click',function(event) {
		// event 只是變數名稱
		// the 'event' information is passed over by the browser
		event.stopPropagation(); // In the 'event' object, there is a stopPropagation function.
		alert('body clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click',function(){
		this.style.backgroundColor = 'red';
	});
};