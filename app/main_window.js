const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: { backgroundThrottling: false }
    });

    this.loadURL(url);
    this.on('blur', this.onUnfocus.bind(this));
  }

  onUnfocus() {
    this.hide();
  }
}

module.exports = MainWindow;
