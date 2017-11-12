// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
getJSON("http://api.wunderground.com/api/50a65432f17cf542/forecast10day/q/Belgium/Namur.json", function(reponse) {
  var meteo = JSON.parse(reponse);
  // Récupération de certains résultats
  var jour0Weekday = meteo.forecast.simpleforecast.forecastday[0].date.weekday;
  var jour0Monthname = meteo.forecast.simpleforecast.forecastday[0].date.monthname;
  var jour0Day = meteo.forecast.simpleforecast.forecastday[0].date.day;
  var jour0Conditions = meteo.forecast.simpleforecast.forecastday[0].conditions;
  var jour0Temperature = meteo.forecast.simpleforecast.forecastday[0].high.celsius;
  var jour0Humidite = meteo.forecast.simpleforecast.forecastday[0].avehumidity;
  var jour0Vent = meteo.forecast.simpleforecast.forecastday[0].avewind.kph;


  var jour1Weekday = meteo.forecast.simpleforecast.forecastday[1].date.weekday;
  var jour1Monthname = meteo.forecast.simpleforecast.forecastday[1].date.monthname;
  var jour1Day = meteo.forecast.simpleforecast.forecastday[1].date.day;
  var jour1Conditions = meteo.forecast.simpleforecast.forecastday[1].conditions;
  var jour1Temperature = meteo.forecast.simpleforecast.forecastday[1].high.celsius;
  var jour1Humidite = meteo.forecast.simpleforecast.forecastday[1].avehumidity;
  var jour1Vent = meteo.forecast.simpleforecast.forecastday[1].avewind.kph;

  var jour2Weekday = meteo.forecast.simpleforecast.forecastday[2].date.weekday;
  var jour2Monthname = meteo.forecast.simpleforecast.forecastday[2].date.monthname;
  var jour2Day = meteo.forecast.simpleforecast.forecastday[2].date.day;
  var jour2Conditions = meteo.forecast.simpleforecast.forecastday[2].conditions;
  var jour2Temperature = meteo.forecast.simpleforecast.forecastday[2].high.celsius;
  var jour2Humidite = meteo.forecast.simpleforecast.forecastday[2].avehumidity;
  var jour2Vent = meteo.forecast.simpleforecast.forecastday[2].avewind.kph;

  var jour3Weekday = meteo.forecast.simpleforecast.forecastday[3].date.weekday;
  var jour3Monthname = meteo.forecast.simpleforecast.forecastday[3].date.monthname;
  var jour3Day = meteo.forecast.simpleforecast.forecastday[3].date.day;
  var jour3Conditions = meteo.forecast.simpleforecast.forecastday[3].conditions;
  var jour3Temperature = meteo.forecast.simpleforecast.forecastday[3].high.celsius;
  var jour3Humidite = meteo.forecast.simpleforecast.forecastday[3].avehumidity;
  var jour3Vent = meteo.forecast.simpleforecast.forecastday[3].avewind.kph;

  var jour4Weekday = meteo.forecast.simpleforecast.forecastday[4].date.weekday;
  var jour4Monthname = meteo.forecast.simpleforecast.forecastday[4].date.monthname;
  var jour4Day = meteo.forecast.simpleforecast.forecastday[4].date.day;
  var jour4Conditions = meteo.forecast.simpleforecast.forecastday[4].conditions;
  var jour4Temperature = meteo.forecast.simpleforecast.forecastday[4].high.celsius;
  var jour4Humidite = meteo.forecast.simpleforecast.forecastday[4].avehumidity;
  var jour4Vent = meteo.forecast.simpleforecast.forecastday[4].avewind.kph;

  var jour5Weekday = meteo.forecast.simpleforecast.forecastday[5].date.weekday;
  var jour5Monthname = meteo.forecast.simpleforecast.forecastday[5].date.monthname;
  var jour5Day = meteo.forecast.simpleforecast.forecastday[5].date.day;
  var jour5Conditions = meteo.forecast.simpleforecast.forecastday[5].conditions;
  var jour5Temperature = meteo.forecast.simpleforecast.forecastday[5].high.celsius;
  var jour5Humidite = meteo.forecast.simpleforecast.forecastday[5].avehumidity;
  var jour5Vent = meteo.forecast.simpleforecast.forecastday[5].avewind.kph;

  var jour6Weekday = meteo.forecast.simpleforecast.forecastday[6].date.weekday;
  var jour6Monthname = meteo.forecast.simpleforecast.forecastday[6].date.monthname;
  var jour6Day = meteo.forecast.simpleforecast.forecastday[6].date.day;
  var jour6Conditions = meteo.forecast.simpleforecast.forecastday[6].conditions;
  var jour6Temperature = meteo.forecast.simpleforecast.forecastday[6].high.celsius;
  var jour6Humidite = meteo.forecast.simpleforecast.forecastday[6].avehumidity;
  var jour6Vent = meteo.forecast.simpleforecast.forecastday[6].avewind.kph;

  // Affichage des résultats
  var conditionsElt = document.getElementById('jour0');
  conditionsElt.textContent = jour0Weekday + ", " + jour0Monthname + " " + jour0Day;
  var conditionsElt = document.getElementById('jour0Conditions');
  conditionsElt.textContent = jour0Conditions;
  var conditionsElt = document.getElementById('jour0Temperature');
  conditionsElt.textContent = jour0Temperature + "°";
  var conditionsElt = document.getElementById('jour0Humidite');
  conditionsElt.textContent = jour0Humidite + "%";
  var conditionsElt = document.getElementById('jour0Vent');
  conditionsElt.textContent = jour0Vent + "k/h";

  var conditionsElt = document.getElementById('jour1');
  conditionsElt.textContent = jour1Weekday + ", " + jour1Monthname + " " + jour1Day;
  var conditionsElt = document.getElementById('jour1Conditions');
  conditionsElt.textContent = jour1Conditions;
  var conditionsElt = document.getElementById('jour1Temperature');
  conditionsElt.textContent = jour1Temperature + "°";
  var conditionsElt = document.getElementById('jour1Humidite');
  conditionsElt.textContent = jour1Humidite + "%";
  var conditionsElt = document.getElementById('jour1Vent');
  conditionsElt.textContent = jour1Vent + "k/h";

  var conditionsElt = document.getElementById('jour2');
  conditionsElt.textContent = jour2Weekday + ", " + jour2Monthname + " " + jour2Day;
  var conditionsElt = document.getElementById('jour2Conditions');
  conditionsElt.textContent = jour2Conditions;
  var conditionsElt = document.getElementById('jour2Temperature');
  conditionsElt.textContent = jour2Temperature + "°";
  var conditionsElt = document.getElementById('jour2Humidite');
  conditionsElt.textContent = jour2Humidite + "%";
  var conditionsElt = document.getElementById('jour2Vent');
  conditionsElt.textContent = jour2Vent + "k/h";

  var conditionsElt = document.getElementById('jour3');
  conditionsElt.textContent = jour3Weekday + ", " + jour3Monthname + " " + jour3Day;
  var conditionsElt = document.getElementById('jour3Conditions');
  conditionsElt.textContent = jour3Conditions;
  var conditionsElt = document.getElementById('jour3Temperature');
  conditionsElt.textContent = jour3Temperature + "°";
  var conditionsElt = document.getElementById('jour3Humidite');
  conditionsElt.textContent = jour3Humidite + "%";
  var conditionsElt = document.getElementById('jour3Vent');
  conditionsElt.textContent = jour3Vent + "k/h";

  var conditionsElt = document.getElementById('jour4');
  conditionsElt.textContent = jour4Weekday + ", " + jour4Monthname + " " + jour4Day;
  var conditionsElt = document.getElementById('jour4Conditions');
  conditionsElt.textContent = jour4Conditions;
  var conditionsElt = document.getElementById('jour4Temperature');
  conditionsElt.textContent = jour4Temperature + "°";
  var conditionsElt = document.getElementById('jour4Humidite');
  conditionsElt.textContent = jour4Humidite + "%";
  var conditionsElt = document.getElementById('jour4Vent');
  conditionsElt.textContent = jour4Vent + "k/h";

  var conditionsElt = document.getElementById('jour5');
  conditionsElt.textContent = jour5Weekday + ", " + jour5Monthname + " " + jour5Day;
  var conditionsElt = document.getElementById('jour5Conditions');
  conditionsElt.textContent = jour5Conditions;
  var conditionsElt = document.getElementById('jour5Temperature');
  conditionsElt.textContent = jour5Temperature + "°";
  var conditionsElt = document.getElementById('jour5Humidite');
  conditionsElt.textContent = jour5Humidite + "%";
  var conditionsElt = document.getElementById('jour5Vent');
  conditionsElt.textContent = jour5Vent + "k/h";

  var conditionsElt = document.getElementById('jour6');
  conditionsElt.textContent = jour6Weekday + ", " + jour6Monthname + " " + jour6Day;
  var conditionsElt = document.getElementById('jour6Conditions');
  conditionsElt.textContent = jour6Conditions;
  var conditionsElt = document.getElementById('jour6Temperature');
  conditionsElt.textContent = jour6Temperature + "°";
  var conditionsElt = document.getElementById('jour6Humidite');
  conditionsElt.textContent = jour6Humidite + "%";
  var conditionsElt = document.getElementById('jour6Vent');
  conditionsElt.textContent = jour6Vent + "k/h";







});

// var meteoElt = document.getElementById("meteo");
// meteoElt.appendChild(conditionsElt);
