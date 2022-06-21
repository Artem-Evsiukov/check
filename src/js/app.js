// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    //burgerMenu.init();
  });
})(jQuery);

// Hide the element with classToHide
function hide(classToHide) {
  [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
    el.hidden = true;
  });
}

// Show the element with classToShow
function show(classToShow) {
  [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
    el.hidden = false;
  });
}

// Event for the .com checkbox
document.getElementById('1').onchange = function () {
  if (this.checked) show('1');
  else hide('1');
};

// Event for the .io checkbox
document.getElementById('2').onchange = function () {
  if (this.checked) show('2');
  else hide('2');
};

// Event for the .com checkbox
document.getElementById('3').onchange = function () {
  if (this.checked) show('3');
  else hide('3');
};

// Event for the .io checkbox
document.getElementById('4').onchange = function () {
  if (this.checked) show('4');
  else hide('4');
};

// Event for the .org checkbox
document.getElementById('5').onchange = function () {
  if (this.checked) show('5');
  else hide('5');
};

// ::: Events :::
// Event for the .com checkbox
document.getElementById('6').onchange = function () {
  if (this.checked) show('6');
  else hide('6');
};

// Event for the .io checkbox
document.getElementById('7').onchange = function () {
  if (this.checked) show('7');
  else hide('7');
};

// Event for the .org checkbox
document.getElementById('8').onchange = function () {
  if (this.checked) show('8');
  else hide('8');
};

// Event for the .com checkbox
document.getElementById('9').onchange = function () {
  if (this.checked) show('9');
  else hide('9');
};

// Event for the .io checkbox
document.getElementById('10').onchange = function () {
  if (this.checked) show('10');
  else hide('10');
};

// Event for the .org checkbox
document.getElementById('11').onchange = function () {
  if (this.checked) show('11');
  else hide('11');
};
