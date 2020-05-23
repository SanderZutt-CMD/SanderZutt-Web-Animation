// var name = 'Sander';
// var sureName = ' Zutt';
//
// console.log(name + sureName)


//===========================================//
//              Button color switch          //
//===========================================//



var button = document.querySelector('.blauw');
var svg = document.querySelector('#letters');

//===========Blauw============//
button.addEventListener("click", function () {
  removeColor();
  svg.classList.toggle("blue");
});

//===========Geel============//
var buttonGeel = document.querySelector('.geel');

buttonGeel.addEventListener("click", function () {
  removeColor();
  svg.classList.toggle("amber");
});

//===========Peer============//
var buttonGreen = document.querySelector('.peer');

buttonGreen.addEventListener("click", function () {
  removeColor();
  svg.classList.toggle("groen");
});

//===========Rood============//
var buttonRed = document.querySelector('.rood');

buttonRed.addEventListener("click", function () {
  removeColor();
  svg.classList.toggle("red");
});

//===========Wit============//
var buttonWit = document.querySelector('.wit');

buttonWit.addEventListener("click", function () {
  removeColor();
  svg.classList.toggle("white");
});

function removeColor() {
  svg.classList.remove("amber");
  svg.classList.remove("red");
  svg.classList.remove("groen");
  svg.classList.remove("blue");
  svg.classList.remove("white");
}


//===============Einde button================//

//===========================================//
//                   Slider                  //
//===========================================//

function Slider(value) {
document.getElementById('rangeValue').innerHTML = value;
}


//===============Einde slider================//

//===========================================//
//                 Keyboard                  //
//===========================================//

//================Years==================//
var letterY = document.getElementById('Y');
var letterE = document.getElementById('E');
var letterA = document.getElementById('A');
var letterR = document.getElementById('R');
var letterS = document.getElementById('S');
//================Light==================//
var letterL = document.getElementById('L');
var letterI = document.getElementById('I');
var letterG = document.getElementById('G');
var letterH = document.getElementById('H');
var letterT = document.getElementById('T');

window.addEventListener('keydown', toggle)

function toggle(event) {
  if(event.keyCode === 89) {
    letterY.classList.toggle('TypografieYears');
    removeColor()
  }
  if(event.keyCode === 69) {
    letterE.classList.toggle('TypografieYears');
    removeColor()
  }
  if(event.keyCode === 65) {
    letterA.classList.toggle('TypografieYears');
    removeColor()
  }
  if(event.keyCode === 82) {
    letterR.classList.toggle('TypografieYears');
    removeColor()
  }
  if(event.keyCode === 83) {
    letterS.classList.toggle('TypografieYears');
    removeColor()
  }
  if(event.keyCode === 76) {
    letterL.classList.toggle('TypografieLetters');
    removeColor()
  }
  if(event.keyCode === 73) {
    letterI.classList.toggle('TypografieLetters');
    removeColor()
  }
  if(event.keyCode === 71) {
    letterG.classList.toggle('TypografieLetters');
    removeColor()
  }
  if(event.keyCode === 72) {
    letterH.classList.toggle('TypografieLetters');
    removeColor()
  }
  if(event.keyCode === 84) {
    letterT.classList.toggle('TypografieLetters');
    removeColor()
  }
}
//==============Einde keyboard===============//

//===========================================//
//               TouchEvent                  //
//===========================================//

//
// var change = document.querySelector('p');
// change.addEventListener("touchstart", function () {
//     document.getElementById("undertitle").style.display = "none";
// });

var change = document.querySelector('p');
change.addEventListener("touchstart", function () {
      change.classList.toggle("verandering");
});










//==============Einde keyboard===============//
