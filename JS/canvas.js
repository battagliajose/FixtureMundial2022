var context = document.querySelector("#canvas").getContext("2d");
var canvasW, canvasH;

var teams = ["NED", "USA", "ARG", "AUS", "JPN", "CRO", "BRA", "KOR", "NED", "ARG", "CRO", "BRA", "ARG", "CRO", "-",
            "-", "-", "MOR", "ING", "FRA", "MOR", "POR", "ING", "SEN", "FRA", "POL", "MOR", "ESP", "POR", "SUI"];
var teamCtr = 0;

context.strokeStyle = "#0A3871";
resizeCanvas()
draw();

function draw(){
    var boxWidth = canvasW/8.9;
    var boxHeigh = canvasH/10
    var columnSep = canvasW / 88;
    var startX = canvasW - (boxWidth+columnSep)*8;

    drawBoxColumn(startX, boxWidth, boxHeigh, 8)
    drawBoxColumn(startX + (boxWidth + columnSep), boxWidth, boxHeigh, 4)
    drawBoxColumn(startX + (boxWidth + columnSep)*2, boxWidth, boxHeigh, 2)
    drawBoxColumn(startX + (boxWidth + columnSep)*3, boxWidth, boxHeigh, 1)
    drawBoxColumn(startX + (boxWidth + columnSep)*4, boxWidth, boxHeigh, 1)
    drawBoxColumn(startX + (boxWidth + columnSep)*5, boxWidth, boxHeigh, 2)
    drawBoxColumn(startX + (boxWidth + columnSep)*6, boxWidth, boxHeigh, 4)
    drawBoxColumn(startX + (boxWidth + columnSep)*7, boxWidth, boxHeigh, 8)
    drawTextBox((canvasW-boxWidth)/2, canvasH-boxHeigh-boxHeigh/10, boxWidth, boxHeigh, "-", canvasW/25);
    teamCtr = 0;
}

function drawBoxColumn(sPosX, boxWidth, boxHeight, cant) {
    yMult = canvasH/cant;
    topMargin = (canvasH/cant - canvasH/9) /2

    for ( i = 0; i < cant; i++) {
        drawTextBox(sPosX, yMult * i + topMargin, boxWidth, boxHeight, teams[teamCtr], canvasW /25);
        teamCtr++;
    }
    
}

function drawTextBox(sPosX, yMult, boxWidth, boxHeight, text, fontSize) {
    drawBox(sPosX, yMult, boxWidth, boxHeight);
    drawText(sPosX, yMult, boxWidth, boxHeight, text, fontSize);
}

function drawText(posX, posY, width, height, text, fontSize){
    context.fillStyle = "rgb(255, 255, 255 )";
    context.font = fontSize + "px Arial";

    context.fillText(text, posX+width*0.1, posY + (height+fontSize/2)/2);
}

function drawLine(sPosX, sPosY, ePosX, ePosY) {
    context.beginPath();
    context.moveTo(sPosX, sPosY);
    context.lineTo(ePosX, ePosY);
    context.stroke();
}

function drawBox(posX, posY, width, height) {
    context.beginPath();

    context.fillStyle = "rgb(30, 30, 30 )";
    context.fillRect(posX+5, posY+5, width, height)
    /*context.rect(posX, posY, width, height)*/
    
    context.fillStyle = "rgb(100, 200, 255 )";
    context.fillRect(posX, posY, width, height)

    context.stroke();
}

function resizeCanvas() {
    context.canvas.width = document.documentElement.clientWidth * 0.95;
    context.canvas.height = document.documentElement.clientHeight * 0.8;
    canvasW = context.canvas.width;
    canvasH = context.canvas.height;
    
    draw();
}

/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas);