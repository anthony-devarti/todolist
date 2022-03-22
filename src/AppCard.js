import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import Input from "./Input"
//need to import the css for bootstrap here so this will appear correctly

export default function AppCard(){
    const [toDo, setToDo] = useState([])

    useEffect(()=> {
        
    },[]);

    return (
        <div>
            <Card>
                <Card.Header><Input /></Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    This is where the Todos will go
                    </Card.Text>
                    <Button variant="primary">All</Button>
                    <Button variant="primary">Active</Button>
                    <Button variant="primary">Completed</Button>
                </Card.Body>
            </Card>
        </div>
    )
}