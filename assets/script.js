const Area = document.querySelector('#gameArea');
const timerLeft = document.querySelector('#timerLeft');
const testbutton = document.querySelector('#quizinfo');


// debugging 
const btn1 = document.querySelector('#btn-test-1')
const btn2 = document.querySelector('#btn-test-2')
const btn3 = document.querySelector('#btn-test-3')

btn1.addEventListener('click', timer)
btn2.addEventListener('click', wronganswer)
btn3.addEventListener('click', stoptimer)

// debugging 


renderStartScreenFirstTimeOnly()


// Animatied Start Screen only once though ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function renderStartScreenFirstTimeOnly() {
    clear()
    createDivStartScreen()
    createPStartScreen()
    writeStartMessage(0)
}

function createDivStartScreen() {
    var renderDivStartScreen = document.createElement('div')
    renderDivStartScreen.setAttribute('id', 'startmessage')
    renderDivStartScreen.setAttribute('test', 'testing')
    Area.appendChild(renderDivStartScreen);
}

function createPStartScreen() {
    var MessageArray = ['Wake up Neo...', 'The Matrix has you...', 'Follow the Whit... Oh wait nvm', 'Wanna take a PopQuiz?']
    
    for (let i = 0; i < MessageArray.length; i++) {        
        const startmessage = document.querySelector('#startmessage')
        var renderDivStartMessage = document.createElement('p')        
        startmessage.appendChild(renderDivStartMessage)
    }
}

function writeStartMessage(MsgNumber) {
    var timerForInterval = 0

    var typeInterval = setInterval(function () {
        var MessageArray = ['Wake up Neo...', 'The Matrix has you...', 'Follow the Whit... Oh wait nvm', 'Wanna take a PopQuiz?']
        var tempArray = MessageArray[MsgNumber]
        var textArray = tempArray.split('')



        if (timerForInterval < textArray.length) {

            const startmessage = document.querySelector('#startmessage')
            startmessage.children[MsgNumber].textContent += textArray[timerForInterval++]
        }
        else {
            clearInterval(typeInterval)
            typeInterval = null;
            if (MsgNumber == 0) {
                setTimeout(writeStartMessage, 1000, 1)
            }
            else if (MsgNumber == 1) {
                setTimeout(writeStartMessage, 1000, 2)
            }
            else if (MsgNumber == 2) {
                setTimeout(writeStartMessage, 1000, 3)
            }
            else if (MsgNumber == 3) {
                setTimeout(createStartBtn, 1000)
            }
        }
    }, 75)
}

function createStartBtn() {
    var renderStartButton = document.createElement('button')
    renderStartButton.setAttribute('id', 'startbutton')
    renderStartButton.setAttribute('style', 'min-width: 100px; position: absolute; top: 75%;')
    renderStartButton.textContent = "Start Quiz"
    startmessage.appendChild(renderStartButton);
    var btnStart = document.querySelector("#startbutton")
    return btnStart.addEventListener('click', CreateQnA)
}
// Animatied Start Screen only once though ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function clear() {
    while (Area.firstChild) {
        Area.removeChild(Area.firstChild);
    }
}

function timer(){
    newscore = 200 //made newscore universal . Should change that
    var timerScore = setInterval(function() {
        if(newscore > 0){
            timerLeft.textContent = --newscore}
        if( newscore == 0){
            clearInterval(timerScore)
            timerScore = null
            renderRestartScreen()
        }
        else if (newscore == 'stop'){
            clearInterval(timerScore)
        }        
    },1000)    

}
function wronganswer(){
    newscore -= 10
    const timeContainer = document.querySelector('#gameTimer')
    timeContainer.setAttribute('style', 'color: green')
    setTimeout( function(){ timeContainer.setAttribute(timeContainer.setAttribute('style', 'color: black'))}, 250)
    
}

function stoptimer(){
    timerLeft.textContent = newscore
    newscore = 'stop'
}


function renderRestartScreen() {
    clear()
    var renderDivStartScreen = document.createElement('div')
    renderDivStartScreen.setAttribute('id', 'startmessage')
    renderDivStartScreen.setAttribute('test', 'testing')
    Area.appendChild(renderDivStartScreen);

    const startmessage = document.querySelector('#startmessage')
    var MessageArray = ["How'd you do?", 'Did you get a Good Score?', 'Why not try again']   
    var scoreStr = 'Your score was ' + timerLeft.textContent
    MessageArray[0] = scoreStr
    for (let i = 0; i < MessageArray.length; i++) {
        var renderDivStartMessage = document.createElement('p')
        renderDivStartMessage.textContent = MessageArray[i]
        startmessage.appendChild(renderDivStartMessage)
    }
    createStartBtn()
}














































var questionArray = ['What is it like to be a muffin?', "Why does she stink?", 'how much does she smell']
var answerArray = [['Its Stink to be a little muffin', 'She kinda Smells', 'is small', 'Eye are gonna get her in trouble'],
['Because she stinky', 'She is Penguin', 'she tiny and smelly', 'funktasitc'], ['100%', '90%', '80%', '70%']]


function CreateQnA(questionNum) {
    clear()
    const qCreate = document.createElement('div');
    var qSelection = questionArray[questionNum]
    qCreate.setAttribute('id', 'question')
    qCreate.textContent = qSelection
    Area.appendChild(qCreate)
    for (let i = 0; i < 4; i++) {
        const RenderAns = document.createElement('button');
        qid = 'q' + i
        RenderAns.setAttribute('id', qid)
        RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
        RenderAns.textContent = answerArray[questionNum][i]
        Area.appendChild(RenderAns)

    }
}


/// FIX THE SCROLLING BY LOOK AT THE CLASS NOTES

// testbutton.addEventListener('click', function(){quesCount = 0 scrollThroughQuestions()})


function scrollThroughQuestions(){    
    if (quesCount < questionArray.length){
        CreateQnA(quesCount++)
    }
    else{
        quesCount = 0
        CreateQnA(quesCount++)
    }
    
}








