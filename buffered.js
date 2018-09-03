var https = require("https");

var buff = [];

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var StringDecoder = require("string_decoder").StringDecoder;
  https.get(requestOptions, function (response){


    response.setEncoding("utf8");

    response.on("data", function(data){
      buff.push(data)
      console.log(buff + "\n");
    });

    response.on("end", function(){
      console.log("Response stream complete.");
    });

  });

}

getAndPrintHTML();