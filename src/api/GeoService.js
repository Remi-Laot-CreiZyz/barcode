import randomLocation from "random-location";

var lon = 0;
var lat = 0;
var updatePosition = function(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(updatePosition);
}

export default {
  getUserLocation() {
    return {
      lon: lon,
      lat: lat
    };
  },
  getRandomLocation() {
    var meters = Math.floor(Math.random() * 500000);
    var tmp = randomLocation.randomCirclePoint(
      { latitude: location.lat, longitude: location.lon },
      meters
    );
    return {
      distance: meters,
      location: {
        lon: tmp.longitude,
        lat: tmp.latitude
      }
    };
  }
};
