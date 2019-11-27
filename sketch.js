//variables
var tg1logo;
var backgroundImage;
var themeSong;
var stars;

function preload() {
  //preloading images
  tg1logo = loadImage('./assets/TG1.png');
  backgroundImage = loadImage('./assets/background.jpg');
  themeSong = loadSound('./assets/TG1_new.mp3');
  trumpet = loadImage('./assets/trumpet.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
//setup analyzer and music
  analyzer = new p5.Amplitude();
  analyzer.setInput(themeSong);
  themeSong.pause();
  themeSong.playMode('sustain');
}

function draw() {
  //background image
  image(backgroundImage, windowWidth / 2, windowHeight / 2, backgroundImage.width + volume / 2, backgroundImage.height + volume / 2);

  //display analyzer
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  //pulsing aura displayed
  push();
  var y = noise(frameCount / 300) + windowHeight / 2 + 150;
  var x = noise(frameCount / 300) + windowWidth / 2;
  noStroke();
  var color = get(x, y);
  fill(255, 255, 255, 35);
  ellipse(x, y, volume * 4);
  ellipse(x, y, volume * 2.25);
  pop();

  //pulsing LOGO over the background
  image(tg1logo, windowWidth / 2, windowHeight / 2 - 50, tg1logo.width / 3 + volume / 3, tg1logo.height / 3 + volume / 3);
  image(trumpet, windowWidth / 2, windowHeight / 2 + 150, trumpet.width / 5 + 5 + volume / 3, tg1logo.height / 5 - 35 + volume / 3);

  if (themeSong.isPlaying() == true) {
    //text displayed
  } else {
    noStroke();
    textFont('helvetica');
    textSize(15);
    text('CLICK FOR THE THEME SONG', windowWidth / 2 - 20, 200);
  }


  //TEXTS
  textAlign(CENTER);
  fill(220, 10, 0);
  textSize(15);
  text('ROME LONDON NEW YORK CITY TOKYO MILAN MOSCOW ISTANBUL DHAKA BEIJING SHANGAI SAO PAULO DELHI SEOUL JAKARTA CAIRO MEXICO CITY TEHRAN BAGHDAD ROME LONDON NEW YORK CITY TOKYO MILAN MOSCOW ISTANBUL DHAKA BEIJING SHANGAI SAO PAULO DELHI SEOUL JAKARTA CAIRO MEXICO CITY TEHRAN BAGHDAD ', width / 2, height / 2 + 340);
  fill(255, mouseY / 2.5);
  textSize(15);
  text('MILANO, 27/11/2019', width / 2, 50);
  text((mouseX), width / 2 - 15, 90);
  text((mouseY), width / 2 + 15, 90);
  textAlign(LEFT);
  push();
  pop();


  //line
  stroke(255, mouseY / 6);
  line(width / 2 - 70, 65, width / 2 + 73, 65);
}

//music switch
function mouseClicked() {
  if (themeSong.isPlaying() == false) {
    themeSong.play();
  } else {
    themeSong.pause();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
