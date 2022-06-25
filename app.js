const level = document.querySelector('.currentLevel');
let firstBox = document.querySelector('.firstBox');
let secondBox = document.querySelector('.secondBox');
let time = document.querySelector('.time')
let levels = 0;
let firstBoxNum = 0;
let secondBoxNum = 0;
let leftTime = 30;

// Functions
const randomNum = () => {
    return Math.floor(Math.random() * 100)
}
let randomNumForBox = (n) => {
    firstBoxNum = randomNum() * n
    secondBoxNum = randomNum() * n
    boxNumSwitch()
}
const currentLevel = (n) => {
    levels = levels + n;
    level.textContent = levels;
    console.log(levels);
}
const rebootNums = () => {
    randomNumForBox(1)
}
let boxNumSwitch = () => {
    firstBox.textContent = firstBoxNum;
    secondBox.textContent = secondBoxNum;
    
}
const bugFixer = () => {
    if(firstBoxNum == secondBoxNum) {
        secondBoxNum++
    }if(secondBoxNum == firstBoxNum){
        firstBoxNum++
    }
}






firstBoxNum = randomNum()
secondBoxNum = randomNum()

boxNumSwitch()











// main code

function firstBoxCheck(){
    if (firstBoxNum > secondBoxNum){
        console.log('yep1');
        currentLevel(1)
        randomNumForBox(1)
        bugFixer()
        boxNumSwitch()
    }else if(secondBoxNum > firstBoxNum){
        console.log('nope');
        console.log(firstBoxNum);
        console.log(secondBoxNum);
    }
}function secondBoxCheck(){
    if (secondBoxNum > firstBoxNum){
        console.log('yep2');
        currentLevel(1)
        randomNumForBox(1)
        bugFixer()
        boxNumSwitch()
    }else if (firstBoxNum > secondBoxNum){
        console.log('nope');
        console.log(firstBoxNum);
        console.log(secondBoxNum);
    }
}


let timer = setInterval(() => {
    leftTime--
    if(leftTime == 0){
        clearInterval(timer)
    }
    time.textContent = leftTime
    setTimeout(() => { clearInterval(timer); }, 30000);
}, 1000);

let timeCheckFn = () => {
    setTimeout(() => {
        if(levels < 20){
            clearInterval(timer);
            document.querySelector('.glass').classList.add('glass_active');
            document.querySelector('.glass').textContent = 'you lose. current level: ' + levels;
            
        }else if(levels > 20){
           setTimeout(() => {
            document.querySelector('.glass').classList.remove('glass_active');
            
           }, 4000); 
            document.querySelector('.glass').classList.add('glass_active');
            document.querySelector('.glass').textContent = 'first faze succesfully completed';
            
        }
    }, 30000);
    
}
timeCheckFn()
















































