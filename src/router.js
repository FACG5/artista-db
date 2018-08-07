const {
  handleHomePage, handlePainters, handleCategories,
  handleStaticFiles, handleError, handleQuery, handleAddPainting,
} = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  console.log('endpoint', endpoint);
  if (endpoint === '/') {
    console.log('andari');
    handleHomePage(req, res);
  } else if (endpoint === '/painters') {
    handlePainters(req, res);
  } else if (endpoint === '/addPainting') {
    handleAddPainting(req, res);
  } else if (endpoint === '/categories') {
    handleCategories(req, res);
  } else if (endpoint.includes('/getData')) {
    handleQuery(req, res);
  } else if (endpoint.includes('/public')) {
    handleStaticFiles(req, res);
  } else {
    // handleHomePage(req, res);
    // handleError(req, res);
  }
};
module.exports = router;
