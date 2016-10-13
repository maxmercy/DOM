window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var inputSave = document.getElementById('todo-input').value;	// on récupère l'info dans le formulaire

    var listToDo = document.getElementsByClassName("todo-list-items")[0]; 	// récupération de la liste
    var listItem = document.createElement("li");	// on cré un nouveau noeud item de liste
    var listText = document.createTextNode(inputSave)	// on cré un noeud texte

    listItem.appendChild(listText);		 // on attache le noeud texte au noeud item de liste
   	listToDo.appendChild(listItem);		// on attache le noeud item de liste au noeud liste

  
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }
  
}
