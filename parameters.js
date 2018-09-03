var https = require("https");

var buff = [];



function getAndPrintHTML (options) {
  /* Add your code here */



  https.get(options, function (response){


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

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(options);