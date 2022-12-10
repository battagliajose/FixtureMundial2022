var context = document.querySelector("#canvas").getContext("2d");
var canvasH, canvasW;

context.strokeStyle = "#0A3871";
resizeCanvas()
draw();

function draw(){
    drawBox(50,50,100,100);
}

function drawLine(sPosX, sPosY, ePosX, ePosY) {
    context.beginPath();
    context.moveTo(sPosX, sPosY);
    context.lineTo(ePosX, ePosY);
    context.stroke();
}

function drawBox(posX, posY, width, height) {
    context.beginPath();
    context.rect(posX, posY, width, height)
    context.stroke();
}

function resizeCanvas() {
    context.canvas.height = document.documentElement.clientHeight * 0.7;
    context.canvas.width = document.documentElement.clientWidth * 0.9;
    canvasH = context.canvas.height;
    canvasW = context.canvas.width;
    
    draw();
}

/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas);