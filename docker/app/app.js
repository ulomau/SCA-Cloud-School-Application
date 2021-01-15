#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 2500;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on ${port} for first container operation`);
    console.log('Welcome to SCA Cloud School Application');
})
