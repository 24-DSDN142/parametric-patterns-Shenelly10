//your parameter variables go here!
var Pinkballsize = 25
var Yellowballsize = 25
var Greenballsize = 25

// Positions
var posX = 20;
var posY = 50;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(214, 195, 247); //light purple colour
}

function my_symbol() {

  for (var i = 0; i < 5; i++) {
    // Dango
    noStroke ();
    fill(143, 107, 47);

    rect (posX - 1, posY + 40, 2, 40); // Stick

    fill(244,143,277);
    circle (posX,posY,Pinkballsize) // Pink Ball

    fill(255,245,157);
    circle (posX,posY + 20,Yellowballsize) // Yellow Ball

    fill(197,225,165);
    circle (posX,posY + 40,Greenballsize) // Green Ball

    fill(0,0,0)
    circle (posX - 5, posY, 5); // Left Eye Ball 

    circle (posX + 5, posY, 5); // Right Eye Ball

    fill (255, 255, 255);
    circle (posX + 5, posY - 1,3); // Right white eye

    fill (255, 255, 255);
    circle (posX - 5, posY - 1,3); // Left white eye

    fill (0,0,0);
    // CHORD fill mode.
   arc(posX, posY + 4, 5, 2, 4, PI + QUARTER_PI, CHORD);

    posX += 40;

    if (i % 2 === 0) {
      posY += 40;
    } else {
      posY -= 40;
    }
  }

  // Paper Plane
  // stroke (0)
  // strokeWeight (1)
  // triangle(90, 80, 90, 45, 100, 63); // Origami 
  // triangle(100, 80, 90, 45, 100, 63); 


}