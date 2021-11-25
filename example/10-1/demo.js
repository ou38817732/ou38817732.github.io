function changeDivCSS() {
let buttonId = this.id;
	let divs = document.getElementsByTagName('div');
	if(buttonId === 'changeDiv1') {
		divs[0].style.cssText = 'background-color: red; width: 100px; height: 40px;';
	}
	else if(buttonId === 'changeDiv2') {
		divs[1].style.cssText = 'background-color: black; width: 60px; height: 150px;';
	}
	else {
		divs[2].style.cssText = 'background-color: gold; width: 200px; height: 200px;';
	}
};

window.onload= function (){
if(false){
  //alert('true');
}
else{
//alert('false');
}

//real conditions
if(1===2){
	//alert('ture');
}
else{
	/*else{//'else' is optional} 
	alert('false');}*/

// !==means 'not equivvqlent to '
if(1 !==2);
//alert('true');
}

// multiple separate conditions
if(2==='2') {
	//alert('condition is true');
}
else if('a'==='a') {
	//alert('condition2 is true');
}
else {
	//alert('neither is true qq');
}

if(2===2 && 15==10){ //&& means AND
	//alert('condition 1 is true');
}
else if(2 ===2 || 15==10){ // || means OR
	//alert('condition2 is true');
}
else{
	//alert('Neither is ture');
}

document.getElementById('changeDiv1').addEventListener('click',changeDivCSS());
document.getElementById('changeDiv1').addEventListener('click',changeDivCSS());
document.getElementById('changeDiv1').addEventListener('click',changeDivCSS());
};