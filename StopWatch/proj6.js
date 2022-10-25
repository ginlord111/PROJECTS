const play =document.querySelector('#playButton');
const reset =document.querySelector('#buttonReset');
let timer=document.querySelector('#timer');
let seconds=0;
let minutes=0;
let hours=0;
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;
let timeInterval=null;
let timeStatus="stopped";
const kekw=[];
let lap=document.querySelector('.lap');
let demo=document.querySelector('.demo');
function stopWatch(){

seconds++
if(seconds/60==1){
    seconds=0;
    minutes++
}
if(minutes/60==1){
    minutes=0;
    hours++;
}

if(seconds<10){
 leadingSeconds='0'+seconds.toString();   
    
}
else{
    leadingSeconds=seconds;
}
if(minutes<10){
    leadingMinutes='0'+minutes.toString();   
       
   }
   else{
       leadingMinutes=minutes;
   }
   if(hours<10){
    leadingHours='0'+hours.toString();   
       
   }
   else{
       leadingHours=hours ;
   }
   
timer.innerHTML=leadingHours + ':' + leadingMinutes +':'+leadingSeconds;


}
play.addEventListener('click', function(){
    if(timeStatus =="stopped"){
timeInterval= window.setInterval(stopWatch, 1000);
document.querySelector('#playPausebtn').innerHTML=`<i class="fa fa-pause" id="pause"></i>`;
timeStatus="started";
lap.style.display='block';
    }
    
    else{
        window.clearInterval(timeInterval);
        document.querySelector('#playPausebtn').innerHTML = `<i class="fa fa-play" id="play"></i>`;
        timeStatus="stopped";
       
    
        }
    
});
reset.addEventListener('click', function(){
seconds=0;
minutes=0;
hours=0;
window.clearInterval(timeInterval);
timer.innerHTML="00:00:00";
document.querySelector('#playPausebtn').innerHTML=`<i class="fa fa-play" id="play"></i>`;
lap.style.display='none';
demo.style.display='none';
})

lap.addEventListener('click', function(){
demo.style.display='block';
for (i=0; i<5; i++){

kekw[i]=demo.innerHTML=leadingHours + ':' + leadingMinutes +':'+leadingSeconds;
}
})


