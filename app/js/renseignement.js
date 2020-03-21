$(document).ready(() => {
    $.post("/getQuestions", {}, (response) => {
        const questions = JSON.parse(response);
        // FILL QUESTION FROM THE JSON FILE
        questions.forEach(element => {
            cardMaker(element);
        });
        // 
    });
    // WHEN CLICKING THE ADD BUTTONS SHOW THE FORM TO ADD A QUESTION
    $('#add-question').click(showQuestionForm);
    //
    $('#q-form-btn-anuller').click(hideQuestionForm);
    $('#q-form-cont').click((e) => {
        if (e.target == $('#q-form-cont')[0])
            hideQuestionForm();
    });
    // 
    // 
    $('#q-form-btn-postuler').click(() => {
        // 
        // Assuming validation was mad
        $.post('/jsonSave', {
            class: "Question",
            data: {
                text: $('#q-form-txtarea').text(),
                clientId: "JKQSHD876",
                serviceId: $("#q-form-services").children("option:selected").val()
            }
        }, (response) => {
            console.log(response);
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
    // document.getElementById('b-content').appendChild(cont);
    document.getElementById('b-content').insertBefore(cont, document.getElementById('add-question'));

}
// 
function makeEelement(elem, elemClass) {
    let item = document.createElement(elem);
    item.setAttribute('class', elemClass);
    // 
    return item;
}
// 
function showQuestionForm() {
    $('#q-form-cont').css({
        'display': "flex"
    });
}

function hideQuestionForm() {
    $('#q-form-cont').css({
        'display': "none"
    });
}