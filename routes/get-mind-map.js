const express = require('express');
const router = express.Router();

const mindMap = require('../data/mind-map.json');

router.get("/", (request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  response.end(JSON.stringify(mindMap));
});

module.exports = router;