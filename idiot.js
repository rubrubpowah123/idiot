
// this runs the idiot page

// console.log("Hello there")

function showMainWindow() {
	alert("you are the idiot!")	
}

// theWindow
// let windowName = "_blank";
let windowName = "theWindow";
let windowWidth = 400;
let windowHeight = 100;
let mainWindow = null;
let windowX = 0;

function showDomWindow() {
	mainWindow = window.open("", windowName, "width=" + windowWidth + ",height=" + windowHeight);
	mainWindow.document.write("<p>This is " + windowName + ". I am " + windowWidth + "px wide and " + windowHeight + "px tall!</p>");	
}

function setup() {

}

// let counter = 0;
function draw() {
	// counter = counter + 1;
	// console.log("hello: " + counter)
	windowX = windowX + 5;
	if (mainWindow != null) {
		mainWindow.moveTo(windowX, 100);
	}
}