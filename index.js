const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/key');
const app = express();

passport.use(new GoogleStrategy({
        clientID : key.googleClientID,
        clientSecret : key.googleClientSecret
    })
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);``