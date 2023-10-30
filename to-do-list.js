const toDoList = [];

updateList();


function updateList() {
    let toDoListHTML = '';


    for (i = 0; i < toDoList.length; i++){
        //document.writeln((i+1) + ": " + toDoList[i]);
        const task_i = toDoList[i];
        const htmltask = `<p>${task_i}</p>`;
        toDoListHTML += htmltask;
        //console.log(task_i);
    }
    console.log(toDoListHTML);


    document.querySelector('.js-to-do-list')
        .innerHTML = 'toDoListHTML';

};

function AddToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const task = inputElement.value;

    console.log(task)
    toDoList.push(task);
    console.log(toDoList);

  
    inputElement.value = '';

  updateList();


  



}
