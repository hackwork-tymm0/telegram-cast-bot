const request = require("request");
var list = null;

module.exports.scan = function () {
    
    request("http://localhost/getFiles.php", function (error, response, body) {

        list = JSON.parse(body);

    });
    
};

module.exports.list = function () {
    
    return list;
    
}