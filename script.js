// example: http://jsfiddle.net/JMPerez/0u0v7e1b/

var clientID = "4f95b2df65354b3e9505871923b773f2";
var clientSecret = "879c77cf7116410baefca1845b9affd1";

var albumId = '2ODvWsOgouMbaA5xf0RkJe';

// set up an obect
var test = new XMLHttpRequest();
// set a GET request
test.open('GET', 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');
// send the GET request
test.send()
// set a variable to the responseText and turn it into an Object
function log() {
  console.log(test.response);
}
log();
// var testObj = test.response;
// testObj = JSON.parse(test.response);
