// import { ToggleButton, Button, outline } from "react-bootstrap"
// import { useState } from "react";

export default function ToDoItem({setToDos, toDos}){
    // const [checked, setChecked] = useState(false);
    // const [deleted, setDeleted] = useState(false);
    //for loop that generates one of these divs for each object in the toDos array
    //something isn't right with the delete button.  "Warning: Received `false` for a non-boolean attribute `deleted`."
    
    //make a function that maps over the entire array and fills stuff in.  The temp vars are doing the work now.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //https://reactjs.org/docs/lists-and-keys.html
    console.log('I am rendering')
    //I can track todo items from the list according to their index just fine.  Need to be able to track them by their key
    // console.log(toDos[0])

    //I need to print a different row with the text of the todo item visible.  
    //The div that contains it should have its status and unique key, but they do not need to be visible
 
    function ListItem(toDo, uniqueId, status){
      console.log('todo', toDo, uniqueId, status)
      return <li>{toDo.text}</li>
    }
    //take the id of the object with the button attached
    //filter down to that specific object
    //change the status of that object to 'deleted'
    function deleteToDo(){
      console.log('click')
    }


    //the x button needs to hand the id of the item to which it is attached over to the delete function
    function toDoList(toDos){
      const toDoList = toDos.map((toDo)=>
      <>
        <ListItem iniqueId={toDo.key} text={toDo.text} status='active'/><button variant='outline-danger' onClick={deleteToDo}>x</button>
        </>
      );
      return (
        <>
        <ul>{toDoList}</ul>
        </>
      );
    }
    
      // let tempText="this is hardcoded text"
      // let tempId='14'
      // let tempStatus='am I active or completed?'
      
        return (
          <>
          {toDoList(toDos)}
          </>
        )
    
}