let frameInterval = 300;
let lastColorChange = 0;
let pulseSpeed = .5;
let pulseAmplitude = 15;

function setup() {
    var canvas= createCanvas(600, 550);
    canvas.parent('canvas2');
  
  }
  
  function draw() {
    if (millis() - lastColorChange > frameInterval){

    background(37,42,50);
    noStroke();
    
  //left side 
  // pink circle
    drawPulsingCircle(60, 100, 40);
  
  //yellow circle (left upper)
    fill(248,223,93);
    circle(40, 50, 20);
  
  //blue glowy underneath
    drawPulsingCircle(60,250,70);
  
  //black circle under grey
    fill(38,42,50);
    circle(60,250,65);
  
  //greyish circle
    fill(183,193,215);
    circle(60,250,60);
  
  //black circle in grey circle
    fill(21,21,21);
    circle(75,235,15);
  
  //bright yellow circle under grey
    fill(248,223,93);
    circle(90, 305, 40);
  
  //brown next to yellow
    drawPulsingCircle(130, 313, 40);
  
  //red overlapping yellow and brown
    fill(236,56,87, 200);
    circle(110, 313, 40);
  
  //burnt orange above brown
    fill(203,98,55,205);
    circle(137, 280, 40);
  
  //yellower circle
    fill(224,181,51,210);
    circle(120, 255, 40);
  
  //tiny pink
    fill(247, 156, 216);
    circle(55, 380, 15);
  
  //light blue under tiny pink
    fill(67,176,236);
    circle(85, 400, 27);
  
  //yellow outline
    fill(248,223,93);
    circle(45, 420, 15);
  
  //tiny black circle
    drawPulsingCircle(45, 420, 13);
  
  
  //center
  //big bleue
    fill(18,69,214);
    circle(250,200,225);
  
  //black is the new blue
    drawPulsingCircle(230,180,170);
  
  //urple
    fill(171,180,221,175);
    circle(250, 325, 60);
  
  //oh look more blue, lighter edition
    drawPulsingCircle(330, 340, 70);
  
  //a really trans darker yellow
    fill(224,181,51,150);
    circle(330, 280, 70);
  
  //a different pink
    fill(253,112,177,220);
    circle(360, 290, 30);
  
  //a slightly trans yellow
    fill(248,223,93,200);
    circle(290, 280, 50);
  
  //your element, is green
    fill(78,131,62,200);
    circle(315, 230, 50);
  
  //idk what color this is, so i say its blue
    fill(83,190,226,150);
    circle(270, 243, 25);
  
  //yellow loner
    drawPulsingCircle(270, 410, 25);
  
  //purple at the topish
    fill(196,144,221,175);
    circle(300, 120, 70);
  
  
  //right side
  //big, ominious green
    fill(50,109,100,225);
    circle(405, 180, 100);
  
  //another blue glow
  drawPulsingCircle(405, 180, 25);
  
  //black dot
    fill(21,21,21);
    circle(405, 180, 20);
  
  //lighy yellow above green
    fill(250,225,116)
    circle(420, 100, 45);
  
  //orange you glad it's not yellow
    drawPulsingCircle(483, 140, 25);
  
  //RED
    fill(224,54,76);
    circle(530, 60, 17);
  
  //teal glow behind
    fill(192,244,248,225);
    circle(540, 280, 20);
  
  //blue directly beneath
    fill(18,69,214);
    circle(540, 280, 17);
  
  //big purple grey
    fill(189,200,221);
    circle(483, 380, 100);
  //yellow glow
    fill(239,226,186);
    circle(460, 370, 33);
  
  //teal
    fill(129,218,218);
    circle(460, 370, 27);
  
  //cream
    fill(198,182,140,225);
    circle(430, 350, 33);
  
  //well, well, well, yellow
    fill(235,218,32);
    circle(460, 450, 15);
  
  //red rover, red rover
    drawPulsingCircle(445, 490, 23);
  
  //blue da ba dee da ba di
    fill(58,143,196);
    circle(510, 510, 17);
  
  //the last yellow
  drawPulsingCircle(535, 380, 15);


    lastColorChange = millis();
  }
}

function drawPulsingCircle(x, y, diameter) {
    let pulse = sin(millis() * pulseSpeed) * pulseAmplitude;
    let adjustedDiameter = diameter + pulse;
    
    let fillColor = color(random(255), random(255), random(255));
    fill(fillColor);
    circle(x, y, adjustedDiameter);
  }
  
  