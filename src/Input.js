import { InputGroup, FormControl } from "react-bootstrap"

export default function Input (){
//add an onKeyDown event listener for the return key to generate a new
//object, set its text to the contents of the text box, give it a new ID, and add it 
//to the toDos array in state.
    

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