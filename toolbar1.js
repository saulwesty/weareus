   
  

let z = 0;
const floatin=document.getElementById("floatin")

function opacing() {
    floatin.style.opacity = z;
    if (z >= 1) {
        clearInterval(intervalId); 
    }
    z += 0.01;
}

let intervalId = setInterval(opacing, 20); 




//////


let y=0
var floatintwo=document.getElementById("floatintwo")

function opacingtwo() {
    
    floatintwo.style.opacity = y;
    if (y >= 1) {
        clearInterval(intervalIdtwo); 
    }
    y += 0.001;
}


document.addEventListener('scroll', checkVisibility);

function checkVisibility(){
  var rect = floatintwo.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdtwo = setInterval(opacingtwo, 50); 
  } 
}


///

let x=0
var floatinthree=document.getElementById("floatinthree")

function opacingthree() {
    
    floatinthree.style.opacity = x;
    if (x >= 1) {
        clearInterval(intervalIdthree); 
    }
    x += 0.001;
}


document.addEventListener('scroll', checkVisibilitythree);

function checkVisibilitythree(){
  var rect = floatinthree.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdthree = setInterval(opacingthree, 50); 
  } 
}


////

let w=0
var floatinfour=document.getElementById("floatinfour")

function opacingfour() {
    
    floatinfour.style.opacity = w;
    if (w >= 1) {
        clearInterval(intervalIdfour); 
    }
    w += 0.001;
}


document.addEventListener('scroll', checkVisibilityfour);

function checkVisibilityfour(){
  var rect = floatinfour.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdfour = setInterval(opacingfour, 50); 
  } 
}
///

let v=0
var floatinfive=document.getElementById("floatinfive")

function opacingfive() {
    
    floatinfive.style.opacity = v;
    if (v >= 1) {
        clearInterval(intervalIdfive); 
    }
    v += 0.001;
}


document.addEventListener('scroll', checkVisibilityfive);

function checkVisibilityfive(){
  var rect = floatinfive.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdfive = setInterval(opacingfive, 50); 
  } 
}
///

var figure=document.getElementById("bars");
figure.addEventListener("click", toggler);
var optional=document.getElementById("optional")

function toggler(e){
    var eventTarget=e.target;

    if (eventTarget.className=="fa-solid fa-bars"){
        eventTarget.className="fa-solid fa-x";
        optional.style.visibility="visible";
    }
    else if (eventTarget.className=="fa-solid fa-x"){
        eventTarget.className="fa-solid fa-bars";
        optional.style.visibility="hidden";
    }

}


///

/*


var targetElement = document.getElementById('floatintwo');
var targetOpacity = 0;



function updateOpacity() {
  if (targetOpacity < 1) {
    targetOpacity += 0.01;
    targetElement.style.opacity = targetOpacity;
  }
}

function checkVisibility() {
  var rect = targetElement.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    console.log('User can see the element with ID "first"');
    setInterval(updateOpacity, 100); 
  }
}

document.addEventListener('scroll', checkVisibility){
    console.log("he")
};

*/

