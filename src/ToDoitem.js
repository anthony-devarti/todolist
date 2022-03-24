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
      return <li>
        
        {toDo.text}
        
        </li>
    }
    //take the id of the object with the button attached
    //filter down to that specific object
    //change the status of that object to 'deleted'
    function deleteToDo(id, e){
      console.log('deleting id:', id, e);
      let targetitem = toDos.find(item=>item.id===id)
      targetitem.status='deleted'
      //state will only update if I redefine it.
      let newState=toDos
      console.log('deleting task:', targetitem, toDos);
      setToDos([...newState])
    }

    //take the id of the object with the button attached
    //filter down to that specific object
    //change the status of that object to 'deleted'
    function completeToDo(id, e){
      console.log('target id:', id, e);
      let targetitem = toDos.find(item=>item.id===id)
      targetitem.status='done'
      let newState = toDos
      console.log('marking as complete task:', targetitem);
      setToDos([...newState])
      
    }

    //the x button needs to hand the id of the item to which it is attached over to the delete function
    function toDoList(toDos){
      const toDoList = toDos.map((item)=>
        <>
        <ListItem uniqueId={item.id} key={item.id} text={item.text} status='active'/>
        <button id={item.id} variant='outline-danger' onClick={(e)=>{
          completeToDo(item.id, e)
        }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
      </svg></button>
        <button id={item.id} variant='outline-danger' onClick={(e)=>{
          deleteToDo(item.id, e)
        }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg></button>
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