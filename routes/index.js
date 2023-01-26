const express = require('express');
const router = express.Router();

const glossary = require('../data/glossary.json');
const mindMap = require('../data/mind-map.json');

router.get('/', (req, res, next) => {
  res.render('index', {
    glossary: JSON.stringify(glossary),
    mindMap: JSON.stringify(mindMap)
  });
});

module.exports = router;
