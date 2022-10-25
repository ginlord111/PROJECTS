const content = document.getElementsByClassName('content');

for(i=0;i<content.length; i++){
content[i].addEventListener('click', function(){
this.classList.toggle('active');

})
}