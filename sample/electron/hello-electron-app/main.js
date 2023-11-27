const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  // 适配macos
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        console.log("窗口激活");
        createWindow();
    }
  })
})

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        console.log("窗口关闭...");
        app.quit()
    }
})