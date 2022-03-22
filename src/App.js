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
  
  
  // useEffect(()=> {
  //       setToDos();
  //       console.log(toDos)
  //       //setLocalStorage() this probably goes here, but I'll deal with that later
  //   },[]);

  return (
    <>
    <div>
            <Card>
                <Card.Header><h1>To Do List</h1></Card.Header>
                <Card.Body>
                    <Card.Title><Input /></Card.Title>
                    <Card.Text>
                    <ToDoItem />
                    </Card.Text>
                    <Button variant="primary">All</Button>
                    <Button variant="primary">Active</Button>
                    <Button variant="primary">Completed</Button>
                    <Button variant="primary">Clear Completed</Button>
                </Card.Body>
            </Card>
        </div>
    </>
  );
}

export default App;
