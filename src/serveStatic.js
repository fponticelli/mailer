const express = require('express');
const dirname = require('./getPath')

// initialize server
async function serveStatic() {
    const server = express();
    server.use(express.static(dirname + '/public'));
    server.listen(3001, () => {console.log('Listening on http://localhost:3001/')});
}

module.exports = serveStatic