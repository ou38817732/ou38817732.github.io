//console.log('Hi');

//window: The entire browser window.

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

//console.log(winWidth);
//console.log(winHeight);

//window.location.href= 'https://google.com'; //guide you to google
//window.location.pathname='/nosuchpath'; 

window.onload= function() {
  //alert('Website is ready!');
  //window.document: The entire HTML document 
  // document: The entire HTML document
   let siteTitle =document.title;
   console.log(document.title);  
 //讀取body完成=onload

let allDivs =document.getElementsByTagName('div');//會以陣列呈現
//console.log(allDivs[0]);
//console.log(allDivs[1].innerText);
let emById = document.getElementById('div3');
//console.log(emById.innerText);

let classEms = document.getElementsByClassName('group1');
console.log(classEms[0].innerText); 
};