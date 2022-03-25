import { Badge } from "react-bootstrap";


export default function Counter({toDos}){

    //this needs to actually be filtered
    const total = toDos.length

    return (
        <h5>
            <Badge bg='secondary'>{total}</Badge>
        </h5>
    )
}