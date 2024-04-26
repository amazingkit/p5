function setup() {
  var canvas= createCanvas(600, 550);
  canvas.parent('canvas3');

}

function draw() {
  background(37,42,50);
  noStroke();

  let distanceX = mouseX - 500; 
  let distanceY = mouseY - 500;  

  

//left side 
// pink circle
  fill(247, 156, 216);
  circle(60 + distanceX * 0.05, 100 + distanceY * 0.05, 40);

//yellow circle (left upper)
  fill(248,223,93);
  circle(40 + distanceX *0.05, 50+ distanceY * 0.05, 20);

//blue glowy underneath
  fill(149,210,237,170);
  circle(60 + distanceX * 0.05,250 + distanceY * 0.05,70);

//black circle under grey
  fill(38,42,50);
  circle(60 + distanceX * 0.05,250 + distanceY * 0.05,65);

//greyish circle
  fill(183,193,215);
  circle(60 + distanceX * 0.05,250 + distanceY * 0.05,60);

//black circle in grey circle
  fill(21,21,21);
  circle(75 + distanceX * 0.05,235 + distanceY * 0.05,15);

//bright yellow circle under grey
  fill(248,223,93);
  circle(90 + distanceX * 0.05, 305 + distanceY * 0.05, 40);

//brown next to yellow
  fill(113,81,54, 300);
  circle(130 + distanceX * 0.05, 313 + distanceY * 0.05, 40);

//red overlapping yellow and brown
  fill(236,56,87, 200);
  circle(110 + distanceX * 0.05, 313 + distanceY * 0.05, 40);

//burnt orange above brown
  fill(203,98,55,205);
  circle(137 + distanceX * 0.05, 280 + distanceY * 0.05, 40);

//yellower circle
  fill(224,181,51,210);
  circle(120 + distanceX * 0.05, 255 + distanceY * 0.05, 40);

//tiny pink
  fill(247, 156, 216);
  circle(55 + distanceX * 0.05, 380 + distanceY * 0.05, 15);

//light blue under tiny pink
  fill(67,176,236);
  circle(85 + distanceX * 0.05, 400 + distanceY * 0.05, 27);

//yellow outline
  fill(248,223,93);
  circle(45 + distanceX * 0.05, 420 + distanceY * 0.05, 15);

//tiny black circle
  fill(38,42,50);
  circle(45 + distanceX * 0.05, 420 + distanceY * 0.05, 13);



  
//center
//big bleue
  fill(18,69,214);
  circle(250 + distanceX * 0.05,200+ distanceY * 0.05,225);

//black is the new blue
  fill(21,21,21);
  circle(230 + distanceX * 0.05,180+ distanceY * 0.05,170);

//urple
  fill(171,180,221,175);
  circle(250 + distanceX * 0.05, 325+ distanceY * 0.05, 60);

//oh look more blue, lighter edition
 fill(83,190,226);
 circle(330 + distanceX * 0.05, 340+ distanceY * 0.05, 70);

//a really trans darker yellow
  fill(224,181,51,150);
  circle(330 + distanceX * 0.05, 280+ distanceY * 0.05, 70);

//a different pink
  fill(253,112,177,220);
  circle(360 + distanceX * 0.05, 290+ distanceY * 0.05, 30);

//a slightly trans yellow
  fill(248,223,93,200);
  circle(290+ distanceX * 0.05, 280+ distanceY * 0.05, 50);

//your element, is green
  fill(78,131,62,200);
  circle(315+ distanceX * 0.05, 230+ distanceY * 0.05, 50);

//idk what color this is, so i say its blue
  fill(83,190,226,150);
  circle(270+ distanceX * 0.05, 243+ distanceY * 0.05, 25);

//yellow loner
  fill(253,190,48);
  circle(270+ distanceX * 0.05, 410+ distanceY * 0.05, 25);

//purple at the topish
  fill(196,144,221,175);
  circle(300+ distanceX * 0.05, 120+ distanceY * 0.05, 70);


//right side
//big, ominious green
  fill(50,109,100,225);
  circle(405+ distanceX * 0.05, 180+ distanceY * 0.05, 100);

//another blue glow
  fill(149,210,237,150);
  circle(405+ distanceX * 0.05, 180+ distanceY * 0.05, 25);

//black dot
  fill(21,21,21);
  circle(405+ distanceX * 0.05, 180+ distanceY * 0.05, 20);

//lighy yellow above green
  fill(250,225,116)
  circle(420+ distanceX * 0.05, 100+ distanceY * 0.05, 45);

//orange you glad it's not yellow
  fill(254,178,27);
  circle(483+ distanceX * 0.05, 140+ distanceY * 0.05, 25);

//RED
  fill(224,54,76);
  circle(530+ distanceX * 0.05, 60+ distanceY * 0.05, 17);

//teal glow behind
fill(192,244,248,225);
circle(540+ distanceX * 0.05, 280+ distanceY * 0.05, 20);

//blue directly beneath
fill(18,69,214);
circle(540+ distanceX * 0.05, 280+ distanceY * 0.05, 17);

//big purple grey
  fill(189,200,221);
  circle(483+ distanceX * 0.05, 380+ distanceY * 0.05, 100);

//yellow glow
  fill(239,226,186);
  circle(460+ distanceX * 0.05, 370+ distanceY * 0.05, 33);

//teal
  fill(129,218,218);
  circle(460+ distanceX * 0.05, 370+ distanceY * 0.05, 27);

//cream
  fill(198,182,140,225);
  circle(430+ distanceX * 0.05, 350+ distanceY * 0.05, 33);

//well, well, well, yellow
  fill(235,218,32);
  circle(460+ distanceX * 0.05, 450+ distanceY * 0.05, 15);

//red rover, red rover
  fill(215,58,87);
  circle(445+ distanceX * 0.05, 490+ distanceY * 0.05, 23);

//blue da ba dee da ba di
  fill(58,143,196);
  circle(510+ distanceX * 0.05, 510+ distanceY * 0.05, 17);

//the last yellow
  fill(199,175,64,200);
  circle(535+ distanceX * 0.05, 380+ distanceY * 0.05, 15);
}
