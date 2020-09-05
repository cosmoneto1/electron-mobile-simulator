const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 1080,
    minWidth: 680,
    height: 880,
    webPreferences: {
      webviewTag: true,
      webSecurity: false,
      nodeIntegration: true,
    },
  });

  // e carrega o arquivo index.html do seu aplicativo.
  win.loadURL(path.join("file://", __dirname, "/index.html"));

  // Abrir o DevTools (aba de ferramentas para desenvolvedores).
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
