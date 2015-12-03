//modules inclusion
require('./scripts/infoLog');
require('./scripts/fileManager');
require('./scripts/dialogManager');

var $ = require('jquery');

var fs = require('fs');

//On load
// window.onload = function () {
$(function () {
  // $M.infoLog();
  // $M.fileManager();
  // $M.dialogManager();

  var API_URL = "http://api.yoox.biz/Item.API/1.0/MOSCHINO_IT/item/##c8##.json";

  function getApiUrl(c8) {

   return API_URL.replace('##c8##', c8);
  }

  $('#submit').click(function () {

    var c8 = $('#c8Fld').val();

    $.getJSON(getApiUrl(c8)).success(function (data) {

      console.log(data);

    });

  });



  // //DEMO FILE READER
  // fs.readFile('demo-file', 'utf8', function(err,data) {
  //   console.log(data);
  // });
});
