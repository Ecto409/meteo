// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
  var xdr = new XMLHttpRequest();

  xdr.onload = function() {
    alert(xdr.responseText);
  }

  xdr.open("GET", "http://api.wunderground.com/api/50a65432f17cf542/forecast10day/q/Belgium/Namur.json");
  xdr.send();
}
