(function () {
  if (typeof $M === 'undefined') {
    $M = {};
  }

  function init() {
    console.log(getNodeVer());
    console.log(getElectroVer());
  }

  function getNodeVer() {
    return "Node JS Ver:" + process.version;
  }

  function getElectroVer() {
    return "Electro Ver:" + process.versions['electron'];
  }

  $M.infoLog = init;
} ());
