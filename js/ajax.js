// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
$.ajaxSetup({
  scriptCharset: "utf-8", //or "ISO-8859-1"
  contentType: "application/json; charset=utf-8"
});

$.getJSON('http://whateverorigin.org/get?url=' +
  encodeURIComponent('http://api.wunderground.com') + '&callback=?',
  function(data) {
    console.log("> ", data);

    //If the expected response is text/plain
    $("#viewer").html(data.contents);

    //If the expected response is JSON
    //var response = $.parseJSON(data.contents);
  });

function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function() {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}
