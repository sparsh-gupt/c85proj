canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
car2_width = 100;
car2_height = 90;
background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
rover_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car2_image="https://i.postimg.cc/tnnW1Kff/car2.png"
rover_x = 10;
rover_y = 10;
car2_x = 20;
car2_y = 100;
function add() {
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadbackground;
    backgroundimgtag.src = background_image;
    roverimgtag = new Image();
    roverimgtag.onload = uploadrover;
    roverimgtag.src = rover_image;
    car2imgtag = new Image();
    car2imgtag.onload = uploadcar2;
    car2imgtag.src = car2_image;
}
    function uploadbackground() {
        ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
    }
    function uploadrover() {
        ctx.drawImage(roverimgtag, rover_x, rover_y, rover_width, rover_height);
        uploadcar2();
    }
    function uploadcar2() {
        ctx.drawImage(car2imgtag, car2_x, car2_y, car2_width, car2_height);
    }
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e) {
       keypressd=e.keyCode;
    console.log(keypressd);
    if (keypressd=='38') {
       up(); 
       console.log("up");
    }
    if (keypressd=='40') {
        down(); 
        console.log("down");
     } 
     if (keypressd=='37') {
        left(); 
        console.log("left");
     }
     if (keypressd=='39') {
        right(); 
        console.log("right");
     }
     if (keypressd=='87') {
        w(); 
        console.log("w");
     }
     if (keypressd=='83') {
         s(); 
         console.log("down");
      } 
      if (keypressd=='65') {
         a(); 
         console.log("left");
      }
      if (keypressd=='68') {
         d(); 
         console.log("right");
      }
      if (rover_x>600) {
        document.getElementById("gamestatus").innerHTML="white car won";  
      }
      if (car2_x>600) {
          document.getElementById("gamestatus").innerHTML="green car won";  
        }
    }
function up() {
    if (rover_y>=0) {
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
    rover_y=rover_y+10;
    uploadbackground();
    uploadrover();
    }
}
function right() {
    if (rover_x<=700) {
    rover_x=rover_x+10;
    uploadbackground();
    uploadrover();
    }
}
function left() {
    if (rover_x>=0) {
    rover_x=rover_x-10;
    uploadbackground();
    uploadrover();
    }
}
function w() {
    if (car2_y>=0) {
    car2_y=car2_y-10;
    uploadbackground();
    uploadrover();
    }
}
function s() {
    if (car2_y<=500) {
    car2_y=car2_y+10;
    uploadbackground();
    uploadrover();
    }
}
function d() {
    if (car2_x<=700) {
    car2_x=car2_x+10;
    uploadbackground();
    uploadrover();
    }
}
function a() {
    if (car2_x>=0) {
    car2_x=car2_x-10;
    uploadbackground();
    uploadrover();
    }
}
