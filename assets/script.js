const Area = document.querySelector('#gameArea');
const answerArea = document.querySelector('#answer');
const testbutton = document.querySelector('#quizinfo');



testbutton.addEventListener('click',CreateQnA)

var questionArray = ['What is it like to be a muffin?']
var answerArray = [['Its Stink to be a little muffin','She kinda Smells', 'is small','Eye are gonna get her in trouble' ], 
['Because she stinky', 'She is Penguin', 'she tiny and smelly','funktasitc']]


function CreateQnA(){
    const qCreate = document.createElement('div');
    var qSelection = questionArray[0]
    qCreate.setAttribute('id', 'question')
    qCreate.textContent = qSelection
    Area.appendChild(qCreate)        
    for (let i = 0; i < 4; i++) {
        const RenderAns = document.createElement('button');    
        // RenderAns.setAttribute('id', 'q1')  --- I DONT THINK THIS IS NEED ANYMORE
        RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
        RenderAns.textContent = answerArray[0][i]    
        Area.appendChild(RenderAns)       
        
    }
}



