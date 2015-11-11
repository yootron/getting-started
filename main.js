/* global __dirname */
/*MODULES INCLUDE*/
var app = require('app');
var Menu = require('menu');
var Tray = require('tray');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

//Init the main window
var mainWindow = null;
var trayIcon= null;


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
  
  //DEMO TRAY ICON
  //______________
  
  //DEFINES SINGLE LABEL
  var closeAppLbl=  { label: 'Close application', click:function(){
    app.quit(); 
  }};
  
  //NEW TRAYICON
  trayIcon = new Tray('images/imageTray.png');
  //INIT TRAY ICON MENU
  var contextMenu = Menu.buildFromTemplate([
   closeAppLbl
  ]);


  trayIcon.setToolTip('My app');
  trayIcon.setContextMenu(contextMenu);
});
