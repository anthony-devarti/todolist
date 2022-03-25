import { Button, ButtonGroup } from "react-bootstrap"

export default function FilterButtons({ clear, reactivate, filterByStatus}){

    return (
        <ButtonGroup size='sm'>
        <Button variant="secondary mb-2" onClick={(e)=>{
          filterByStatus('active', 'completed')
          console.log('viewing items that are active or completed')
        }}>All</Button>
        <Button variant="secondary mb-2" onClick={(e)=>{
          filterByStatus('active')
          console.log('viewing items that are active')
        }}>Active</Button>
        <Button variant="secondary mb-2" onClick={(e)=>{
          filterByStatus('done')
          console.log('viewing items that are completed')
        }}>Completed</Button>
        <Button variant="secondary mb-2" onClick={clear}>Clear Completed</Button>
        <Button variant="secondary mb-2" onClick={(e)=>{
          filterByStatus('deleted')
          console.log('viewing items that are deleted')
        }}>Recently Deleted</Button>
        <Button variant="secondary mb-2" onClick={reactivate}>Reactivate</Button>
        </ButtonGroup>
    )
}