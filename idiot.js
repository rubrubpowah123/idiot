
// this runs the idiot page

// console.log("Hello there")

function showMainWindow() {
	alert("you are the idiot!")	
}

function IdiotWindow(windowName) {
	this.windowName = windowName;
	this.windowWidth = 400;
	this.windowHeight = 100;
	this.mainWindow = window.open("", this.windowName, "width=" + this.windowWidth + ",height=" + this.windowHeight);
	this.windowX = 0;
	this.windowY = 0;
	this.moveX = random(2, 8);
	this.moveY = random(2, 8);

	this.move = function() {
		let nextX = this.windowX + this.moveX;
		let nextY = this.windowY + this.moveY;
		if (nextX > displayWidth - this.windowWidth) {
			this.moveX = random(-2, -8);
			nextX = this.windowX + this.moveX;
		}
		if (nextX < 0) {
			this.moveX = random(2, 8);
			nextX = this.windowX + this.moveX;
		}
		if (nextY > displayHeight - this.windowHeight) {
			this.moveY = random(-2, -8);
			nextY = this.windowY + this.moveY;
		}
		if (nextY < 0) {
			this.moveY = random(2, 8);
			nextY = this.windowY + this.moveY;
		}
		this.windowX = nextX;
		this.windowY = nextY;
		this.mainWindow.moveTo(this.windowX, this.windowY);
	}
}

let idiots = [];

// This happens when the button is clicked
function showDomWindow() {
	if (idiots.length < 100) {
		let idiotNum = idiots.length + 1;
		let curIdiot = new IdiotWindow("idiot" + idiotNum);
		curIdiot.mainWindow.document.write("<p>YOU ARE THE IDIOT " + idiotNum + "</p>");
		idiots.push(curIdiot);
	};
}

function setup() {
	// idiot1 = new IdiotWindow();
	// idiot1.mainWindow.document.write("<p>YOU ARE THE IDIOT 1</p>");

	// idiot2 = new IdiotWindow();
	// idiot2.mainWindow.document.write("<p>YOU ARE THE IDIOT 2</p>");
}

// let counter = 0;
function draw() {
	for (let i=0; i<idiots.length; i+=1) {
		let curIdiot = idiots[i];
		curIdiot.move();
	}

	// counter = counter + 1;
	// console.log("hello: " + counter)
	// if (idiot != null) {
	// 	idiot.move();
	// 	// this doesn't work completely
	// 	// mainWindow.focus();
	// }
}