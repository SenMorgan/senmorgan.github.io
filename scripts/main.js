document.querySelector('ul').onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpg') {
      myImage.setAttribute ('src','images/pic2.jpg');
    } else {
      myImage.setAttribute ('src','images/pic1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Hello, mr. ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Hello, mr. ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}