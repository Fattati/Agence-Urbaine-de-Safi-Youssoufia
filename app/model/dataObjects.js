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