// Dango position variables
var dPosX1 = 40;
var dPosY1 = 55;
var dPosX2 = 100;
var dPosY2 = 55;
var dPosX3 = 170;
var dPosY3 = 50;

// Dango parameters
var dSizeOne = 20;
var dSizeTwo = 30;
var dSizeThree = 40;
var dangoStroke = false;
var dangoStrokeWeight = 1;
// Dango colour choices
var dangoColorSet = 2; // Choose from 1-3

// Plane variables
var planeSize = 5;
var planeRows = 5;
var planeCols = 5;

// Parameter to control plane drawing
var drawPlanes = true;
var planeStroke = false;
var planeStrokeWeight = 0.3;

// Background colour choices
var backgroundColor = 3; // Choose from 1-3


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  // pWallpaper.output_mode(DEVELOP_GLYPH);     
  // pWallpaper.resolution(FIT_TO_SCREEN);
  // pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  if (backgroundColor == 1) {
    background(214, 195, 247); //light purple colour
  }

  else if (backgroundColor == 2) {
    background(59, 51, 85);
  }

  else if (backgroundColor == 3) {
    background(19, 64, 116);
  }

  else {
    // Invalid cases (default colour)
    background(214, 195, 247); //light purple colour
  }
  
}

function my_symbol() {
    // Drawing the planes in the background if the parameter is set to true
    if (drawPlanes) {
      // This nested for loop for the planes was done using ChatGPT AI assistance
      var planeXIncrement = 200 / planeCols;
      var planeYIncrement = 200 / planeRows;
      for (var i = 0; i < planeCols; i++) {
        for (var j = 0; j < planeRows; j++) {
          var planeX = i * planeXIncrement + planeXIncrement / 2 - 100 / planeCols;
          var planeY = j * planeYIncrement + planeYIncrement / 2 + 50 / planeRows;
          drawPlane(planeX, planeY, planeSize);
        }
      }
      // End
    }

  // Drawing the dango using the predefined positions
  drawDango(dPosX1, dPosY1, dSizeOne);
  drawDango(dPosX2, dPosY2, dSizeTwo);
  drawDango(dPosX3, dPosY3, dSizeThree);
}

// Function to draw the dango
function drawDango(x, y, size) {
  // Deciding colour set
  if (dangoColorSet == 1) {
    var firstBallCol = color(244, 143, 277); 
    var secondBallCol = color(255, 245, 157); 
    var thirdBallCol = color(197, 225, 165); 
  }

  else if (dangoColorSet == 2) {
    var firstBallCol = color(237, 201, 255); 
    var secondBallCol = color(254, 212, 231); 
    var thirdBallCol = color(242, 183, 159); 
  }

  else if (dangoColorSet == 3) {
    var firstBallCol = color(236, 203, 217); 
    var secondBallCol = color(225, 239, 246); 
    var thirdBallCol = color(151, 210, 251); 
  }

  else {
    // Default colour set
    var firstBallCol = color(244, 143, 277); 
    var secondBallCol = color(255, 245, 157); 
    var thirdBallCol = color(197, 225, 165); 
  }


  // Face size based on the actual dango size
  var faceSize = size / 5;
  var stickWidth = 2;
  var stickLength = size * 1.4;

  // If stroke parameter is true
  if (dangoStroke) {
    stroke(0);
    strokeWeight(dangoStrokeWeight);
  } else {
    strokeWeight(0);
  }


  // Dango
  fill(143, 107, 47); // Stick color
  rect(x - 1, y + size*2, stickWidth, stickLength); // Stick centered

  fill(firstBallCol);
  circle(x, y, size); // First Ball

  fill(secondBallCol);
  circle(x, y + size, size); // Second Ball

  fill(thirdBallCol);
  circle(x, y + 2 * size, size); // Third Ball

  fill(0, 0, 0);
  circle(x - faceSize, y, faceSize); // Left Eye Ball
  circle(x + faceSize, y, faceSize); // Right Eye Ball

  fill(255, 255, 255);
  circle(x + faceSize, y - 1, faceSize / 2); // Right white eye
  circle(x - faceSize, y - 1, faceSize / 2); // Left white eye

  fill(0, 0, 0);
  arc(x, y + faceSize / 2, faceSize, faceSize / 2, 4, PI + QUARTER_PI, CHORD); // Mouth
}


// Function to draw the plane
function drawPlane(x, y, size) {
  var planeCol = color(255, 255, 255); // White
  fill(planeCol);

  // If stroke parameter is true
  if (planeStroke) {
    stroke(0);
    strokeWeight(planeStrokeWeight);
  } else {
    stroke(0);
    strokeWeight(0);
  }


  // Paper Plane
  triangle(x + size * 0.27, y, x + size * 0.17, y - size * 0.9, x + size * 0.67, y - size * 0.23); // Bottom triangle
  triangle(x + size * 0.67, y + size * 0.17, x + size * 0.17, y - size * 0.9, x + size * 0.67, y - size * 0.23); // Top triangle
}