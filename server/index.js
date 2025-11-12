const http = require('http');
const app = require('./app');

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

httpServer.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
