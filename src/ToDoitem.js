import { ToggleButton } from "react-bootstrap"
import { useState } from "react";

export default function ToDoItem({setToDos, toDos}){
    const [checked, setChecked] = useState(false);
    const [deleted, setDeleted] = useState(false);
    //for loop that generates one of these divs for each object in the toDos array
    //something isn't right with the delete button.  "Warning: Received `false` for a non-boolean attribute `deleted`."
    
    //make a function that maps over the entire array and fills stuff in.  The temp vars are doing the work now.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //https://reactjs.org/docs/lists-and-keys.html
    console.log('I am rendering')
    //I can track todo items from the list according to their index just fine.  Need to be able to track them by their key
    console.log(toDos[0])

    //I need to print a different row with the text of the todo item visible.  
    //The div that contains it should have its status and unique key, but they do not need to be visible

    //how to get the specific text value of one todo to appear in here
    function ListItem(toDo){
      console.log('todo', toDo)
      return <li>{toDo.text}</li>
    }

    function toDoList(toDos){
      const toDoList = toDos.map((toDo)=>
        <ListItem key={toDo.id} text={toDo.text} />
      );
      return (
        <ul>{toDoList}</ul>
      );
    }
    
      let tempText="this is hardcoded text"
      let tempId='14'
      let tempStatus='am I active or completed?'
      
        return (
          <>
          {toDoList(toDos)}
          </>
        )
    
}