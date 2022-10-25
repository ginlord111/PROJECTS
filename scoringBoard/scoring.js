let addButtonA=document.querySelector('#addButtonA');
let minusButtonA=document.getElementById('minusButtonA');
let addButtonB=document.getElementById('addButtonB');
let minusButtonB=document.querySelector('#minusButtonB');

let teamFoulA=document.querySelector('#team-foulA');
let teamFoulB=document.querySelector('#team-foulB');
let startTimer=document.querySelector('#start-timer');
let timer=document.querySelector('.timer');
let duration=document.querySelector('#duration');
let counterA=0;
let timerStatus=true;
let counterB=0;
let kekw=0;
let times=null;
let shotClock=document.querySelector('.shot-clock-numbers');
let reset=document.querySelector('.reset');
// FOUL BUTTONS
minusButtonA.addEventListener('click', function(){
  counterA--;
   
    teamFoulA.innerText=counterA;


})

addButtonA.addEventListener('click',function(){
    counterA++;
    teamFoulA.innerText=counterA;
})
// TEAM B COUNTER

minusButtonB.addEventListener('click', function(){
    counterB-=1;
     
      teamFoulB.innerText=counterB;
  
  
  })
  
  addButtonB.addEventListener('click',function(){
      counterB+=1;;
      teamFoulB.innerHTML=counterB;
  })
  
// TIMER
let seconds =60;
let minutes=11;
let clock=24;
function setTimer(){
seconds--;
clock--;
if(seconds==0){
    minutes--;
    seconds=59;
}
if(seconds<10){
    seconds= '0'+seconds;
}
if(clock==0){
    clock=24;
}

duration.innerHTML=minutes +':'+seconds;
shotClock.innerHTML=clock;
}
startTimer.addEventListener('click', function(){
    if (timerStatus==true){
    times=window.setInterval(setTimer, 1000);
    startTimer.style.backgroundColor='yellow';
    startTimer.style.color='black';
    startTimer.innerText='PAUSE';
    timerStatus=false;
    }
    else {
     window.clearInterval(times);
     startTimer.style.backgroundColor=' rgb(163, 51, 10)';
     startTimer.style.color='white'   ;
     startTimer.innerText='START';
     timerStatus=true;
    }
})
// ANOTHER FLEX FOR BOTH TEAM SCORES ALIGN IT WITH THE FOUL
// SCORES BUTTON
let numberScoresA=0;
let numberScoresB=0;
teamAScore=document.querySelector('.scoresTeamA');
teamBScore=document.querySelector('.scoresTeamB');

buttonPlusA=document.querySelector('.plus-scoreA').addEventListener('click',function(){
numberScoresA++;
if(numberScoresA<10){
    numberScoresA="0"+numberScoresA.toString();
}
teamAScore.innerHTML=numberScoresA;

})
buttonMinusA=document.querySelector('.minus-scoreA').addEventListener('click', function(){
numberScoresA--
if(numberScoresA<10){
    numberScoresA="0"+numberScoresA.toString();
}
teamAScore.innerHTML=numberScoresA;
})

// TEAM B SCORES BUTTON 
buttonPlusB=document.querySelector('.plus-scoreB').addEventListener('click', function(){
    numberScoresB++
    if(numberScoresB<10){
        numberScoresB="0"+numberScoresB;
    }
    teamBScore.innerHTML=numberScoresB;
})
minusButtonB=document.querySelector('.minus-scoreB').addEventListener('click', function(){
    numberScoresB--
    if(numberScoresB<10){
        numberScoresB="0"+numberScoresB;
    }
    teamBScore.innerHTML=numberScoresB;
})
// RESET 
reset.addEventListener('click', function(){
    clock=24;
    shotClock.innerHTML=clock;
})
