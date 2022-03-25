import './App.css';
import Input from './Input';
import { Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import ToDoItem from './ToDoitem';
import ButtonGroup from './ButtonGroup';


function App() {
  const [toDos, setToDos] = useState(()=>{
    const saved = localStorage.getItem("toDos");
    const initialValue = JSON.parse(saved);
    return initialValue || [
      {
          text:'this is a To-Do task',
          id:89868689,
          status:'active'
        },
        {
          text:'click the check mark to mark me as complete',
          id:5678765,
          status:'active'
        },
        {
          text:'click the trash icon to delete me',
          id:5678766,
          status:'active'
        },
        {
          text:'click delete or clear to remove completed todos',
          id:5678767,
          status:'done'
        }
    ]  
  })

  const[filter, setFilter] = useState(() => item => item.status !== 'deleted');

  //this saves to local storage
  useEffect(()=>{
    localStorage.setItem('toDos', JSON.stringify(toDos));
  })

  const showAll = ()=>{
    console.log('all')
    setFilter(()=>item=>item.status!=='deleted')
  }

  const active = ()=>{
    console.log('active')
    setFilter(()=>item=>item.status==='active')
  }

  const completed = () => {
    console.log('completed')
    setFilter(()=>item=>item.status==='done')
  }

  const clear = () => {
    console.log('clear')
    toDos.forEach ((item)=>{
      if (item.status==='done'){
        item.status='deleted'
      }
    })
    let newState = toDos;
    setToDos([...newState])
  }

  //this should remove oldest todos if we're saving over 50 of them
  //this only deletes the oldest one regardless of its status
  //should go through and fix this to only delete oldest ones and have a catch if all 50 are active
  const max= ()=>{
    const overMax = toDos.length-50
      if(overMax>0){
        console.log('hit the maximum')
        toDos.splice(0,overMax)
        let newState = toDos
        setToDos([...newState])
      }
    }

    return (
      <>
        <div>
            <Card>
                <Card.Header><h1>To-Do List</h1></Card.Header>
                <Card.Body>
                    <Card.Title><Input max={max} setToDos={setToDos} toDos={toDos}/></Card.Title>
                    <Card.Text>
                      <div>
                        <ToDoItem max={max} setToDos={setToDos} toDos={toDos} filter={filter}/>
                      </div>
                    </Card.Text>
                    <ButtonGroup showAll={showAll} active={active} completed={completed} clear={clear}/>
                </Card.Body>
            </Card>
        </div>
      </>
  );
}

export default App;
