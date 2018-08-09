const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

const { getPainting, getPainters } = require('./queries/getData');
const addPaintings = require('./queries/addData');
const deleteData = require('./queries/deleteData');

function handlePageNotFound(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'error404.html'), (err, data) => {
    res.writeHead(404, { 'content-type': 'text/html' });
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

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
  const type = contentType[extention];
  if (!type) {
    handlePageNotFound(req, res);
    return;
  }
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
    addPaintings(obj, (err) => {
      if (err) {
        res.writeHead(200, { Location: '/handleAddPainting' });
        res.end();
      }
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  });
}

function handleQuery(req, res) {
  const query = queryString.parse(req.url.split('?')[1]);
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
  } else {
    const obj = {
      key: 'data',
      value: ['painting', 'painters'],
    };
    res.end(JSON.stringify(obj));
  }
}

function handleDelete(req, res) {
  const id = req.url.split('?')[1];
  deleteData(id, () => {
    res.end();
  });
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
