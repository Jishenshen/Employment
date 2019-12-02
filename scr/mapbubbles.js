/**
 * The actual map data is included via separate file for clarity:
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js
 */

/**
 * Initialize global variables
 */

/*<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js"></script>
*/
var latlong = {
    "EUUNION": {"latitude":51.1657, "longitude":10.4515},
    "EEACOUNTRY": {"latitude":60.4720, "longitude":8.4689},
    "EUCOUNTRY": {"latitude":46.8182, "longitude":8.2275},
    "AF": {"latitude":-8.7832, "longitude":34.5085}, 
    "AS": {"latitude":34.0479, "longitude":100.6197},
    "AUS": {"latitude":-25.2744, "longitude":133.7751},
    "ME": {"latitude":29.2985, "longitude":42.5510},
    "NA": {"latitude":54.5260, "longitude":-105.2551},
    "SA": {"latitude":-8.7832, "longitude":-55.4915},
    "UK": {"latitude":55.3781, "longitude":-3.4360}
    
  };
  
  /**
   * Initial map data
   */
  var mapData = [
    {"code":"EUUNION" , "name":"Other European Union (EU)", "value":535, "color":"#eea638"},
    {"code":"EEACOUNTRY" , "name":"Other EEA countries", "value":20, "color":"#d8854f"},
    {"code":"EUCOUNTRY" , "name":"Other Europe", "value":55, "color":"#de4c4f"},
    {"code":"AF" , "name":"Africa", "value":50, "color":"#de4c4f"},
    {"code":"AS" , "name":"Asia", "value":175, "color":"#86a965"},
    {"code":"AUS" , "name":"Australia", "value":80, "color":"#d8854f"},
    {"code":"ME" , "name":"Middle East", "value":70, "color":"#8aabb0"},
    {"code":"NA" , "name":"North America", "value":205, "color":"#d8854f"},
    {"code":"SA" , "name":"South America", "value":10, "color":"#d8854f"},
    {"code":"UK" , "name":"United Kingdom", "value":37, "color":"#eea638"}//37005
  ];
  
  /**
   * Values for each of the timeline frames
   */
  var frames = [
      { "EUUNION":545,
      "EEACOUNTRY":20,
      "EUCOUNTRY":60,
      "AF":55,
      "AS":195,
      "AUS":120,
      "ME":75,
      "NA":260,
      "SA":20,
      "UK":38},//38485
  
      { "EUUNION":545,
      "EEACOUNTRY":20,
      "EUCOUNTRY":60,
      "AF":55,
      "AS":195,
      "AUS":120,
      "ME":75,
      "NA":260,
      "SA":20,
      "UK":38  //38485
  }
  ]
var map;
var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;


/**
 * Get min and max values
 */
for (var i = 0; i < mapData.length; i++) {
    var value = mapData[i].value;
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

/**
 * We are using circle square rather than radius as a size indicator
 * Let's calculate minimum ant maximum squares
 */
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

/**
 * Create the map
 */
AmCharts.ready(function() {
    AmCharts.theme = AmCharts.themes.dark;
    map = new AmCharts.AmMap();
    map.path = "https://www.amcharts.com/lib/3/";

    map.addTitle("Population of the World in 2011", 14);
    map.addTitle("source: Gapminder", 11);
    map.areasSettings = {
        unlistedAreasColor: "#000000",
        unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";

    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        images: []
    }

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[i];
        var value = dataItem.value;
                var size = calcBubbleSize(value);
        var id = dataItem.code;

        dataProvider.images.push({
            id: id,
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value
        });
    }

    map.dataProvider = dataProvider;

    map.write("chartdiv");
});

/**
 * Calculates bullet size based on its value
 */
function calcBubbleSize( value ) {
  var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
  if (square < minSquare) {
    square = minSquare;
  }
  return Math.sqrt(square / (Math.PI * 2));
}

/**
 * The code responsible for animating the motion chart data
 */

// initilize variables
var currentFrame = 0;
var interval;
var speed = 200; // time between frames in milliseconds

// function to start stop
function togglePlay() {
  
  // check if animation is playing (intverla is set)
  if ( interval ) {
    
    // stop playing (clear interval)
    clearInterval( interval );
  }
  else {
    
    // start playing
    interval = setInterval( function () {
      
      // iterate the frame
      currentFrame++;
      
      // check if maybe we need to wrap to frame 0
      if ( currentFrame >= frames.length )
        currentFrame = 0;
      
            // update size of each bubble for the specific frame
      for( var i = 0; i < map.dataProvider.images.length; i++ ) {
        var image = map.dataProvider.images[i];
        image.value = frames[currentFrame][image.id];
        image.width = calcBubbleSize( frames[currentFrame][image.id] );
        //console.log(frames[currentFrame][image.id]);
      }
      map.validateData();
      
      // set frame indicator
      document.getElementById( 'frame' ).innerHTML = currentFrame;
      
    }, speed );
    
  }
}

