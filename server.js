const _EXPRESS = require('express');
const _APP = _EXPRESS();
const _BODY_PARSER = require('body-parser')
const _PATH = require('path');
const _PORT = 8080;
const _FUNCS = require('./app/model/dataStorage');
// 
// BODY-PARSER MIDDLEWARE
_APP.use(_BODY_PARSER.json()); // to support JSON-encoded bodies
_APP.use(_BODY_PARSER.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
// SEND AN HTML FILE WHEN THE REQUESTED URL IS CALLED
_APP.get('/', (req, res) => {
    res.sendFile(_PATH.join(__dirname, 'app/index.html'));
});
_APP.get('/inscription', (req, res) => {
    res.sendFile(_PATH.join(__dirname, 'app/inscription.html'));
});
_APP.get('/dev', (req, res) => {
    res.sendFile(_PATH.join(__dirname, 'app/html/backEnd_Testing.html'));
});
// LISTEN FOR REQUESTES FROM THE CLIENT
_APP.post('/jsonSave', async function (req, res) {
    // console.log(req.body.data);
    let result = await _FUNCS.addToJson(req.body.type, req.body.data);
    res.end(result.toString());
});
// GIVE THE LOCAL SERER TO ACCESS /APP FOLDER
_APP.use('/', _EXPRESS.static(_PATH.join(__dirname, 'app')));
// START THE SERVER
_APP.listen(_PORT, () => {
    console.log(`Listening on port ${_PORT}\nPlease refere to : localhost:${_PORT}`);
});