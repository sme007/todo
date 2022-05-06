let todoContent = document.getElementById("content");
let todoInput = document.getElementById("todo-input");
let toboButton = document.getElementById("btn");
let errorMsg = document.getElementById("error-msg");






toboButton.addEventListener('click', function(){
    const todoDisplay = document.createElement('li');
    const deleteTodo = document.createElement('button');
    deleteTodo.textContent = "X";
    // todoDisplay.innerHTML = todoInput.value;
    
    if(todoInput.value == ""){
        todoInput.classList.add("error");
        const errorDisplay = document.createElement('p');
        errorDisplay.textContent = "Input can't be empty";
        errorDisplay.classList.add("errorMessage");
        errorMsg.append(errorDisplay);
        todoDisplay = "";
        deleteTodo = "";
        
    }else {
        todoDisplay.innerHTML = todoInput.value;
        todoInput.classList.remove("error");
        errorMsg.innerHTML = "";

    } 

    // When the is added the input box should be empty, presenting duplicate entries
    if(todoDisplay.innerHTML = todoInput.value) {
        todoInput.value = "";
    }else {
        todoDisplay.innerHTML = todoInput.value;
    }   
    
    todoContent.append(todoDisplay);
    todoContent.append(deleteTodo);
    todoDisplay.append(deleteTodo);   

    deleteTodo.addEventListener('click', () =>{
        if(confirm("Are you about this?") == true){
            todoDisplay.remove();
        }else {
            return false;
        }
    });
       

    deleteTodo.classList.add("btnRemove");
    todoDisplay.classList.add("display");

});
