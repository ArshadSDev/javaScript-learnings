const TodoList=[{name:'cooking',date:'12-03-2003'},{name:'washing',date:'12-05-2025'}];

function finalListAdding(){
    let finalresult='';
    for( let i=0;i<TodoList.length ;i++){
        const todoObject=TodoList[i];
        const {name,date}=todoObject;
        const html=`
         <div>${name}</div> 
        <div>${date}</div> 
        <button onclick="TodoList.splice(${i},1) ; finalListAdding()" class="delete-button">Delete</button>`;
        finalresult+=html;
    }   
    //console.log(finalresult);
    document.querySelector('.ListValues').innerHTML=finalresult;
}

function handleEnter(event){
    if(event.key== 'Enter'){
        addOnClick();
        
    }
}




function addOnClick(){
    const inputElem = document.querySelector('.js-addBox');
    const inputName=inputElem.value;
    const inputDateElem= document.querySelector('.inputDate');
    const inputDate=inputDateElem.value;
    TodoList.push({
        name: inputName,
        date:inputDate
    });

    console.log(TodoList);//
    console.log('version 2');//
    inputElem.value='';
    inputDateElem.value='';
    finalListAdding();
    
}

