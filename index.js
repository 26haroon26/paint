let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
let strDataURI = canva.toDataURL();
let isMouseDown = false;
let squareStartx, squareStarty, squareEndx, squareEndy,
    circleStartx, circleStarty, circleEndx, circleEndy;
    canva.width = Number(window.innerWidth) - 18;
    canva.height = Number(window.innerHeight) - 51.5;
// let undoArray = [];
// let index = -1;
// undoArray.push(ctx.getImageData(0, 0, canva.width, canva.height));


// function forUndo() {
//     if (index === 0) {
//         clearcanvas();
//     } else if (index < 0) {
//         index = -1;
//     }
//     else {
//         index -= 1;
//         undoArray.pop();
//         ctx.putImageData(undoArray[index], 0, 0)
//     }
//     console.log(index);
// }




let pencilMouseDown = (event) => {
    isMouseDown = true;
    ctx.beginPath();

}
let pencilMouseUp = (event) => {

    ctx.beginPath();
    isMouseDown = false;
    // undoArray.push(ctx.getImageData(0, 0, canva.width, canva.height));
    // index += 1;
    // console.log(index);

}
let pencilMouseMove = (event) => {
    if (isMouseDown) {
        ctx.lineCap = "round";
        ctx.lineWidth = size.value;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY)
        ctx.strokeStyle = color.value;
    }
}
// let client;
let circleMouseDown = (event) => {
    circleStartx = event.offsetX;
    circleStarty = event.offsetY;
    // client = event.clientY;
    isMouseDown = true;
}
// let circleMouseMove = (event) => {
//     if (isMouseDown) {
//         ctx.beginPath();
//         ctx.arc(circleStartx, circleStarty, Math.abs(event.offsetX - circleStartx), 0, Math.PI * 2);
//         ctx.stroke();
//         ctx.fillStyle = color.value;
//         // ctx.fill();
//         // ctx.closePath();
//         ctx.save();
//         ctx.fillStyle = ctx.strokeStyle;
//         // ctx.fillRect(x, y, w, h);
//         ctx.restore();
//     }
// }

let circleMouseUp = (event) => {
    circleEndx = event.offsetX;
    circleEndy = event.offsetY;
    isMouseDown = false;
    let radius = Math.abs(circleEndx - circleStartx) / 2;
    if (circleEndx === circleStartx && circleEndy === circleEndy) {
        ctx.beginPath();
        ctx.arc(0, 0, 0, 0, 0);
        ctx.stroke();
    }
    /// zero se km wale value ke lye
    // else if (radius < 0) {
    //     let radiusr = circleStarty - event.offsetY;
    //     ctx.beginPath();
    //     ctx.strokeStyle = color.value;
    //     ctx.lineWidth = size.value;
    //     ctx.arc(circleStartx, circleStarty, radiusr, 0, 2 * Math.PI);
    //     ctx.stroke();
    // }
    else {
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(circleStartx, circleStarty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    circleEndx = '';
    circleEndy = '';
    circleStartx = '';
    circleStarty = '';
}
let squareMouseDown = (event) => {
    squareStartx = event.offsetX;
    squareStarty = event.offsetY;
    isMouseDown = true;
};

let squareMouseUp = (event) => {
    squareEndx = event.offsetX;
    squareEndy = event.offsetY;
    isMouseDown = false;
    let xaxis = squareEndx - squareStartx;
    let yaxis = squareEndy - squareStarty;
    if (squareEndx === squareStartx && squareEndy === squareStarty) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(0, 0, 0, 0);
        ctx.stroke();
    } else {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(squareStartx, squareStarty, xaxis, yaxis);
        ctx.stroke();
        // ctx.save();
    }
};



function act(toolName) {
    canva.removeEventListener("mousedown", pencilMouseDown);
    canva.removeEventListener("mousedown", circleMouseDown);
    canva.removeEventListener("mousedown", squareMouseDown);
    canva.removeEventListener("mouseup", pencilMouseUp);
    canva.removeEventListener("mouseup", circleMouseUp);
    canva.removeEventListener("mouseup", squareMouseUp);
    canva.removeEventListener("mousemove", pencilMouseMove);
    // canva.removeEventListener("mousemove", circleMouseMove);

    switch (toolName) {
        case "pencil":
            /// for line

            canva.addEventListener("mousedown", pencilMouseDown);
            canva.addEventListener("mouseup", pencilMouseUp);
            canva.addEventListener("mousemove", pencilMouseMove);
            break;

        case "circle":
            // for circle

            canva.addEventListener("mousedown", circleMouseDown);
            canva.addEventListener("mouseup", circleMouseUp);
            // canva.addEventListener("mouseup", circleMouseMove);
            break;

        case "square":
            // for square
            canva.addEventListener("mousedown", squareMouseDown);
            canva.addEventListener("mouseup", squareMouseUp);
            break;

        default:
            break;
    }
}


function forReset() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    var w = canva.width;
    canva.width = 0;
    canva.width = w;
}
function forSave() {
    let canvas = document.querySelector("#myCanvas");
    let anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/jpg");
    anchor.download = "paint.jpg";
    anchor.click();
}
