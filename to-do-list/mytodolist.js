// Code goes here

var myToDoList = {
  toDoList: [],
  // Adds a to do item and sets its completion as false
	addToDo: function(newToDoText) {
		this.toDoList.push ({ //object
		  newToDoText: newToDoText, //property that is equal to whatever the user passes in
		  completed: false, //boolean value
		});
	},
	
	// Changes a to do item based on the position
	changeMyToDoList: function(position, newToDoText){
		this.toDoList[position].newToDoText = newToDoText;
	},
	
	// Deletes a to do item based on the position and number you want deleted.
	deleteToDo: function(position){
		this.toDoList.splice(position, 1);
	},
	
	//Turns a to do item from not completed to completed and visa versa
	toggleCompleted: function(position){
	  var todo = this.toDoList[position];
	  todo.completed = !todo.completed;
	}, 
	
	//Turns multiple to do items from not completed to completed and visa versa
	toggleAll: function() {
	  var totalToDo = this.toDoList.length;
	  var completedToDo = 0;
	  
	  //Get  number of completed to do items
	  for (var i = 0; i < totalToDo; i++){
	    if(this.toDoList[i].completed === true) { 
	      completedToDo++;
	    }
	  }
	  // If everything is true, make everything false
	  if (completedToDo === totalToDo){  //make everything false
	     for (var i = 0; i < totalToDo; i++){
	      this.toDoList[i].completed = false;
	    }
	 //Otherwise, make everything true
	  } else {
	    for (var i = 0; i < totalToDo; i++) {
	      this.toDoList[i].completed = true;
	    }
	  }
	}
};

  var handlers = {
    toggleAll: function() {
      myToDoList.toggleAll();
      view.displayMyToDoList();
    },
    addToDo: function(){
      var newToDoTextInput = document.getElementById("newToDoTextInput");
      myToDoList.addToDo(newToDoTextInput.value);
      newToDoTextInput.value = "";
      view.displayMyToDoList();
    },
    	changeToDoList: function() {
      var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
      var changeToDoTextInput = document.getElementById("changeToDoTextInput");
      myToDoList.changeMyToDoList(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
      changeToDoPositionInput.value = "";
      changeToDoTextInput.value = "";
      view.displayMyToDoList();
    },
      deleteToDo: function(position) {
        myToDoList.deleteToDo(position);
        view.displayMyToDoList();
      },
      toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        myToDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value="";
        view.displayMyToDoList();
      }
  };
  
  var view = {
   displayMyToDoList: function() {
    var toDoUl = document.querySelector("ul");
    toDoUl.innerHTML = "";
     for (var i = 0; i < myToDoList.toDoList.length; i++) {
         var toDoLi = document.createElement("li");
         var toDo = myToDoList.toDoList[i];
         var toDoTextWithCompletion = "";
         
         if(toDo.completed === true){
           toDoTextWithCompletion = "(x)" + toDo.newToDoText;
         } else {
           toDoTextWithCompletion = "()" + toDo.newToDoText;
         }
       
         toDoLi.id = i;         
         toDoLi.textContent = toDoTextWithCompletion;
         toDoLi.appendChild(this.createDeleteButton());
         toDoUl.appendChild(toDoLi);
     }
   },
    createDeleteButton: function() {
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "deleteButton";
      return deleteButton;
  },
  setUpEventListeners: function () {
      
  
  var toDoUl = document.querySelector("ul");
  toDoUl.addEventListener("click", function(event) {
   
    
    var elementClicked = event.target;
    if (elementClicked.className === "deleteButton") {
    handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
    }
  });
  }
};

view.setUpEventListeners();

  