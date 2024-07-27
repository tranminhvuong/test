const jsonServer = require("json-server");
const fs = require('fs');
const path = require("path");

const server = jsonServer.create();

fs.copyFile(path.join(__dirname, '../tmp/db.json'), '/tmp/db.json', (err) => {
  if (err) throw err;
  const router = jsonServer.router("/tmp/db.json");
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.listen(8080, () => {
    console.log("JSON Server is running");
  });
});



// Export the Server API
module.exports = server;
