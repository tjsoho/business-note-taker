const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helper/utils.js');
const uuid = require('../helper/uuid.js')

// Gets the users notes typed on the html and saves into the db.json i.e it's saving the data
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// Posts the users data into the saved side on the left
router.post('/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFromFile('db/db.json'));
  const newNote = {
    title: req.body.title,
    text: req.body.text;
    id: uuid,
  }
  dbJson.push(newNote);
  fs.writeToFile('db/db.json',JSON.stringify(dbJson))
  res.json(dbJson)
});

module.exports = router;