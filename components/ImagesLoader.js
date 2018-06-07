// Load images in an Object
const images = {
  snowIcon: require('../icons/color/039-snow.png'),
  hailIcon: require('../icons/color/037-hail.png'),
  sleetIcon: require('../icons/color/031-sleet.png'),
  thunderIcon: require('../icons/color/050-cloud.png'),
  cloudIcon: require('../icons/color/057-clouds.png'),
  sunriseIcon: require('../icons/color/033-sunrise.png'),
  fogIcon: require('../icons/color/038-fog.png'),
  cloudAndSunIcon: require('../icons/color/055-cloudy-1.png'),
  stormIcon: require('../icons/color/035-storm.png')
};

class ImageLoader {
  
  // Get the Icon from the code receive by API/Json Configuration File
  getIconFromCode(iconCode){
    switch(iconCode){
      case 'chanceflurries':
        return images.snowIcon;
      case 'chancerain':
        return images.hailIcon;
      case 'chancesleet':
        return images.sleetIcon;
      case 'chancesnow':
        return images.snowIcon;
      case 'chancetstorms':
        return images.thunderIcon;
      case 'clear':
        return images.sunriseIcon;
      case 'cloudy':
        return images.cloudIcon;
      case 'flurries':
        return images.snowIcon;
      case 'fog':
        return images.fogIcon;
      case 'hazy':
        return images.fogIcon;
      case 'mostlycloudy':
        return images.cloudAndSunIcon;
      case 'mostlysunny':
        return images.cloudAndSunIcon;
      case 'partlycloudy':
        return images.cloudAndSunIcon;
      case 'partlysunny':
        return images.cloudAndSunIcon;
      case 'sleet':
        return images.sleetIcon;
      case 'rain':
        return images.hailIcon;
      case 'snow':
        return images.snowIcon;
      case 'sunny':
        return images.sunriseIcon;
      case 'tstorms':
        return images.stormIcon;
    }
  }
}
module.exports = ImageLoader;