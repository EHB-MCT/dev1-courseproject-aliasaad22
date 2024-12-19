let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

signature();

function signature() {
	context.fillStyle = "black";
	context.fillRect(25, 25, 350, 350);
	context.fillStyle = "#cd8378";
	context.fillRect(100, 50, 200, 200);

	context.fillStyle = "black";
	context.fillRect(165, 115, 70, 70);
	context.fillStyle = "cd8378";
	context.fillRect(50, 250, 50, 50);
	context.fillRect(50, 300, 50, 50);
	context.fillRect(100, 300, 50, 50);
	context.fillRect(150, 300, 50, 50);
	context.fillRect(200, 300, 50, 50);
	context.fillRect(250, 300, 50, 50);
	context.fillRect(300, 300, 50, 50);
	context.fillRect(300, 250, 50, 50);
}
