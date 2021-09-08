const express = require('express'); // common js modules for node.js instead of "import express from 'express'" as node didn't supportES2015
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // require returns a function, which is immediately invoked, passing 'app' to attach the two route handlers

const PORT = process.env.PORT || 5000;
app.listen(PORT);


