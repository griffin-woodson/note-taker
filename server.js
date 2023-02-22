const express = require('express');
const apiRoutes = require('./apiRoutes');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


// const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static('public'));

app.use('/api', apiRoutes);

// display index.html data
app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
});
    
//display notes.html data
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});