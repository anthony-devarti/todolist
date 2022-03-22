import './App.css';
import Input from './Input';
import { Card, Button } from 'react-bootstrap'


function App() {
  return (
    <>
    <div>
            <Card>
                <Card.Header><h1>To Do List</h1></Card.Header>
                <Card.Body>
                    <Card.Title><Input /></Card.Title>
                    <Card.Text>
                    This is where the TodosDisplay will go
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
