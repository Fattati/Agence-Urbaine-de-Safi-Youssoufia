const _EXPRESS = require('express');
const _APP = _EXPRESS();
const _PATH = require('path');
const _PORT = 8080;
// 
// SEND AN HTML FILE TO THE LOCAL SERVER ROOT
_APP.get('/', (req, res) => {
    res.sendFile(_PATH.join(__dirname, './app/index.html'));
});
// START THE SERVER
_APP.listen(_PORT);