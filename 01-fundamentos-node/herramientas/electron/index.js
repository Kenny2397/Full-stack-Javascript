const { app, BrowserWindow } = require('electron')

let mainWindow
app.on('ready', createWindow)

function createWindow(){
  mainWindow = new BrowserWindow({
    height: 800,
    width: 600,
  })
  mainWindow.loadFile('index.html')
}

