"use strict";



let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

Spaceinvader();

function Spaceinvader() {
    //BOX
context.beginPath();
context.fillRect(600, 200, 300, 300);
context.stroke();

//INSIDE BOX LOGO
context.fillStyle='Lime';
context.fillRect(725,225, 50, 50); 
context.fillRect(725, 325, 50, 50);
context.fillRect(625, 225, 50, 150);
context.fillRect(825, 225, 50, 150);


}





