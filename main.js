const { app, BrowserWindow } = require('electron'); 

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 650,  
    height:800,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
    },
  });
  mainWindow.loadFile('index.html'); 
}

app.whenReady().then(createWindow); 

// Cierra la app si todas las ventanas se cierran (excepto en macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // 'darwin' = macOS
    app.quit();
  }
});

// En macOS, vuelve a abrir la ventana si la app se reactiva
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});