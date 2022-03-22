import { InputGroup, FormControl } from "react-bootstrap"

export default function Input (){
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