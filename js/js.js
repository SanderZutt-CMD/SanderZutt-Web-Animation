// var name = 'Sander';
// var sureName = ' Zutt';
//
// console.log(name + sureName)


//===========================================//
//              Button color switch          //
//===========================================//

//===========Blauw============//
var button = document.querySelector('.blauw');
var element = document.querySelector('.div');

button.addEventListener("click", function () {
  element.classList.toggle("blue");
});

//===========Geel============//
var buttonGeel = document.querySelector('.geel');
var element = document.querySelector('div');

buttonGeel.addEventListener("click", function () {
  element.classList.toggle("amber");
});

//===========Peer============//
var buttonGreen = document.querySelector('.peer');
var element = document.querySelector('div');

buttonGreen.addEventListener("click", function () {
  element.classList.toggle("groen");
});

//===========Rood============//
var buttonRed = document.querySelector('.rood');
var element = document.querySelector('div');

buttonRed.addEventListener("click", function () {
  element.classList.toggle("red");
});

//===============Einde button================//

//===========================================//
//                   Slider                  //
//===========================================//

function Slider(value) {
document.getElementById('rangeValue').innerHTML = value;
}

var Value = '.rangeValue';

if (Value < 5) {
  console.log("Good day");
}






//===============Einde slider================//
