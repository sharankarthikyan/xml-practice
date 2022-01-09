function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = '<tr><th>Director</th><th>Movie</th></tr>';
  var x = xmlDoc.getElementsByTagName('movie');
  for (i = 0; i < x.length; i++) {
    table +=
      '<tr><td>' +
      x[i].getElementsByTagName('director')[0].childNodes[0].nodeValue +
      '</td><td>' +
      x[i].getElementsByTagName('movieName')[0].childNodes[0].nodeValue +
      '</td></tr>';
  }
  document.getElementById('demo').innerHTML = table;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open('GET', 'movies.xml', true);
  xhttp.send();
}
