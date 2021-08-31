const express = require('express'); // common js modules for node.js instead of "import express from 'express'" as node didn't supportES2015
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app); // require returns a function, which is immediately invoked, passing 'app' to attach the two route handlers

const PORT = process.env.PORT || 5000;
app.listen(PORT);


