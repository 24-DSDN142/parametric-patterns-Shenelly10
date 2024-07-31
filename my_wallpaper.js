//your parameter variables go here!
let rect_width  = 20
let rect_height = 20


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
  ellipse(40, 50, 80, 40);
  rect(rect_width, rect_height)
}
