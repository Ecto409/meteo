// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
ajaxGet("https://api.wunderground.com/api/50a65432f17cf542/forecast10day/q/Belgium/Namur.json", function(reponse) {
  var meteo = JSON.parse(reponse);
  // Récupération de certains résultats
  var jour0Weekday = meteo.forecast.simpleforecast.forecastday[0].date.weekday;
  var jour0Monthname = meteo.forecast.simpleforecast.forecastday[0].date.monthname;
  var jour0Day = meteo.forecast.simpleforecast.forecastday[0].date.day;
  var jour0Conditions = meteo.forecast.simpleforecast.forecastday[0].conditions;
  var jour0Temperature = meteo.forecast.simpleforecast.forecastday[0].high.celsius;
  var jour0TemperatureLow = meteo.forecast.simpleforecast.forecastday[0].low.celsius;
  var jour0Humidite = meteo.forecast.simpleforecast.forecastday[0].avehumidity;
  var jour0Vent = meteo.forecast.simpleforecast.forecastday[0].avewind.kph;


  var jour1Weekday = meteo.forecast.simpleforecast.forecastday[1].date.weekday;
  var jour1Monthname = meteo.forecast.simpleforecast.forecastday[1].date.monthname;
  var jour1Day = meteo.forecast.simpleforecast.forecastday[1].date.day;
  var jour1Conditions = meteo.forecast.simpleforecast.forecastday[1].conditions;
  var jour1Temperature = meteo.forecast.simpleforecast.forecastday[1].high.celsius;
  var jour1TemperatureLow = meteo.forecast.simpleforecast.forecastday[1].low.celsius;
  var jour1Humidite = meteo.forecast.simpleforecast.forecastday[1].avehumidity;
  var jour1Vent = meteo.forecast.simpleforecast.forecastday[1].avewind.kph;

  var jour2Weekday = meteo.forecast.simpleforecast.forecastday[2].date.weekday;
  var jour2Monthname = meteo.forecast.simpleforecast.forecastday[2].date.monthname;
  var jour2Day = meteo.forecast.simpleforecast.forecastday[2].date.day;
  var jour2Conditions = meteo.forecast.simpleforecast.forecastday[2].conditions;
  var jour2Temperature = meteo.forecast.simpleforecast.forecastday[2].high.celsius;
  var jour2TemperatureLow = meteo.forecast.simpleforecast.forecastday[2].low.celsius;
  var jour2Humidite = meteo.forecast.simpleforecast.forecastday[2].avehumidity;
  var jour2Vent = meteo.forecast.simpleforecast.forecastday[2].avewind.kph;

  var jour3Weekday = meteo.forecast.simpleforecast.forecastday[3].date.weekday;
  var jour3Monthname = meteo.forecast.simpleforecast.forecastday[3].date.monthname;
  var jour3Day = meteo.forecast.simpleforecast.forecastday[3].date.day;
  var jour3Conditions = meteo.forecast.simpleforecast.forecastday[3].conditions;
  var jour3Temperature = meteo.forecast.simpleforecast.forecastday[3].high.celsius;
  var jour3TemperatureLow = meteo.forecast.simpleforecast.forecastday[3].low.celsius;
  var jour3Humidite = meteo.forecast.simpleforecast.forecastday[3].avehumidity;
  var jour3Vent = meteo.forecast.simpleforecast.forecastday[3].avewind.kph;

  var jour4Weekday = meteo.forecast.simpleforecast.forecastday[4].date.weekday;
  var jour4Monthname = meteo.forecast.simpleforecast.forecastday[4].date.monthname;
  var jour4Day = meteo.forecast.simpleforecast.forecastday[4].date.day;
  var jour4Conditions = meteo.forecast.simpleforecast.forecastday[4].conditions;
  var jour4Temperature = meteo.forecast.simpleforecast.forecastday[4].high.celsius;
  var jour4TemperatureLow = meteo.forecast.simpleforecast.forecastday[4].low.celsius;
  var jour4Humidite = meteo.forecast.simpleforecast.forecastday[4].avehumidity;
  var jour4Vent = meteo.forecast.simpleforecast.forecastday[4].avewind.kph;

  var jour5Weekday = meteo.forecast.simpleforecast.forecastday[5].date.weekday;
  var jour5Monthname = meteo.forecast.simpleforecast.forecastday[5].date.monthname;
  var jour5Day = meteo.forecast.simpleforecast.forecastday[5].date.day;
  var jour5Conditions = meteo.forecast.simpleforecast.forecastday[5].conditions;
  var jour5Temperature = meteo.forecast.simpleforecast.forecastday[5].high.celsius;
  var jour5TemperatureLow = meteo.forecast.simpleforecast.forecastday[5].low.celsius;
  var jour5Humidite = meteo.forecast.simpleforecast.forecastday[5].avehumidity;
  var jour5Vent = meteo.forecast.simpleforecast.forecastday[5].avewind.kph;

  var jour6Weekday = meteo.forecast.simpleforecast.forecastday[6].date.weekday;
  var jour6Monthname = meteo.forecast.simpleforecast.forecastday[6].date.monthname;
  var jour6Day = meteo.forecast.simpleforecast.forecastday[6].date.day;
  var jour6Conditions = meteo.forecast.simpleforecast.forecastday[6].conditions;
  var jour6Temperature = meteo.forecast.simpleforecast.forecastday[6].high.celsius;
  var jour6TemperatureLow = meteo.forecast.simpleforecast.forecastday[6].low.celsius;
  var jour6Humidite = meteo.forecast.simpleforecast.forecastday[6].avehumidity;
  var jour6Vent = meteo.forecast.simpleforecast.forecastday[6].avewind.kph;

  // Affichage des résultats
  var conditionsElt = document.getElementById('jour0');
  conditionsElt.textContent = jour0Weekday + ", " + jour0Monthname + " " + jour0Day;
  var conditionsElt = document.getElementById('jour0Conditions');
  conditionsElt.textContent = jour0Conditions;
  var conditionsElt = document.getElementById('jour0Temperature');
  conditionsElt.textContent = jour0TemperatureLow + "/" + jour0Temperature + "°";
  var conditionsElt = document.getElementById('jour0Humidite');
  conditionsElt.textContent = jour0Humidite + "%";
  var conditionsElt = document.getElementById('jour0Vent');
  conditionsElt.textContent = jour0Vent + "Kh";
  if (jour0Conditions == "Chance of Rain") {
    document.getElementById('jour0Image').src = "img/rainy.gif";
  } else if (jour0Conditions == "Rain") {
    document.getElementById('jour0Image').src = "img/rainy.gif";
  } else if (jour0Conditions == "Sunny") {
    document.getElementById('jour0Image').src = "img/sunny.gif";
  } else if (jour0Conditions == "Mostly Cloudy") {
    document.getElementById('jour0Image').src = "img/mostlycloudy.gif";
  } else if (jour0Conditions == "Clear") {
    document.getElementById('jour0Image').src = "img/sunny.gif";
  } else if (jour0Conditions == "Overcast") {
    document.getElementById('jour0Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour0Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour1');
  conditionsElt.textContent = jour1Weekday + ", " + jour1Monthname + " " + jour1Day;
  var conditionsElt = document.getElementById('jour1Conditions');
  conditionsElt.textContent = jour1Conditions;
  var conditionsElt = document.getElementById('jour1Temperature');
  conditionsElt.textContent = jour1TemperatureLow + "/" + jour1Temperature + "°";
  var conditionsElt = document.getElementById('jour1Humidite');
  conditionsElt.textContent = jour1Humidite + "%";
  var conditionsElt = document.getElementById('jour1Vent');
  conditionsElt.textContent = jour1Vent + "Kh";
  if (jour1Conditions == "Chance of Rain") {
    document.getElementById('jour1Image').src = "img/rainy.gif";
  } else if (jour1Conditions == "Rain") {
    document.getElementById('jour1Image').src = "img/rainy.gif";
  } else if (jour1Conditions == "Sunny") {
    document.getElementById('jour1Image').src = "img/sunny.gif";
  } else if (jour1Conditions == "Mostly Cloudy") {
    document.getElementById('jour1Image').src = "img/mostlycloudy.gif";
  } else if (jour1Conditions == "Clear") {
    document.getElementById('jour1Image').src = "img/sunny.gif";
  } else if (jour1Conditions == "Overcast") {
    document.getElementById('jour1Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour1Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour2');
  conditionsElt.textContent = jour2Weekday + ", " + jour2Monthname + " " + jour2Day;
  var conditionsElt = document.getElementById('jour2Conditions');
  conditionsElt.textContent = jour2Conditions;
  var conditionsElt = document.getElementById('jour2Temperature');
  conditionsElt.textContent = jour2TemperatureLow + "/" + jour2Temperature + "°";
  var conditionsElt = document.getElementById('jour2Humidite');
  conditionsElt.textContent = jour2Humidite + "%";
  var conditionsElt = document.getElementById('jour2Vent');
  conditionsElt.textContent = jour2Vent + "Kh";
  if (jour2Conditions == "Chance of Rain") {
    document.getElementById('jour2Image').src = "img/rainy.gif";
  } else if (jour2Conditions == "Rain") {
    document.getElementById('jour2Image').src = "img/rainy.gif";
  } else if (jour2Conditions == "Sunny") {
    document.getElementById('jour2Image').src = "img/sunny.gif";
  } else if (jour2Conditions == "Mostly Cloudy") {
    document.getElementById('jour2Image').src = "img/mostlycloudy.gif";
  } else if (jour2Conditions == "Clear") {
    document.getElementById('jour2Image').src = "img/sunny.gif";
  } else if (jour2Conditions == "Overcast") {
    document.getElementById('jour2Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour2Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour3');
  conditionsElt.textContent = jour3Weekday + ", " + jour3Monthname + " " + jour3Day;
  var conditionsElt = document.getElementById('jour3Conditions');
  conditionsElt.textContent = jour3Conditions;
  var conditionsElt = document.getElementById('jour3Temperature');
  conditionsElt.textContent = jour3TemperatureLow + "/" + jour3Temperature + "°";
  var conditionsElt = document.getElementById('jour3Humidite');
  conditionsElt.textContent = jour3Humidite + "%";
  var conditionsElt = document.getElementById('jour3Vent');
  conditionsElt.textContent = jour3Vent + "Kh";
  if (jour3Conditions == "Chance of Rain") {
    document.getElementById('jour3Image').src = "img/rainy.gif";
  } else if (jour3Conditions == "Rain") {
    document.getElementById('jour3Image').src = "img/rainy.gif";
  } else if (jour3Conditions == "Sunny") {
    document.getElementById('jour3Image').src = "img/sunny.gif";
  } else if (jour3Conditions == "Mostly Cloudy") {
    document.getElementById('jour3Image').src = "img/mostlycloudy.gif";
  } else if (jour3Conditions == "Clear") {
    document.getElementById('jour3Image').src = "img/sunny.gif";
  } else if (jour3Conditions == "Overcast") {
    document.getElementById('jour3Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour3Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour4');
  conditionsElt.textContent = jour4Weekday + ", " + jour4Monthname + " " + jour4Day;
  var conditionsElt = document.getElementById('jour4Conditions');
  conditionsElt.textContent = jour4Conditions;
  var conditionsElt = document.getElementById('jour4Temperature');
  conditionsElt.textContent = jour4TemperatureLow + "/" + jour4Temperature + "°";
  var conditionsElt = document.getElementById('jour4Humidite');
  conditionsElt.textContent = jour4Humidite + "%";
  var conditionsElt = document.getElementById('jour4Vent');
  conditionsElt.textContent = jour4Vent + "Kh";
  if (jour4Conditions == "Chance of Rain") {
    document.getElementById('jour4Image').src = "img/rainy.gif";
  } else if (jour4Conditions == "Rain") {
    document.getElementById('jour4Image').src = "img/rainy.gif";
  } else if (jour4Conditions == "Sunny") {
    document.getElementById('jour4Image').src = "img/sunny.gif";
  } else if (jour4Conditions == "Mostly Cloudy") {
    document.getElementById('jour4Image').src = "img/mostlycloudy.gif";
  } else if (jour4Conditions == "Clear") {
    document.getElementById('jour4Image').src = "img/sunny.gif";
  } else if (jour4Conditions == "Overcast") {
    document.getElementById('jour4Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour4Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour5');
  conditionsElt.textContent = jour5Weekday + ", " + jour5Monthname + " " + jour5Day;
  var conditionsElt = document.getElementById('jour5Conditions');
  conditionsElt.textContent = jour5Conditions;
  var conditionsElt = document.getElementById('jour5Temperature');
  conditionsElt.textContent = jour5TemperatureLow + "/" + jour5Temperature + "°";
  var conditionsElt = document.getElementById('jour5Humidite');
  conditionsElt.textContent = jour5Humidite + "%";
  var conditionsElt = document.getElementById('jour5Vent');
  conditionsElt.textContent = jour5Vent + "Kh";
  if (jour5Conditions == "Chance of Rain") {
    document.getElementById('jour5Image').src = "img/rainy.gif";
  } else if (jour5Conditions == "Rain") {
    document.getElementById('jour5Image').src = "img/rainy.gif";
  } else if (jour5Conditions == "Sunny") {
    document.getElementById('jour5Image').src = "img/sunny.gif";
  } else if (jour5Conditions == "Mostly Cloudy") {
    document.getElementById('jour5Image').src = "img/mostlycloudy.gif";
  } else if (jour5Conditions == "Clear") {
    document.getElementById('jour5Image').src = "img/sunny.gif";
  } else if (jour5Conditions == "Overcast") {
    document.getElementById('jour5Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour5Image').src = "img/cloudy.gif";
  };

  var conditionsElt = document.getElementById('jour6');
  conditionsElt.textContent = jour6Weekday + ", " + jour6Monthname + " " + jour6Day;
  var conditionsElt = document.getElementById('jour6Conditions');
  conditionsElt.textContent = jour6Conditions;
  var conditionsElt = document.getElementById('jour6Temperature');
  conditionsElt.textContent = jour6TemperatureLow + "/" + jour6Temperature + "°";
  var conditionsElt = document.getElementById('jour6Humidite');
  conditionsElt.textContent = jour6Humidite + "%";
  var conditionsElt = document.getElementById('jour6Vent');
  conditionsElt.textContent = jour6Vent + "Kh";
  if (jour6Conditions == "Chance of Rain") {
    document.getElementById('jour6Image').src = "img/rainy.gif";
  } else if (jour6Conditions == "Rain") {
    document.getElementById('jour6Image').src = "img/rainy.gif";
  } else if (jour6Conditions == "Sunny") {
    document.getElementById('jour6Image').src = "img/sunny.gif";
  } else if (jour6Conditions == "Mostly Cloudy") {
    document.getElementById('jour6Image').src = "img/mostlycloudy.gif";
  } else if (jour6Conditions == "Clear") {
    document.getElementById('jour6Image').src = "img/sunny.gif";
  } else if (jour6Conditions == "Overcast") {
    document.getElementById('jour6Image').src = "img/mostlycloudy.gif";
  } else {
    document.getElementById('jour6Image').src = "img/cloudy.gif";
  };


});

// var meteoElt = document.getElementById("meteo");
// meteoElt.appendChild(conditionsElt);
