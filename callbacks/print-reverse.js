var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var arr = "";
  for(var i = html.length; i > 0; i--){
    arr += html[i];
  }
  console.log(arr);
};

getHTML(options, printReverse);