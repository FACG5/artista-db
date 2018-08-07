const fs = require('fs');
const path = require('path');


function handleStaticFiles(req, res) {
  const endponit = req.url;
  const extention = endponit.split('.')[1];
  const contentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpg',
    png: 'image/png',
    gif: 'image/gif',
  };
  res.writeHead(200, {
    'content-type': contentType[extention],
  });
  fs.readFile(path.join(__dirname, '..', endponit), (err, file) => {
    if (err) {
      console.error(err);
    } else {
      res.end(file);
    }
  });
}


function handelError(res) {
  res.writeHead(404, { 'content-type': 'text/html' });
  res.end('<h1>404</h1>');
}

module.exports = {
  handelError, handleStaticFiles,
};
