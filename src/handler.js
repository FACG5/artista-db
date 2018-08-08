const fs = require('fs');
const path = require('path');
const url = require('url');
const { getPainting, getPainters } = require('./queries/getData');

// to do delete categories
// handle delete paindgi
// we delete categories from sql build and schema
// the pic need to be small

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
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

function handlePainters(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'painters.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleAddPainting(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'painters.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleError(req, res) {
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.readFile(path.join(__dirname, '..', 'public', 'error.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

const handleQueryCb = (err, data) => (cb) => {
  const obj = {
    err,
    data,
  };
  cb(obj);
};

function handleQuery(req, res) {
  const { query } = url.parse(req.url, true);
  console.log(query);
  /*
  if (query.data === 'painters') {
    getPainting(handleQueryCb(x=>console.log(x)));
  } else if (query.data === 'painter') {
    getPainters(handleQueryCb(obj => res.end(JSON.stringify(obj))));
  } else {
    // change this to json
    res.end('sory we dont have that json');
  }
	*/
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


module.exports = {
  handleHomePage, handlePainters, handleAddPainting, handleError, handleStaticFiles, handleQuery,
};
