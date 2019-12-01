/**
 * The actual map data is included via separate file for clarity:
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js
 */

/**
 * Initialize global variables
 */

/*<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data_12785.js"></script>
*/
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

