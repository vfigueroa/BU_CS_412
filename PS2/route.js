const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on things.');
});
router.post('/', function(req, res){
    res.send('POST route on things.');
});

//export this router to use in our app.js
module.exports = router;