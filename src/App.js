import './App.css';
import Input from './Input';
import { Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import ToDoItem from './ToDoitem';


function App() {
  const [toDos, setToDos] = useState(()=>{
    // text is the text of the todo item
    // id is the unique identifier for the item
    // status can be active or done or deleted
    // {
    //   text:'this is an example todo',
    //   id:89868689,
    //   status:'active'
    // },
    // {
    //   text:'another one',
    //   id:5678765,
    //   status:'done'
    // }
    const saved = localStorage.getItem("toDos");
    const initialValue = JSON.parse(saved);
    return initialValue || [
      {
          text:'this is an example todo',
          id:89868689,
          status:'active'
        },
        {
          text:'another one',
          id:5678765,
          status:'done'
        }

    ]
    
  })

  //this should be saving to local storage.  it looks like its working
  useEffect(()=>{
    localStorage.setItem('toDos', JSON.stringify(toDos));

  })

  //this should be retrieving from local storage, but it doesn't look like its doing that
  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem('toDos'));
  //   if (savedData) {
  //    setToDos([...savedData]);
  //   }
  // },[]);

  // const [start, setStart] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("toDos");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  
  // function addTodo(){
  //   //this can't be right.  There should be a way to get the info directly from the input field
  //   let newState = toDos;
  //   //the goal is to get the text from the text box into the text field.
  //   //it also should generate a unique ID that should greatest ID+1
  //   //status should be active by default this is probably fine to leave as a string

  //   //setting the id to be the time in ms
  //   let identifier = Date.now()
  //   newState.push({text:"example todo", key:[identifier], status:'active'})
  //   setToDos(newState)
  //   //setLocalStorage should probably happen here.
  //   console.log(toDos)
  // }
  
  // useEffect(()=> {
    //       setToDos();
    //       console.log(toDos)
    //       //setLocalStorage() this probably goes here, but I'll deal with that later
    //   },[]);
    
    return (
      <>
        <div>
            <Card>
                <Card.Header><h1>To-Do List</h1></Card.Header>
                <Card.Body>
                    <Card.Title><Input setToDos={setToDos} toDos={toDos}/></Card.Title>
                    <Card.Text>
                      <div>
                        <ToDoItem setToDos={setToDos} toDos={toDos}/>
                      </div>
                    </Card.Text>
                    <Button variant="secondary mb-2" >All</Button>
                    <Button variant="secondary mb-2" >Active</Button>
                    <Button variant="secondary mb-2" >Completed</Button>
                    <Button variant="secondary mb-2" >Clear Completed</Button>
                </Card.Body>
            </Card>
        </div>
      </>
  );
}

export default App;
