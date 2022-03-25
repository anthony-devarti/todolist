import { Button, ButtonGroup } from "react-bootstrap"

export default function FilterButtons({showAll, active, completed, clear, deleted}){
    return (
        <ButtonGroup size='sm'>
        <Button variant="secondary mb-2" onClick={showAll}>All</Button>
        <Button variant="secondary mb-2" onClick={active}>Active</Button>
        <Button variant="secondary mb-2" onClick={completed}>Completed</Button>
        <Button variant="secondary mb-2" onClick={clear}>Clear Completed</Button>
        <Button variant="secondary mb-2" onClick={deleted}>Recently Deleted</Button>
        </ButtonGroup>
    )
}