// importing express library

const express = require('espress');

//importing modular routers for notes
const notesRouter = ('./notes');

const app = express()

app.use('./notes', notesRouter)

module.exports = app