const Area = document.querySelector('#gameArea');
const testbutton = document.querySelector('#quizinfo');


// debugging 
const btn1 = document.querySelector('#btn-test-1')
const btn2 = document.querySelector('#btn-test-2')
const btn3 = document.querySelector('#btn-test-3')

btn1.addEventListener('click', CreateQnA1)  
btn2.addEventListener('click', CreateQnA2)
btn3.addEventListener('click', clear)

function dcheck(){
    console.log('clicked')
}
// debugging 

function clear() {
    while (Area.firstChild) {
        Area.removeChild(Area.firstChild);
    }
}


testbutton.addEventListener('click',CreateQnA)




var questionArray = ['What is it like to be a muffin?', "Why does she stink?",'how much does she smell']
var answerArray = [['Its Stink to be a little muffin','She kinda Smells', 'is small','Eye are gonna get her in trouble' ], 
['Because she stinky', 'She is Penguin', 'she tiny and smelly','funktasitc'], ['100%' , '90%', '80%' , '70%']]


function CreateQnA(){
    clear()
    const qCreate = document.createElement('div');
    var qSelection = questionArray[0]
    qCreate.setAttribute('id', 'question')
    qCreate.textContent = qSelection
    Area.appendChild(qCreate)        
    for (let i = 0; i < 4; i++) {
        const RenderAns = document.createElement('button');    
        qid = 'q'+i
        RenderAns.setAttribute('id', qid)        
        RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
        RenderAns.textContent = answerArray[0][i]    
        Area.appendChild(RenderAns)       
        
    }
}

function CreateQnA1(){
    clear()
    const qCreate = document.createElement('div');
    var qSelection = questionArray[1]
    qCreate.setAttribute('id', 'question')
    qCreate.textContent = qSelection
    Area.appendChild(qCreate)        
    for (let i = 0; i < 4; i++) {
        const RenderAns = document.createElement('button');    
        qid = 'q'+i
        RenderAns.setAttribute('id', qid)        
        RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
        RenderAns.textContent = answerArray[1][i]    
        Area.appendChild(RenderAns)       
        
    }
}

function CreateQnA2(){
    clear()
    const qCreate = document.createElement('div');
    var qSelection = questionArray[2]
    qCreate.setAttribute('id', 'question')
    qCreate.textContent = qSelection
    Area.appendChild(qCreate)        
    for (let i = 0; i < 4; i++) {
        const RenderAns = document.createElement('button');    
        qid = 'q'+i
        RenderAns.setAttribute('id', qid)        
        RenderAns.setAttribute('style', 'color: var(--TextGreen)') //CSS dosnt't Working to change the color green must review
        RenderAns.textContent = answerArray[2][i]    
        Area.appendChild(RenderAns)       
        
    }
}



