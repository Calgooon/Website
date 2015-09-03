var count = 0;

function update() {
if(count == 0) {
document.getElementById("pic").src="me.jpg";
document.getElementById("pic").style.height="100%";
document.getElementById("pic").style.width="100%";
document.getElementById("pic").style.align="left"; }
if(count == 1) {
document.getElementById("pic").src="champs.jpg";
document.getElementById("pic").style.height="100%";
document.getElementById("pic").style.width="100%"; }
if(count == 2) {
document.getElementById("pic").src="abby.jpg"; 
document.getElementById("pic").style.height="100%";
document.getElementById("pic").style.width="100%"; }
}


function clickLeft() {
count--;
if(count < 0) {count = 2;}
update();
}

function clickRight() {
count++;
if(count > 2) {count = 0;}
update();
}