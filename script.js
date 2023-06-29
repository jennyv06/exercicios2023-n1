window.onload = function (){
    
}

let canvas = document.getElementById("cityCanvas");
let ctx = canvas.getContext("2d");

// desenho da rua
ctx.fillStyle = "gray";
ctx.fillRect(0, canvas.height / 2 - 40, canvas.clientWidth,80)

// desenhar as casas

let housePositions = [100,250,400,550,700];
let houseWidth = 80;
let houseHeight = 80;

ctx.fillStyle = "#F08080";

for(let i = 0; i < housePositions.length; i++){
    let x = housePositions[i];
    ctx.fillRect(x, canvas.height / 2 - houseHeight, houseWidth,houseHeight  )
}