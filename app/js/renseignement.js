$(document).ready(() => {
    $.post("/getQuestions", {}, (response) => {
        const questions = JSON.parse(response);
        // 
        questions.forEach(element => {
            cardMaker(element);
        });
    });
});
// 
function cardMaker(question) {
    let cont = makeEelement('div', 'b-card');
    cont.id = `cardBox-${question.index}`;
    // 
    let cardTop = makeEelement('div', 'b-card-top');
    let cardBot = makeEelement('div', 'b-card-bot');
    // 
    let txt = makeEelement('span', "b-card-top-txt");
    txt.innerText = question.txt;
    // 
    cardTop.appendChild(txt);
    // 
    // 
    let cardInfos = makeEelement('div', 'card-info');
    let cardReponse = makeEelement('div', 'card-response');
    // 
    let cardInfoTop = makeEelement('div', 'card-info-top');
    let cardInfoDate = makeEelement('span', 'card-info-date');
    cardInfoDate.innerText = question.date;
    // 
    let cardInfoName = makeEelement('span', 'card-info-name');
    let cardInfoService = makeEelement('span', 'card-info-service');
    // 
    cardInfoName.innerText = question.client;
    cardInfoService.innerText = question.service;
    // 
    cardInfoTop.appendChild(cardInfoName);
    cardInfoTop.appendChild(cardInfoService);
    // 
    cardInfos.appendChild(cardInfoTop);
    cardInfos.appendChild(cardInfoDate);
    // 
    // 
    let cardReponseInput = makeEelement('input', 'card-responce-txt');
    cardReponseInput.setAttribute('type', 'text');
    cardReponseInput.setAttribute('placeholder', 'Votre reponse ...');
    // 
    let cardReponseIcon = makeEelement('i', 'gg-mail card-reponse-btn');
    // 
    cardReponse.appendChild(cardReponseInput);
    cardReponse.appendChild(cardReponseIcon);
    // 
    cardBot.appendChild(cardInfos);
    cardBot.appendChild(cardReponse);
    // 
    // 
    cont.appendChild(cardTop);
    cont.appendChild(cardBot);
    // 
    document.getElementById('b-content').appendChild(cont);
}
// 
function makeEelement(elem, elemClass) {
    let item = document.createElement(elem);
    item.setAttribute('class', elemClass);
    // 
    return item;
}