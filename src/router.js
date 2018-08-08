const {
  handleHomePage, handlePainters,
  handleStaticFiles, handleError, handleQuery, handleAddPainting,
} = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handleHomePage(req, res);
  } else if (endpoint === '/painters') {
    handlePainters(req, res);
  } else if (endpoint === '/addPainting') {
    handleAddPainting(req, res);
  } else if (endpoint.includes('/getData')) {
    handleQuery(req, res);
  } else if (endpoint.includes('/public')) {
    handleStaticFiles(req, res);
  } else {
    handleError(req, res);
  }
};
module.exports = router;
