const express = require('express');
const app = express();
const ps3 = require('./ps3.js');
const path = require("path");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/ps3', ps3);
app.get('/', (req, res) => {
    res.send('Go to /ps3 for part b, Go to /ps3/pass for part c, Go to /ps3/names/{FIRSTNAME}/{LASTNAME} to see part d');
});

app.listen(3000, () => console.log('listening on port 3000.'));

