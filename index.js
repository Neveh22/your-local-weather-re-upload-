getLocation();


function showPosition(position) {
 let lat = []
 let long = []
    lat.push(position.coords.latitude); 
    long.push(position.coords.longitude);
  
   $.ajax({
  type: "GET",
  url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long,
  success: function(info) {
    var sit = info.weather["0"].main;
    switch(sit);
   // info.name
   // info.sys.country
   // info.main.temp
    console.log(sit);
  }
});
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function placeIcon(out) {
  switch(out) {
    case "clear":
      $(".sunny").removeAttr("style");
      break;
      case "snow":
      $(".flurries").removeAttr("style");
      break;
      case "rain":
      $(".rainy").removeAttr("style");
      break;
      case "clouds":
      $(".cloudy").removeAttr("style");
      break;
      case "drizzle":
      $(".sun-shower").removeAttr("style");
      break;
      case "thunderstorm":
      $(".thunder-storm").removeAttr("style");
      break;
  }
}