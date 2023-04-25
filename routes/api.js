const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helper/utils.js');
const uuid = require('../helper/uuid.js')

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });



module.exports = router;