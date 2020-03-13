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
    getAll(type = 'object') {
        let returnData = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            dateN: this.dateN,
            email: this.email,
            numeroTel: this.numeroTel,
            motPass: this.motPass
        }
        if (type != 'object')
            returnData = [this.cin, this.nom, this.prenom, this.dateN, this.email, this.numeroTel, this.motPass];
        // 
        return returnData;
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
    setId(id) {
        this.id = id;
    }
    // GET ALL DATA
    getAll(type = 'object') {
        let returnData = {
            id: this.id,
            nom: this.nom,
            description: this.description
        }
        if (type != 'object')
            returnData = [this.id, this.nom, this.description];
        // 
        return returnData;
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
    setDateQuestion(date) {
        this.dateQuestion = date;
    }
    // 
    getQuestion(type = 'object') {
        let returnData = {
            text: this.text,
            dateQuestion: this.dateQuestion
        }
        if (type != 'object')
            returnData = [this.text, this.dateQuestion];
        // 
        return returnData;
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
    setDateReponse(date) {
        this.dateReponse = date;
    }
    // 
    getReponse(type = 'object') {
        let returnData = {
            reponse: this.reponse,
            dateReponse: this.dateReponse
        }
        if (type != 'object')
            returnData = [this.reponse, this.dateReponse];
        // 
        return returnData;
    }
}

// EXPORT CLASSES FOR LATER USE
module.exports = {
    Client,
    Service,
    Question,
    Reponse
}