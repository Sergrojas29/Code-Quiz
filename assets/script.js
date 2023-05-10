const Area = document.querySelector('#gameArea');
const timerLeft = document.querySelector('#timerLeft');
const Login = document.querySelector('#login');


//? debugging 
// const testbutton = document.querySelector('#quizinfo');
// const btn1 = document.querySelector('#btn-test-1')
// const btn2 = document.querySelector('#btn-test-2')
// const btn3 = document.querySelector('#btn-test-3')

// btn1.addEventListener('click', CreateQnA)
// btn2.addEventListener('click', YourScoreScreen)
// btn3.addEventListener('click', renderRestartScreen)

//? debugging 




//Login Begins the Qusetion


Login.addEventListener('click', delaylogin);

function delaylogin() {
    clear()
    setTimeout(renderStartScreenFirstTimeOnly, 1000)
}




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
        var MessageArray = ['Wake up Neo...', 'The Matrix has you...', 'Follow the White... Oh wait nvm', 'Wanna take a PopQuiz?']
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
    return btnStart.addEventListener('click', startCreateQna)
}
// Animatied Start Screen only once though ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function clear() {
    while (Area.firstChild) {
        Area.removeChild(Area.firstChild);
    }
}

function timer() {
    newscore = 200 //made newscore universal . Should change that?
    var timerScore = setInterval(function () {
        if (newscore > 0) {
            timerLeft.textContent = --newscore
        }
        if (newscore == 0) {
            clearInterval(timerScore)
            timerScore = null
            YourScoreScreen()
        }
        else if (newscore == 'stop') {
            clearInterval(timerScore)
        }
    }, 1000)

}
function wronganswer() {
    newscore -= 10
}

function wronganswerAnimation() {
    const timeContainer = document.querySelector('#gameTimer')
    timeContainer.setAttribute('style', 'color: green')
    setTimeout(function () { timeContainer.setAttribute('style', 'color: black') }, 250)
}//Animation delay was causing wrong score to present

function stoptimer() {
    timerLeft.textContent = newscore
    newscore = 'stop'
}

//* unused code. No more need for this screen↓↓↓↓↓↓↓↓↓↓
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
//* unused code. No more need for this screen↑↑↑↑↑↑↑↑↑↑


// CreateQnA will restart the questions once all question have been asked ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
var questionArray = ['What is it like to be a Muffin?', "Why does Muffin stink?", 'how much does Muffin stink?', 'Why does luna love Muffin more?', 'What kind of potato would Muffin like to be?']
var answerArray = [['Its Stinky to be a little Muffin', 'She kinda Smells', 'is small', 'All of the Above'],
['Because she stinky', 'She is Penguin', 'she tiny and smelly', 'funktasitc'], ['100%', '90%', '80%', '70%'],
['Because Muffin Smeels like beef', 'Because Muffin Smeels like chicken', 'Because Muffin Smeels like Papya', 'Because Muffin Smeels like Poop'], ['Mashed Potato', ' Baked Potato', 'Wedge Potato', 'Tatertot']]
var answerKey = [4, 2, 1, 2, 2]
var qcount = 0

function startCreateQna() {
    CreateQnA()
    timer()
}

function CreateQnA() {
    if (qcount < questionArray.length) {
        clear()
        const qCreate = document.createElement('div');
        var qSelection = questionArray[qcount]
        qCreate.setAttribute('id', 'question')
        qCreate.textContent = qSelection
        Area.appendChild(qCreate)
        for (let i = 0; i < 4; i++) {
            const RenderAns = document.createElement('button');
            qid = 'q' + i
            RenderAns.setAttribute('id', qid)
            RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
            RenderAns.textContent = answerArray[qcount][i]
            Area.appendChild(RenderAns)


        }
        chooseAnswer()
        qcount++
    }
    else if (qcount >= questionArray.length) {
        YourScoreScreen()
        stoptimer()
        qcount = 0
    }

}

function chooseAnswer() {
    for (let i = 1; i < 5; i++) {
        if (i == answerKey[qcount]) {
            var correctAnswer = Area.children[answerKey[qcount]]
            correctAnswer.addEventListener('click', CreateQnA)
        }
        if (i !== answerKey[qcount]) {
            var wanswer = Area.children[i]
            wanswer.addEventListener('click', wronganswer)
            wanswer.addEventListener('click', wronganswerAnimation) //Animation delay was causing wrong score to present
        }
    }
}


// Animatied will restart the questions once all question have been asked ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



function YourScoreScreen() {
    clear()
    var highScoretitle = document.createElement('h1')
    var renderScore = document.createElement('h2')
    var inIntial = document.createElement('input')
    var enterScoreBtn = document.createElement('button')

    highScoretitle.textContent = 'YOU SCORED:'
    Area.appendChild(highScoretitle)

    renderScore.textContent = timerLeft.textContent
    Area.appendChild(renderScore)

    inIntial.setAttribute('type', 'text')
    inIntial.setAttribute('maxlength', '3')
    inIntial.setAttribute('placeholder', 'AAA')
    Area.appendChild(inIntial)


    enterScoreBtn.textContent = 'Enter Initials'
    enterScoreBtn.setAttribute('id', 'enterHS')
    Area.appendChild(enterScoreBtn)

    document.querySelector('#enterHS').addEventListener('click', RenderHSscreen)
}


var highscoreholders = []
var highScoreholderScore = []

function RenderHSscreen() {
    const inputHS = document.querySelector('input')
    const finalscore = document.querySelector('h2')

    var Pscore = finalscore.textContent
    var playerInitials = inputHS.value


    if (playerInitials == '') {
        inputHS.setAttribute('placeholder', 'ERR')
        inputHS.setAttribute('style', 'color: red')
        inputHS.classList.toggle("support-red-Flash")
        setTimeout(function () {
            inputHS.classList.toggle("support-red-Flash");
        }, 500);

    }
    else {

        highscoreholders.push(playerInitials)
        highScoreholderScore.push(Pscore)

        clear()


        var highScoretitle = document.createElement('h1')
        var createScoreArea = document.createElement('section')


        highScoretitle.setAttribute('id', 'TitleHighScore')
        highScoretitle.textContent = 'Highscores'
        Area.appendChild(highScoretitle)
        createScoreArea.setAttribute('id', 'scoreArea')
        Area.appendChild(createScoreArea)

        const scoreArea = document.querySelector('#scoreArea')
        if (highscoreholders.length < 4) {
            for (let i = 0; i < highscoreholders.length; i++) {
                var inputIntial = document.createElement('span')
                var highformat = document.createElement('p')
                var inputhigh = document.createElement('span')

                inputIntial.setAttribute('class', 'intialspan')
                inputIntial.textContent = highscoreholders[i]

                scoreArea.appendChild(inputIntial)

                highformat.setAttribute('id', 'hs')
                highformat.textContent = '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'

                scoreArea.appendChild(highformat)

                inputhigh.setAttribute('id', 'Highscore')
                inputhigh.textContent = highScoreholderScore[i]

                scoreArea.appendChild(inputhigh)

            }
        }
        else {
            highscoreholders.shift()
            highScoreholderScore.shift()
            for (let i = 0; i < highscoreholders.length; i++) {
                var inputIntial = document.createElement('span')
                var highformat = document.createElement('p')
                var inputhigh = document.createElement('span')

                inputIntial.setAttribute('class', 'intialspan')
                inputIntial.textContent = highscoreholders[i]

                scoreArea.appendChild(inputIntial)

                highformat.setAttribute('id', 'hs')
                highformat.textContent = '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'

                scoreArea.appendChild(highformat)

                inputhigh.setAttribute('id', 'Highscore')
                inputhigh.textContent = highScoreholderScore[i]

                scoreArea.appendChild(inputhigh)


            }
        }
        var renderStartButton = document.createElement('button')
        renderStartButton.setAttribute('id', 'startbutton')
        renderStartButton.setAttribute('style', 'min-width: 100px; position: absolute; top: 75%;')
        renderStartButton.textContent = "Try Again"
        Area.appendChild(renderStartButton);
        var btnStart = document.querySelector("#startbutton")
        return btnStart.addEventListener('click', startCreateQna)
    }

}




var tab = document.querySelector(".tab");
var btnArea = document.querySelector("#coolbtn");
var tabarrow = document.querySelector(".rotate");

tab.addEventListener("click", function () {
  check = btnArea.getAttribute("style", "right");
  console.log(check == null)
  if (check == "right: -30px;" | check == null) {
    btnArea.setAttribute("style", "right: -150px;");
    tabarrow.setAttribute('style','transform: rotate(180deg);')
   console.log(check)
  } 
  else {
    btnArea.setAttribute("style", "right: -30px;");
    tabarrow.setAttribute('style','transform: rotate(0deg);')
  }
});




