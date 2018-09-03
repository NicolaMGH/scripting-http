var https = require("https");

var buff = [];



function getHTML (options, callback) {
  /* Add your code here */



  https.get(options, function (response){


    response.setEncoding("utf8");

    response.on("data", function(data){
      buff.push(data);
      //console.log(buff + "\n");
    });

    response.on("end", function(){
      callback(buff + "\n");
      console.log("Response stream complete.");
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(options, printHTML);