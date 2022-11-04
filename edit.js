let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
  
    textInput.value = selectedTask.children[0].innerHTML;
   
    textarea.value = selectedTask.children[1].innerHTML;
  
    deleteTask(e);
  };