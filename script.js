var start, end;
start = new Date().getTime();
var box = document.getElementById("box");

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }


box.onclick = function() {  //Box Disappaers and time was calculated  
  box.style.display = "none";
  end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert(timeTaken + " seconds");
  move();
}

//Random position moving code
function move() {
  start = new Date().getTime();
  var left, top, wh, color;
  left = Math.random() * 30; 
  top = Math.random() * 21+5; 
  wh = Math.random() * 5 + 3;

  box.style.left = `${left}em`;
  box.style.top = `${top}em`;
  box.style.height = `${wh}em`;
  box.style.width = `${wh}em`;
  box.style.backgroundColor = color;
  box.style.display = "block";
}

// Optionally, call move() at the start to show the box immediately
move();
