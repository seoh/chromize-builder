var gui = global.window.nwDispatcher.requireNwGui();
gui.App.registerGlobalHotKey(new gui.Shortcut({
  key : "Ctrl+Q",
  active: function() {
  	window.close();
  }
}));