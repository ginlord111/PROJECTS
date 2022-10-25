const addButton =document.querySelector('#addButton');
let bottomTask = document.querySelector('.bottom-task');
let inputTask=document.querySelector('#inputTask');




addButton.addEventListener('click', function(){
if(inputTask.value==""){
    window.alert('Add a Task');
}
else{
   let task =document.createElement('div');
    let li =document.createElement('li');
task.classList.add('task');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton=document.createElement('button');
    checkButton.innerHTML=`<i class="fa fa-check"></i>`;
    checkButton.classList.add('checkButton');
    task.appendChild(checkButton);
    
    let deleteButton=document.createElement('button');
    deleteButton.innerHTML=`<i class="fa fa-trash"></i>`;
    deleteButton.classList.add('deleteButton')
    task.appendChild(deleteButton);

    bottomTask.appendChild(task);


    checkButton.addEventListener('click', function(e){
      
        checkButton.parentElement.style.textDecoration='line-through';
    })

    deleteButton.addEventListener('click', function(){
     deleteButton.parentElement.remove();   
    })

}
})


