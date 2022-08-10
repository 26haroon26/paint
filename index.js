let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
let value = '';
let color = document.getElementById("color");
let size = document.getElementById("size");
let isMouseDown = false;
let startx, starty, endx, endy;
let ctxCopy = '';


function getid(a) {
    value = `${a}`;
    console.log(value);
}

// if (value == "pencil") {

    document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
        isMouseDown = true;
    });
    document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
        ctx.beginPath();
        isMouseDown = false;
    });

    document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {
        if (isMouseDown) {
        ctx.lineCap = "round";
        ctx.lineWidth = size.value;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        // ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY)
        ctx.strokeStyle = color.value;
        }
    });

// }
// else if (value == "square") {

// }
// else if (value == "circle") {

// }


// canva.addEventListener("mousedown", (event) => {
//     startx = event.offsetX;
//     starty = event.offsetY;

//     isMouseDown = true;
//     // ctxCopy = JSON.stringify(ctx);
// });
// canva.addEventListener("mouseup", (event) => {
//     endx = event.offsetX;
//     endy = event.offsetY;
//     isMouseDown = false;


//     // ctx.strokeRect(startx, starty, endx, endy);
//     // ctx.stroke();
// });

// canva.addEventListener('mousemove', (event) => {
//     if (isMouseDown) {

//         // ctx = JSON.parse(ctxCopy)
//         ctx.fillRect(event.offsetX, event.offsetY, size.value, size.value);
//         // ctx.strokeRect(startx, starty, endx, endy);
//         ctx.fillStyle = color.value;
//         ctx.stroke();
//     }

// });

startx = "";
starty = "";
endx = "";
endy = "";
function forReset() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    var w = canva.width;
    canva.width = 0;
    canva.width = w;
}
function forSave() {
    let canvas = document.querySelector('#myCanvas');
    let anchor = document.createElement('a');
    anchor.href = canvas.toDataURL('image/jpg');
    anchor.download = 'paint.jpg';
    anchor.click();

}
// function forSave() {
//     console.log(canva.toDataURL());
//     document.getElementById("savedImage").href = `${canva.toDataURL()}`;
// }


// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // ctx.moveTo(0, 0);
// // ctx.lineTo(200, 100);
// // ctx.stroke();

// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // ctx.beginPath();
// // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// // ctx.stroke();
