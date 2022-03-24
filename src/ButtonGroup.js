import { Button } from "react-bootstrap"

export default function ButtonGroup({showAll, active, completed, clear}){
    return (
        <>
        <Button variant="secondary mb-2" onClick={showAll}>All</Button>
        <Button variant="secondary mb-2" onClick={active}>Active</Button>
        <Button variant="secondary mb-2" onClick={completed}>Completed</Button>
        <Button variant="secondary mb-2" onClick={clear}>Clear Completed</Button>
        </>
    )
}

function showAll(){
    console.log('show all clicked')

}