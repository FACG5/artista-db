const {
  handleHomePage, handlePainters, handleDelete,
  handleStaticFiles, handlePageNotFound, handleQuery, handleAddPainting, handleAdd,
} = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint)
  if (endpoint === '/') {
    handleHomePage(req, res);
  } else if (endpoint === '/painters') {
    handlePainters(req, res);
  } else if (endpoint === '/addpainting') {
    handleAddPainting(req, res);
  } else if (endpoint.includes('/getdata')) {
    handleQuery(req, res);
  } else if (endpoint.includes('/public')) {
    handleStaticFiles(req, res);
  } else if (endpoint === '/add') {
    handleAdd(req, res);
  } else if (endpoint.includes('/deletedata')) {
    handleDelete(req, res);
  } else {
    handlePageNotFound(req, res);
  }
};

module.exports = router;
