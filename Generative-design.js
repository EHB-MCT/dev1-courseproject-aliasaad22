let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let canvasHeight = context.canvas.height;
let canvasWidth = context.canvas.width;

document.body.style.overflow = "hidden";

function randomColor() {
	let h = Math.floor(Math.random() * 360);
	let s = 70 + Math.floor(Math.random() * 30);
	let l = 80 + Math.floor(Math.random() * 20);
	return hsl(h, s, l);
}

function hsl(h, s, l) {
	return `hsl(${h}, ${s}%, ${l}%)`;
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
	let shapeCount = 6000;
	for (let i = 0; i < shapeCount; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;

		// Relatieve afmetingen
		let maxCircleRadius = canvas.width * 0.03;
		let maxRectangleWidth = canvas.width * 0.08;
		let maxRectangleHeight = canvas.height * 0.08;

		if (Math.random() > 0.5) {
			drawRandomCircle(x, y, maxCircleRadius);
		} else {
			drawRandomRectangle(x, y, maxRectangleWidth, maxRectangleHeight);
		}
	}
}

generateDesign();

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	generateDesign();
});
document.body.style.overflow = "hidden";
