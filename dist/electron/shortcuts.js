const { globalShortcut, ipcMain } = require('electron');

function registerShortcuts(mainWindow) {
  globalShortcut.register('Right', () => {
    mainWindow.webContents.send('right-press');
  });

  globalShortcut.register('Left', () => {
    mainWindow.webContents.send('left-press');
  });

  globalShortcut.register('CommandOrControl + Up', () => {
    mainWindow.webContents.send('ctrl-up-press');
  });

  globalShortcut.register('CommandOrControl + Down', () => {
    mainWindow.webContents.send('ctrl-down-press');
  });

  globalShortcut.register('CommandOrControl + F', () => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  });

  globalShortcut.register('CommandOrControl + O', () => {
    ipcMain.emit('open-file', 'shortcut');
  });
}

module.exports = registerShortcuts;
