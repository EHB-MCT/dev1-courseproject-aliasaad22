let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

document.body.style.overflow = "hidden";

window.addEventListener("resize", () => {
	canvas.width = context.canvas.height;
	canvas.height = context.canvas.width;
	generateDesign();
});

function randomColor() {
	let h = Math.floor(Math.random() * 360);
	let s = 50 + Math.floor(Math.random() * 20);
	let l = 50 + Math.floor(Math.random() * 30);
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
	context.globalAlpha = 0.3;
}

generateDesign();
function generateDesign() {
	let shapeCount = 1500;
	for (let i = 0; i < shapeCount; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;

		let maxCircleRadius = canvas.width * 0.05;

		drawRandomCircle(x, y, maxCircleRadius);
	}
}
