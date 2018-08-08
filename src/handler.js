const fs = require('fs');
const path = require('path');
const url = require('url');
const queryString = require('querystring');

const { getPainting, getPainters } = require('./queries/getData');
const addPaintings = require('./queries/addData');
const deleteData = require('./queries/deleteData');

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
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
    jpeg: 'image/jpeg',
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

function handlePainters(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'painters.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleAddPainting(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'adding.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleAdd(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const obj = queryString.parse(data);
    console.log(obj);
    res.writeHead(302, { Location: '/' });
    // console.log(result);
    addPaintings(obj, (err, resDatabase) => {
      if (err) {
        res.writeHead(200, { Location: '/handleAddPainting' });
        res.end();
      }
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  });
}

function handlePageNotFound(req, res) {
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.readFile(path.join(__dirname, '..', 'public', 'error404.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleQuery(req, res) {
  const { query } = url.parse(req.url, true);
  if (query.data === 'painters') {
    getPainters((err, data) => {
      const obj = {
        err,
        data,
      };
      res.end(JSON.stringify(obj));
    });
  } else if (query.data === 'painting') {
    getPainting((err, data) => {
      const obj = {
        err,
        data,
      };
      res.end(JSON.stringify(obj));
    });
  } else if (Object.keys(query).length === 0) {
    const obj = {
      key: 'data',
      value: ['painting', 'painters'],
    };
    res.end(JSON.stringify(obj));
  } else {
    // change this to json
    res.end('sory we dont have that json');
  }
}

function handleDelete(req, res) {
  const id = req.url.split('?')[1];
  deleteData(id, (err, result) => {
    res.end('err');
  });
  res.end('done');
}

module.exports = {
  handleDelete,
  handleHomePage,
  handlePainters,
  handleAddPainting,
  handlePageNotFound,
  handleStaticFiles,
  handleQuery,
  handleAdd,
};
