
let content=document.querySelector('.content');
let output=document.querySelector('.output');
let buttons=Array.from(document.querySelectorAll('.number-buttons'));
let modeButton=document.querySelector('.mode-button');
let numberStatus=true;
let body=document.querySelector('body');
let seven =document.querySelector('#seven');
let eight =document.querySelector('#eight');
let six =document.querySelector('#six');
let five =document.querySelector('#five');
let four =document.querySelector('#four');
let three =document.querySelector('#three');
let two =document.querySelector('#two');
let one =document.querySelector('#one');
let comma =document.querySelector('#comma');
let zero =document.querySelector('#zero');
let clear=document.querySelector('#clear');
let modulo=document.querySelector('#modulo');
let plusMinus=document.querySelector('#plus-minus');
let divide=document.querySelector('#divide');
let multiply=document.querySelector('#multiply');
let minus=document.querySelector('#minus');
let plus =document.querySelector('#plus');
let equal=document.querySelector('#equal');
let container=document.querySelector('.container');
let modeStatus=true;

// buttons
buttons.map(kekw => {
   kekw.addEventListener('click', (e) => {
   
switch(e.target.innerText){
case '=':{
   content.innerText=eval(content.innerText);
break;
}
case'AC':{
content.innerText="0";

break;
}

default:if(output.innerText=="0"){
   content.innerText="";
}
content.innerText+= e.target.innerText; 
}



   })
})

// ligtmode dark mode
modeButton.addEventListener('click', function(){
   if(modeStatus==true){
modeButton.innerHTML=`<i class="fa fa-moon-o"></i> Dark Mode`;
modeButton.style.backgroundColor='black';
modeButton.style.color='white';
body.style.backgroundColor='#ffff';
seven.style.backgroundColor='rgb(235, 231, 231)';
six.style.backgroundColor='rgb(235, 231, 231)';
five.style.backgroundColor='rgb(235, 231, 231)';
four.style.backgroundColor='rgb(235, 231, 231)';
three.style.backgroundColor='rgb(235, 231, 231)';
two.style.backgroundColor='rgb(235, 231, 231)';
one.style.backgroundColor='rgb(235, 231, 231)';
comma.style.backgroundColor='rgb(235, 231, 231)';
zero.style.backgroundColor='rgb(235, 231, 231)';
eight.style.backgroundColor='rgb(235, 231, 231)';
nine.style.backgroundColor='rgb(235, 231, 231)';

// color
seven.style.color='black';
six.style.color='black';
five.style.color='black';
four.style.color='black';
three.style.color='black';
two.style.color='black';
one.style.color='black';
eight.style.color='black';
nine.style.color='black';
zero.style.color='black';
comma.style.color='black';

multiply.style.color='black';
divide.style.color='black';
plus.style.color='black';
minus.style.color='black';
equal.style.color='black';

container.style.boxShadow='0px 0px 15px rgba(36, 33, 33)';
output.style.color='black';
content.style.color='black';
modeStatus=false;
   }
   //dark mode
else{
modeButton.innerHTML=`<i class="fa fa-sun-o"></i> Light Mode`;
modeButton.style.backgroundColor='white';
modeButton.style.color='black';
body.style.backgroundColor='rgba(0, 0, 0, 0.897)';
seven.style.backgroundColor='  #333';
six.style.backgroundColor=' #333';
five.style.backgroundColor='#333';
four.style.backgroundColor='#333';
three.style.backgroundColor='#333';
two.style.backgroundColor='#333';
one.style.backgroundColor='#333';
comma.style.backgroundColor='#333';
zero.style.backgroundColor='#333';
eight.style.backgroundColor='#333';
nine.style.backgroundColor='#333';

seven.style.color='white';
six.style.color='white';
five.style.color='white';
four.style.color='white';
three.style.color='white';
two.style.color='white';
one.style.color='white';
eight.style.color='white';
nine.style.color='white';
zero.style.color='white';
comma.style.color='white';


multiply.style.color='white';
divide.style.color='white';
plus.style.color='white';
minus.style.color='white';
equal.style.color='white';
container.style.boxShadow='0px 0px 20px  rgba(153, 153, 153, 1)';

output.style.color='white';
content.style.color='white';

modeStatus=true;


}
})
console.log(container);



