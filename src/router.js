const {
  handleHomePage, handlePainters,
  handleStaticFiles, handlePageNotFound, handleQuery, handleAddPainting, handleAdd,
} = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handleHomePage(req, res);
  } else if (endpoint === '/painters') {
    handlePainters(req, res);
  } else if (endpoint === '/addpainting') {
    handleAddPainting(req, res);
  } else if (endpoint.includes('/getData')) {
    handleQuery(req, res);
  } else if (endpoint.includes('/public')) {
    handleStaticFiles(req, res);
  } else if (endpoint === '/add') {
    handleAdd(req, res);
  } else {
    handlePageNotFound(req, res);
  }
};
module.exports = router;
