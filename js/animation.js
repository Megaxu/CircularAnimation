var x = 0;
var y = 0;
var deg = 0;

var circle = document.getElementById("circle");
var time = setInterval(round, 10);

function move() {
    if(x <= 670 || y <= 670) {
        x++;
        y++;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
    }
}

function round() {
    deg++;
    circle.style.transform = "rotate(" + deg + "deg)";
}