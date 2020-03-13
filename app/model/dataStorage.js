// THE TYPE OF THE DATA THAT SHALL BE SAVED IN THE JSON FILES SHOULD BE CLASSES
// AS FOR ABOVE, RETRIEVED DATA SHALL BE IN AN ARRAY OF CLASSES
// 
// TO-DO : ADD A FUNCTION THAT RETURNS ALL QUESTION IN DATE INTERVAL
const _FS = require('fs-extra');
const _PATH = require('path');
const dataObjects = require('./dataObjects');
// RETURN AN ARRAY OF CLASSES OF THE JSON DATA FILE
async function jsonGetAll(className) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `${className}.json`);
    if (pathExists(FILE_PATH)) {
        let jsonDataObject = JSON.parse(await _FS.readFile(FILE_PATH));
        // ARRAY THAT WILL STORE THE CLASSES
        let classArray = [];
        // 
        // console.log(jsonDataObject);
        jsonDataObject.forEach(element => {
            classArray.push(jsonToClass(element), className);
        });
        // 
        return classArray;
    } else
        return null;
}
//RETURN A CLASS OF THE SERCHED FOR VALUE👀
function searchBy(className, id) {
    // A TABLE THAT CONTAINES THE CLASS NAMES ✨
    const _REFERENCES = [{
        class: "Client"
    }, {
        class: "Service"
    }, {
        class: "Other"
    }];
    // RECOVER ALL THE DATA FROM THE JSON FILE
    const _DATA = jsonGetAll(className);
    // VARIABLE THAT WILL STORE THE SEARCHED FOR VALUE
    let retValue = null;
    _REFERENCES.forEach(reference => { //LOOP ON ALL THE REFERENCES
        if (reference.class == className) { //IF THE SELECTED REFRENCES CLASS == THE PROVIDED CLASSNAME
            _DATA.forEach(data => { //LOOP ON ALL THE JSON FILE DATA
                if (reference.class != "Other") { //THE 'OTHER' MEANS THE CLASSES HAVE MORE THAN 1 ID 
                    if (data.getId() == id)
                        retValue = data;
                } else {
                    let values = data.getId();
                    if (values[0] == id[0] && values[1] == id[1]) //IF CLIENT ID & SERVICE ID MATCHES THE PROVIDED VALUES
                        retValue = data;
                }
            });
        }
    });
    // 
    return retValue;
}
// SAVE DATA INTO A JSON FILE
async function jsonSave(className, data) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `${className}.json`);


    // SEE IF THE FILE EXISTS, IF NOT MAKE IT
    if (!await _FS.pathExists(FILE_PATH))
        await _FS.createFile(FILE_PATH);
    // FILL THE JSON FILL IF EMPTY
    let fileContent = await _FS.readFile(FILE_PATH, 'utf8');
    if (fileContent.length == 0)
        await _FS.writeFile(FILE_PATH, '[]');

    // RETURN VALUE
    let succes = true;
    try {
        // IN ORDER TO APPEND TO A JSON FILE I NEED TO READ THE EXISTING FILE
        let jsonDataObject = JSON.parse(await _FS.readFile(FILE_PATH));
        //THE ADD THE WENTED DATA TO IT
        jsonDataObject.push(data.getAll());
        //AFTER THAT I RESAVE THE JSON FILE
        await _FS.writeJSON(FILE_PATH, jsonDataObject);
    } catch (err) {
        console.log(err);
        succes = false;
    }
    // 
    return succes;
}
// FUNCTION THAT RETURNS THE SERVER'S CURRENT DATE 🙌
function getCurrentDate() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
// TRANSFORM JSON DATA TO IT'S CORRESPONDING CLASS AND RETURN IT 👌
function jsonToClass(objectData, className) {
    let retClass = null;
    switch (className) {
        case 'Client':
            retClass = new dataObjects.Client(objectData.cin, objectData.nom, objectData.prenom, objectData.dateN, objectData.email, objectData.numeroTel, objectData.motPass);
            break;
        case 'Service':
            retClass = new dataObjects.Service(objectData.nom, objectData.description);
            break;
        case 'Question':
            retClass = new dataObjects.Question(objectData.text, objectData.clientId, objectData.serviceId);
            break;
        case 'Reponse':
            retClass = new dataObjects.Reponse(objectData.reponse, objectData.clientId, objectData.serviceId);
            break;
        default:
            retClass = null;
    }
    // 
    return retClass;
}
// MAKE SURE THE DESIRED DIR EXISTS | RETURN TRUE OR FALSE
async function pathExists(path) {
    return await _FS.pathExists(path);
}
// A FUNCTION TO CHECK WETHER THE FILE IS EMPTY, IF TRUE FILL IT WITH []
async function initJsonFile(filePath) {
    let fileContent = await _FS.readFile(filePath, 'utf8');
    if (fileContent.length == 0)
        _FS.writeJSON(filePath, []);
}
// 