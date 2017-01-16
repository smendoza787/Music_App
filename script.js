var clientID = "4f95b2df65354b3e9505871923b773f2";
var clientSecret = "879c77cf7116410baefca1845b9affd1";

var albumId = '2ODvWsOgouMbaA5xf0RkJe';
var x;

function reqListener () {
  // console.log(this.responseText);
  x = this.responseText

}

var getAlbum = new XMLHttpRequest();
getAlbum.addEventListener("load", reqListener);
getAlbum.open("GET", "https://api.spotify.com/v1/albums?ids=" + albumId);
getAlbum.send(null); // null mabye if this does not work


//var y = JSON.parse(x);
console.log(typeof x);
// var album = x.albums;
//
// function writeAlbum () {
//   document.write(album);
// }
//
// writeAlbum();
