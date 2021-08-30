const express = require('express'); // common js modules for node.js instead of "import express from 'express'" as node didn't supportES2015

const app = express();

app.get('/', (req, res) => {
    res.send({ SeeYa: 'Dickie'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);


