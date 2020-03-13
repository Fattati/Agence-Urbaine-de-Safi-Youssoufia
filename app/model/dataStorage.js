// THE TYPE OF THE DATA THAT SHALL BE SAVED IN THE JSON FILES SHOULD BE CLASSES
// AS FOR ABOVE, RETRIEVED DATA SHALL BE IN AN ARRAY OF CLASSES
// 
const fs = require('fs');
const dataObjects = require('./dataObjects');
// 
function jsonGetAll(className) {

}
// FUNCTION THAT RETURNS THE SERVER'S CURRENT DATE 🙌
function getCurrentDate() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}