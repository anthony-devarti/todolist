import { InputGroup, FormControl } from "react-bootstrap"
import { useState } from "react";

export default function Input ({setToDos, toDos}){
//add an onKeyDown event listener for the return key to generate a new
//object, set its text to the contents of the text box, give it a new ID, and add it 
//to the toDos array in state.
//
//there is a children thing here that I'm missing.  toDos is showing as undefined because that state is stored elsewhere.
    function handleSubmit(e){
        e.preventDefault();
        console.log('click is working');
        console.log('this is where I try to find the form value')
        let newState = toDos;
        let identifier = Date.now();
        newState.push({text: task, id: identifier, status:'active'})
        setToDos([...newState])
        //setLocalStorage should probably happen here.
        console.log(toDos)

    }

    const [task, setTask] = useState()
    

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setTask(e.target.value)} placeholder="What's getting added to your list?" />
            <button>Go</button>
        </form>
    )

}