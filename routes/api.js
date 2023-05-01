const router = require('express').Router();
const { Router } = require('express');
const { readFromFile, writeToFile, readAndAppend } = require('../helper/utils.js');
const uuid = require('../helper/uuid.js')


// Gets the users notes typed on the html and saves into the db.json i.e it's saving the data
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)));

});

// Posts the users data into the saved side on the left

router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuid();
  readAndAppend(req.body, './db/db.json');
  return res.json({});
});

router.delete('/notes/:id', (req, res) => {
  readFromFile('./db/db.json').then(data => {
    const allNotes = JSON.parse(data);    
    const newNoteList = allNotes.filter(note => note.id !== req.params.id);
    
    writeToFile('./db/db.json', newNoteList);
    res.json({});
}).catch(err => res.status(500));
});

module.exports = router;