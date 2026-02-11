var player = { x: 20, y: 20 };
var example = document.getElementById("example"),
ctx = example.getContext("2d");
example.height = 300;
example.width = 300;

ctx.strokeRect(15, 15, 266, 266);
ctx.fillRect(20, 20, 256, 256);
/*1-sand
0-water
2-3-4-grass*/
var map = [];
for (i = 0; i < 64; i++) {
  var r = Math.floor(Math.random() * 5, 0);
  map.push(r);
}
var water = [];
var n = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (map[n] == 0)water.push([[j*32+20],[i*32+20]]);
      n++
    }
  }
var fy = Math.floor(Math.random() * 8, 0) * 32 + 20;
var fx = Math.floor(Math.random() * 8, 0) * 32 + 20;
updatefunc();
function updatefunc() {
  var n = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (map[n] == 1) {
        ctx.fillStyle = "#d8bb7b"; //sand
        ctx.fillRect(20 + j * 32, 20 + i * 32, 32, 32);
      } else if (map[n] === 0) {
        ctx.fillStyle = "#4286f4"; //water
        ctx.fillRect(20 + j * 32, 20 + i * 32, 32, 32);
      } else {
        ctx.fillStyle = "#3da825"; //grass
        ctx.fillRect(20 + j * 32, 20 + i * 32, 32, 32);
      }
      n++;
    }
  }
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, 32, 32);
  ctx.fillStyle = "#442f13";
  ctx.fillRect(fx, fy, 32, 32);

  if (player.x == fx && player.y == fy) location.reload(true);
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {//up
    if (player.y != 20) player.y -= 32;
    updatefunc();    
  } else if (e.keyCode == "40") {//down
    if (player.y != 244) player.y += 32;
    updatefunc();
  } else if (e.keyCode == "37") {//left
    if (player.x != 20) player.x -= 32;
    updatefunc();
  } else if (e.keyCode == "39") {//right
    if (player.x != 244) player.x += 32;
    updatefunc();
  }
}
