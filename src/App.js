import './App.css';
import Input from './Input';
import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import ToDoItem from './ToDoitem';


function App() {
  const [toDos, setToDos] = useState([
    {
      text:'this is an example todo',
      id:'0',
      status:'active'
    },
    {
      text:'another one',
      id:'-1',
      status:'done'
    }
  ])
  console.log(toDos)
  
  
  function addTodo(text){
    let newState = toDos;
    newState.push({text:[text], id:'0', status:'active'})
    setToDos(newState)
    console.log(toDos)
  }
  
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
                    <Card.Title><Input /></Card.Title>
                    <Card.Text>
                    <ToDoItem />
                    </Card.Text>
                    <Button onClick={addTodo} variant="secondary mb-2">All</Button>
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
