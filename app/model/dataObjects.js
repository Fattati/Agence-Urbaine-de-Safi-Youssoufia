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
        this.dateQuestion = getCurrentDate();
    }
    // 
    getQuestion() {
        return [this.text, this.dateQuestion];
    }
}
// FUNCTION THAT RETURNS THE SERVER'S CURRENT DATE 
function getCurrentDate() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}