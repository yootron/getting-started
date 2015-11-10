/* global $M */
(function () {
  if (typeof $M === 'undefined') {
    $M = {};
  }
  var holder;

  function init() {
    initHolder();
  }




  function initHolder() {
    holder = document.getElementById('holder');

    holder.ondragover = function () {
      return false;
    };

    holder.ondragleave = holder.ondragend = function () {
      return false;
    };

    holder.ondrop = function (e) {
      e.preventDefault();
      var file = e.dataTransfer.files[0];
      console.log('File you dragged here is', file.path);
      return false;
    };
  }

  $M.fileManager = init;
} ());
