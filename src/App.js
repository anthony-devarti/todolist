import './App.css';
import Input from './Input';
import { Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import ToDoItem from './ToDoitem';


function App() {
  const [toDos, setToDos] = useState(()=>{
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

  //this saves to local storage
  useEffect(()=>{
    localStorage.setItem('toDos', JSON.stringify(toDos));

  })
    
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
