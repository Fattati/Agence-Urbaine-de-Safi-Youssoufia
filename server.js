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
    res.sendFile(_PATH.join(__dirname, 'app', 'index.html'));
});
_APP.get('/inscription', (req, res) => {
    res.sendFile(_PATH.join(__dirname, 'app/inscription.html'));
});
_APP.get('/dev', (req, res) => {
    res.sendFile(_PATH.join(__dirname, 'app/html/backEnd_Testing.html'));
});
// LISTEN FOR REQUESTES FROM THE CLIENT
// REQUEST TO SAVE THE GIVEN DATA INTO THE JSON FILE
_APP.post('/jsonSave', async function (req, res) {
    let result = await _FUNCS.addToJson(req.body.class, req.body.data);
    res.end(result.toString());
});
//REQUEST TO GET ALL DATA OF A CLASS
_APP.post('/jsonGetAll', async function (req, res) {
    let result = await _FUNCS.jsonGetAll(req.body.class);
    res.end(JSON.stringify(result));
});
// REQUEST TO GET A SPECIFIC ENTRY FROM A CLASS BY ID
_APP.post('/jsonGetById', async function (req, res) {
    let result = await _FUNCS.searchBy(req.body.class, req.body.id);
    res.end(JSON.stringify(result));
});
// REQUEST TO DELETE A SPECIFIC ENTRY FROM A CLASS BY ID
_APP.post('/jsonRemoveById', async function (req, res) {
    let result = await _FUNCS.removeFromJson(req.body.class, req.body.id);
    res.end(result.toString());
});
// GIVE THE LOCAL SERER TO ACCESS /APP FOLDER
_APP.use('/', _EXPRESS.static(_PATH.join(__dirname, 'app')));
// START THE SERVER
_APP.listen(_PORT, () => {
    console.log(`Listening on port ${_PORT}\nPlease refere to : localhost:${_PORT}`);
});