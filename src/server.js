const http = require('http');
const router = require('./router');

const port = process.env.port || 3000;

http.createServer(router).listen(3000, () => {
  console.log(`we now in port : ${port}`);
});
