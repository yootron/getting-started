/* global __dirname */
/*MODULES INCLUDE*/
var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

//Init the main window
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit();
});

//The app is ready to render window
app.on('ready', function () {
  // Init the browser window
  mainWindow = new BrowserWindow({ width: 1024, height: 600 });
  // the browser window refers index.html
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  // Open the Dev console
  mainWindow.openDevTools();
  // on window close, the mainWindow is null
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
