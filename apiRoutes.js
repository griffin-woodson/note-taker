let notes = require('./db/db.json');
const app = require('express').Router();
const fs = require('fs');
const req = require('express/lib/request');

app.get('/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    res.json(notes);
});

app.post('/notes', (req, res) => {
    //request
    let postNotes = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }
    notes.push(postNotes);
    //response
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

app.delete('/notes/:id', (req, res) => {
    let deleteNotes = [];
    for(var i = 0; i<notes.length; i++) {
        if(notes[i].id != req.params.id) {
            deleteNotes.push(notes[i]);
        }
    }
    notes = deleteNotes;
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

//UDEMY algorithms & computer science interview prep: Colt Steele

module.exports = app;