const fs = require('fs');
const path = require('path');

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      console.error(err);
    }
    res.end(data);
  });
}

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

function handelError(req, res) {
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.readFile(path.join(__dirname, '..', 'public', 'error.html'), (err, data) => {
    if (err) {
      console.error(err);
    }
    res.end(data);
  });
}


function handlePainters(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', '', 'index.html'), (err, data) => {
    if (err) {
      console.error(err);
    }
    res.end(data);
  });
}

function handleAddPainting(req, res) {
  fs.readFile(path(''), (err, data) => {
    res.end(data);
  });
}

module.exports = {
  handleHomePage, handlePainters, handleAddPainting, handelError, handleStaticFiles,
};
