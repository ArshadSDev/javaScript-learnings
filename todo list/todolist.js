const TodoList=[];

function finalListAdding(){
    let finalresult='';

    TodoList.forEach((todoObject,index) => {
        // const todoObject=TodoList[i];
        const {name,date}=todoObject;
        const html=`
        <div>${name}</div> 
        <div>${date}</div> 
        <button class="delete-button js-delete-button ">Delete</button>`;
        finalresult+=html;
    })



    // for( let i=0;i<TodoList.length ;i++){
    //     const todoObject=TodoList[i];
    //     const {name,date}=todoObject;
    //     const html=`
    //      <div>${name}</div> 
    //     <div>${date}</div> 
    //     <button onclick="TodoList.splice(${i},1) ; finalListAdding()" class="delete-button">Delete</button>`;
    //     finalresult+=html;
    // }   
    //console.log(finalresult);
    document.querySelector('.ListValues').innerHTML=finalresult;

    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButtonVal,index)=>{
        deleteButtonVal.addEventListener('click',()=>{
            TodoList.splice(index,1) ;
            finalListAdding()
        })
    })

}

function handleEnter(event){
    if(event.key== 'Enter'){
        addOnClick();
        
    }
}


document.querySelector('.js-add-button').addEventListener('click',()=>{
    addOnClick()
})

function addOnClick(){
    const inputElem = document.querySelector('.js-addBox');
    const inputName=inputElem.value;
    const inputDateElem= document.querySelector('.inputDate');
    const inputDate=inputDateElem.value;
    TodoList.push({
        name: inputName,
        date:inputDate
    });

    
    
    inputElem.value='';
    inputDateElem.value='';
    finalListAdding();
    
}

