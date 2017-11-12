$.ajaxSetup({
  scriptCharset: "utf-8", //or "ISO-8859-1"
  contentType: "application/json; charset=utf-8"
});

function ggetJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://api.wunderground.com/api/50a65432f17cf542/forecast10day/q/Belgium/Namur.json') + '&callback=?', function(data) {
  alert(data.contents);
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
