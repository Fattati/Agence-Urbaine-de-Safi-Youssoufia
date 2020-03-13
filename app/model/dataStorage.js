// THE TYPE OF THE DATA THAT SHALL BE SAVED IN THE JSON FILES SHOULD BE CLASSES
// AS FOR ABOVE, RETRIEVED DATA SHALL BE IN AN ARRAY OF CLASSES
// 
const _FS = require('fs-extra');
const _PATH = require('path');
const dataObjects = require('./dataObjects');
// 
async function jsonGetAll(className) {
    let jsonDataObject = JSON.parse(await _FS.readFile(_PATH.join(__dirname, '..', 'data', `${className}.json`)));
    // ARRAY THAT WILL STORE THE CLASSES
    let classArray = [];
    // 
    jsonDataObject.forEach(element => {
        classArray.push(jsonToClass(element), className);
    });
    // 
    return classArray;
}
jsonGetAll("Service");
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