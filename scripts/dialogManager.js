/* global $M */
(function () {
  if (typeof $M === 'undefined') {
    $M = {};
  }
  var openBtn;
  //In rendering process, serve il modulo remote per accedere ai moduli di electron
  var dialog = require('remote').require('dialog');
  
  function init() {
    openBtn = document.getElementById("openBtn");
    openBtn.addEventListener('click', function(){
      
      showInfoBox("Test", "Hi, sem!");
    });
  }
  
  function showInfoBox(title, message){
      
      var options= { type: "info", 
                     buttons:["Ok"],
	                   title: title, 
	                   message:message};
      
	    dialog.showMessageBox(options);
  }

  $M.dialogManager = init;
} ());
