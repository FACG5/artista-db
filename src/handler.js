const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const getPainters = require('./queries/getPainters.js');
const postPainting = require('./queries/postPainting.js');

function serverError(req, res) {
  res.writeHead(500, 'content-type:text/html');
  res.end('<h1>internal server error</h1>');
}

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      serverError(req, res);
    }
    res.writeHead(200, { 'content-type': 'text/html' });
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
      res.end(err.message);
    } else {
      res.end(file);
    }
  });
}

function handelNotFoundPage(req, res) {
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.readFile(path.join(__dirname, '..', 'public', 'error404.html'), (err, data) => {
    if (err) {
      res.end(err.message);
    }
    res.end(data);
  });
}


function handlePainters(req, res) {
  // fs.readFile(path.join(__dirname, '..', 'public', '', 'index.html'), (err, data) => {
  //   if (err) {
  //     res.end(err.message);
  //   }
  //   res.end(data);
  // });
  getPainters((err, response) => {
    if (err) {
      serverError(req, res);
    } else {
      const result = JSON.stringify(response);
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(result);
    }
  });
}

function handleAddPainting(req, res) {
  // let data = '';
  // req.on('data', function (chunk){
  //   data += cheunk;
  // });
  // req.on('end', () => {
  //   const paint_name = queryString.parse(data).paint_name;
  //   const paint_description = queryString.parse(data).paint_description;
  //   const img_url = queryString.parse(data).img_url;
  //   postPainting(paint_name, paint_description, img_url, (err, res)) => {
  //     if (err) {
  //       serverError(req, res);
  //     }
  //   }
  // });
  
}


module.exports = {
  handleHomePage,
  handlePainters,
  handleAddPainting,
  handelNotFoundPage,
  handleStaticFiles,
  serverError,
};
