import { InputGroup, FormControl } from "react-bootstrap"

export default function Input (){
//add an onKeyDown event listener for the return key to generate a new
//object, set its text to the contents of the text box, give it a new ID, and add it 
//to the toDos array in state.
//
//there is a children thing here that I'm missing.  toDos is showing as undefined because that state is stored elsewhere.
    function handleSubmit(e, {toDos, setToDos}){
        e.preventDefault();
        console.log('click is working');
        console.log(toDos)
        let newState = toDos;
        let identifier = Date.now();
        newState.push({text:'test todo', id:[identifier], status:'active'})
        setToDos(newState)
        //setLocalStorage should probably happen here.
        console.log(toDos)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="todo" />
            <button>Go</button>
        </form>
    )

}