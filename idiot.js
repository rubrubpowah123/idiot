
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
let windowY = 0;

let moveX = 2;
let moveY = 2;

function showDomWindow() {
	mainWindow = window.open("", windowName, "width=" + windowWidth + ",height=" + windowHeight);
	// mainWindow.document.write("<p>This is " + windowName + ". I am " + windowWidth + "px wide and " + windowHeight + "px tall!</p>");	
	mainWindow.document.write("<p>YOU ARE THE IDIOT</p>");	
}

function setup() {
	moveX = random(2, 8);
	moveY = random(2, 8);
}

// let counter = 0;
function draw() {
	// counter = counter + 1;
	// console.log("hello: " + counter)
	if (mainWindow != null) {
		let nextX = windowX + moveX;
		let nextY = windowY + moveY;
		if (nextX > displayWidth - windowWidth) {
			moveX = random(-2, -8);
			nextX = windowX + moveX;
		}
		if (nextX < 0) {
			moveX = random(2, 8);
			nextX = windowX + moveX;
		}
		if (nextY > displayHeight - windowHeight) {
			moveY = random(-2, -8);
			nextY = windowY + moveY;
		}
		if (nextY < 0) {
			moveY = random(2, 8);
			nextY = windowY + moveY;
		}
		windowX = nextX;
		windowY = nextY;
		mainWindow.moveTo(windowX, windowY);
		// this doesn't work completely
		mainWindow.focus();
	}
}