const fs = require('fs');
const path = require('path');

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {

    }
    res.end(data);
  });
}

function handlePainters(req, res) {
  fs.readFile(path.join(__dirname, '..', 'html', 'painters', 'painters.html'), (err, data) => {
    if (err) {
			
		}
    res.end(data);
  });
}

function handleAddPainting(req, res) {
  fs.readFile(path(''), (err, data) => {
    res.end(data);
  });
}

module.exports = { handleHomePage, handlePainters, handleAddPainting };
