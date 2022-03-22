import { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

export default function Input (){

    function addTodo(){
        let newState = toDos;
        newState.push({text:'some hard coded object', id:'0', status:''})
        setToDos(newState)
      }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="form"></InputGroup.Text>
            <FormControl
            placeholder="To-Do"
            aria-label="To-Do"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
    )

}