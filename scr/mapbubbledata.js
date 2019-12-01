/**
 * Define custom center coordinates for each country
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
  {"code":"UK" , "name":"United Kingdom", "value":37005, "color":"#eea638"}
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
    "UK":38485},

    { "EUUNION":545,
    "EEACOUNTRY":20,
    "EUCOUNTRY":60,
    "AF":55,
    "AS":195,
    "AUS":120,
    "ME":75,
    "NA":260,
    "SA":20,
    "UK":38485
}
]
