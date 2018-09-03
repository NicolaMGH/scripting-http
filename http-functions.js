var https = require("https");

var buff = [];

module.exports = function getHTML (options, callback){

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