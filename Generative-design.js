let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
/*
function randomColor() {
	let colors = ["#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585"];
	return colors[Math.floor(Math.random() * colors.length)];
}

function drawRandomCircle(x, y, maxRadius) {
	let radius = Math.random() * maxRadius;
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = randomColor();
	context.fill();
}

function drawRandomRectangle(x, y, maxWidth, maxHeight) {
	let width = Math.random() * maxWidth;
	let height = Math.random() * maxHeight;
	context.fillStyle = randomColor();
	context.fillRect(x, y, width, height);
}

function generateDesign() {
	let shapeCount = 30;
	for (let i = 0; i < shapeCount; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;

		if (Math.random() > 0.5) {
			drawRandomCircle(x, y, canvas.width * 0.05);
		} else {
			drawRandomRectangle(x, y, canvas.width * 0.1, canvas.height * 0.1);
		}
	}
}

generateDesign();
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	generateDesign();
});
*/
tekenTShirt();
drawcircle();

function tekenTShirt() {
	context.fillStyle = "black";
	context.fillRect(100, 100, 200, 250);
}

function drawcircle() {
	let centerX = 200;
	let centerY = 100;
	let radius = 50;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	context.fillStyle = "white";
	context.fill();
	context.closePath();
}

context.beginPath();
context.moveTo(300, 100);
context.lineTo(350, 200);
context.lineTo(300, 200);
context.lineTo(300, 100);
context.fillStyle = "black";
context.fill();
context.closePath();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(50, 200);
context.lineTo(100, 200);
context.lineTo(100, 100);
context.fillStyle = "black";
context.fill();
context.closePath();
