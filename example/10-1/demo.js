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

document.getElementById('changeDiv1').addEventListener('click');
};
