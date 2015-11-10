//modules inclusion
require('./scripts/infoLog');
require('./scripts/fileManager');
require('./scripts/dialogManager');
var fs = require('fs');

//On load
window.onload = function () {
  $M.infoLog();
  $M.fileManager();
  $M.dialogManager();
  
  
  //DEMO FILE READER
  fs.readFile('demo-file', 'utf8', function(err,data) {
    console.log(data);
  });
}
