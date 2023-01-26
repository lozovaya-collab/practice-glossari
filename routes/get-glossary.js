const express = require('express');
const router = express.Router();

const glossary = require('../data/glossary.json');

router.get("/", (request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  response.end(JSON.stringify(glossary));
});

module.exports = router;