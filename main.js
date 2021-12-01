mouseEvent="empty";

canvas = document.getElementById("myCanvas"); ctx = canvas.getContext("2d"); color = "black"; width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
   color=document.getElementById("color").value;
   width_of_line=document.getElementById("width_of_line").value;
   radius=document.getElementById("radius").value;
   mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
            currentpositionmouseX=e.clientX-canvas.offsetLeft;
            currentpositionmouseY=e.clientY-canvas.offsetTop;
            if (mouseEvent=="mousedown") {
                console.log("Current position of x and y coordinates = ");
                console.log("x = " + currentpositionmouseX + "y = " + currentpositionmouseY)
                    ctx.beginPath();
                    ctx.strokeStyle=color;
                    ctx.lineWidth=width_of_line;
                    ctx.arc(currentpositionmouseX, currentpositionmouseY, radius ,0 ,2 * Math.PI);
                    ctx.stroke();
            }
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}