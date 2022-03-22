import { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

export default function Input (){

    const [toDos, setToDos] = useState([{text:'this is an example todo', id:'0'}])

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