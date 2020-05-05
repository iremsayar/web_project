const stopButton = document.getElementById("stopButton");
const forwardButton = document.getElementById("forwardButton");
const backwardButton = document.getElementById("backwardButton");
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

const database = firebase.database();
const usersRef = database.ref();

stopButton.addEventListener('click', e=> {
  e.preventDefault(); 
  usersRef.child("ButtonConfig").set({
    forward:1,
    backward:1,
    stop:1,
	right:1,
	left:1,
  })
  

});


stopButtonClickEvent = function () {
  console.log("Stop Button is clicked");
  usersRef.child("ButtonConfig").set({
    forward:0,
    backward:0,
    stop:1,
	right:0,
	left:0,
  })
};

forwardButtonClickEvent = function () {
  console.log("Forward Button is clicked");
  usersRef.child("ButtonConfig").set({
    forward:1,
    backward:0,
    stop:0,
	right:0,
	left:0,
  })
};


backwardButtonClickEvent = function () {
  console.log("Backward Button is clicked");
  usersRef.child("ButtonConfig").set({
    forward:0,
    backward:1,
    stop:0,
	right:0,
	left:0,
  })
};


rightButtonClickEvent = function () {
  console.log("Right Button is clicked");
  usersRef.child("ButtonConfig").set({
    forward:0,
    backward:0,
    stop:0,
	right:1,
	left:0,
  })
};

leftButtonClickEvent = function () {
  console.log("Left Button is clicked");
  usersRef.child("ButtonConfig").set({
    forward:0,
    backward:0,
    stop:0,
	right:0,
	left:1,
  })
};
