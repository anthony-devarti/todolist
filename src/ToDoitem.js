
export default function ToDoItem({setToDos, toDos, filter, max}){  
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //https://reactjs.org/docs/lists-and-keys.html
 
    function ListItem(toDo){
      return <li>{toDo.text}</li>
    }

    //take the id of the object with the button attached
    //filter down to that specific object
    //change the status of that object to 'deleted'
    function deleteToDo(id){
      let targetitem = toDos.find(item=>item.id===id)
      if (targetitem.status!=='deleted'){
        targetitem.status='deleted';
        let newState=toDos;
        //state will only update if I redefine it.
        setToDos([...newState]);
        max();
      } else if (targetitem.status==='deleted'){
        let crosshairs = toDos.indexOf(targetitem);
        toDos.splice(crosshairs, 1)
        let newState=toDos;
        setToDos([...newState]);
      } else { console.log('The status is somehow neither "deleted" nor is it "not deleted"')}
    }

    //take the id of the object with the button attached
    //filter down to that specific object
    //change the status of that object to 'done'
    function completeToDo(id){
      let targetitem = toDos.find(item=>item.id===id);
      if (targetitem.status==='deleted'){
        targetitem.status='active';
        let newState=toDos;
        setToDos([...newState])
      }else{
        targetitem.status='done';
        let newState = toDos;
        setToDos([...newState]);
        max();
      }    
    }

    //generates the jsx for each todo item.  gives them buttons, assigns an id to each div generated
    function toDoList(toDos){
      const toDoList = toDos.filter(filter).map((item)=>
        <div key={item.id} className={item.status}>
        <ListItem uniqueId={item.id} text={item.text} status='active'/>
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
        </div>
      );
      return (
        <>
        <ul>{toDoList}</ul>
        </>
      );
    } 
        return (
          <>
          {toDoList(toDos)}
          </>
        )
    
}