const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;
let newProductWindow;




app.on('ready', () => {

  // Esto es lo que pasa en la ventana principal owo
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    icon: __dirname + ("/views/icon.ico"),
    width: 1080, height: 720});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'views/index.html'),
    protocol: 'file',
    slashes: true
  }))

  // Menu principal (Iframe)
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);

  // Si cierro la ventana sale al escritorio y se finaliza la tarea
  mainWindow.on('closed', () => {
    app.quit();
  });

});






// Esto viene siendo el menú en plantilla, que no se usa, electron, QUITA ESAS COSAS QUE NADIE LAS USA
const templateMenu = [
 //null
];

// Esto son cositas de mac (Ese sistema operativo es uhhh)
if (process.platform === 'darwin') {
  templateMenu.unshift({
    label: app.getName(),
  });
};

// Dev tools sin el ENV Prod
if (process.env.NODE_ENV !== 'production') {
//null
}
