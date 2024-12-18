let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let mouse = { x: 0, y: 0 };
let circles = [];

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	circles = createCircles(500);
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

function generateDesign() {
	let shapeCount = 1500;
	for (let i = 0; i < shapeCount; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;

		let maxCircleRadius = canvas.width * 0.05;

		drawRandomCircle(x, y, maxCircleRadius);
	}
}

function createCircles(count) {
	for (let i = 0; i < count; i++) {
		let circle = {
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * (canvas.width * 0.05),
			color: randomColor(),
			speedX: 0,
			speedY: 0,
		};
		circles.push(circle);
	}
}

function updateCircles() {
	for (let circle of circles) {
		const dx = circle.x - mouse.x;
		const dy = circle.y - mouse.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < circle.radius) {
			if (circle.speedX === 0 && circle.speedY === 0) {
				circle.speedX = (Math.random() - 0.5) * 4;
				circle.speedY = (Math.random() - 0.5) * 4;
			}

			circle.x += circle.speedX;
			circle.y += circle.speedY;

			if (
				circle.x - circle.radius < 0 ||
				circle.x + circle.radius > canvas.width
			) {
				circle.speedX *= -1;
			}
			if (
				circle.y - circle.radius < 0 ||
				circle.y + circle.radius > canvas.height
			) {
				circle.speedY *= -1;
			}
		}
	}
}

function drawCircles() {
	for (let circle of circles) {
		context.beginPath();
		context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
		context.fillStyle = circle.color;
		context.globalAlpha = 0.8;
		context.fill();
	}
}

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateCircles();
	drawCircles();
	requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

createCircles(500);
generateDesign();
animate();
