const { app, BrowserWindow, session } = require("electron");

const DEV_URL = "http://localhost:3000";

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1000,
    minHeight: 650,
    title: "AccountantDesk | by Accode",
    backgroundColor: "#F8FAFC",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
    },
  });

  // Block attempts to open additional application windows.
  win.webContents.setWindowOpenHandler(() => ({
    action: "deny",
  }));

  // Prevent navigation outside our development application.
  win.webContents.on("will-navigate", (event, url) => {
    if (new URL(url).origin !== new URL(DEV_URL).origin) {
      event.preventDefault();
    }
  });

  win.loadURL(DEV_URL);
}

app.whenReady().then(() => {
  // Deny permission requests from the desktop application.
  session.defaultSession.setPermissionRequestHandler(
    (_webContents, _permission, callback) => callback(false),
  );

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
