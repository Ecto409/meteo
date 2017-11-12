// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
$.ajaxGet({
  url: "testserver.php",
  dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
  success: function(json) {
    // do stuff with json (in this case an array)
    alert("Success");
  },
  error: function() {
    alert("Error");
  }
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
