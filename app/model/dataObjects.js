//
class Client {
    constructor(cin, nom, prenom, dateNaissance, email, numeroTelephone, motDePass) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.dateN = dateNaissance;
        this.email = email;
        this.numeroTel = numeroTelephone;
        this.motPass = motDePass;
    }
    // 
    // RETURN ATTRIBUTES DATA AS AN ARRAY
    getAll() {
        return [this.cin, this.nom, this.prenom, this.dateN, this.email, this.numeroTel, this.motPass];
    }
    //RETUEN CREDENTIELS DATA
    getCred(type = 'object') {
        let returnData = {
            id: this.email,
            password: this.motPass
        }
        // 
        if (type != 'object')
            returnData = [this.email, this.motPass];
        // 
        return returnData;
    }
}
//
class Service {
    constructor(nomService, descriptionService) {
        this.id = null;
        this.nom = nomService;
        this.description = descriptionService;
    }
    // 
    set id(id) {
        this.id = id;
    }
    // GET ALL DATA
    getAll() {
        return [this.id, this.nom, this.description];
    }
}
//
class Question {
    constructor(text, clientId, ServiceId) {
        this.text = text;
        this.clientId = clientId;
        this.serviceId = ServiceId;
        this.dateQuestion = null;
    }
    // 
    set dateQuestion(date) {
        this.dateQuestion = date;
    }
    // 
    getQuestion() {
        return [this.text, this.dateQuestion];
    }
}
// 
class Reponse {
    constructor(answer, clientId, ServiceId) {
        this.reponse = answer;
        this.clientId = clientId;
        this.serviceId = ServiceId;
        this.dateReponse = null;
    }
    // 
    set dateReponse(date) {
        this.dateReponse = date;
    }
    // 
    getReponse() {
        return [this.reponse, this.dateReponse];
    }
}
// FUNCTION THAT RETURNS THE SERVER'S CURRENT DATE 🙌
/*function getCurrentDate() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}*/
// EXPORT CLASSES FOR LATER USE
module.exports = {
    Client,
    Service,
    Question,
    Reponse
}