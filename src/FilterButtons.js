import { Button, ButtonGroup } from "react-bootstrap";

export default function FilterButtons({ clear, reactivate, filterByStatus }) {
  return (
    <ButtonGroup size="sm">
      <Button
        variant="secondary mb-2"
        onClick={(e) => {
          filterByStatus("active", "completed");
        }}
      >
        All
      </Button>
      <Button
        variant="secondary mb-2"
        onClick={(e) => {
          filterByStatus("active");
        }}
      >
        Active
      </Button>
      <Button
        variant="secondary mb-2"
        onClick={(e) => {
          filterByStatus("done");
        }}
      >
        Completed
      </Button>
      <Button variant="secondary mb-2" onClick={clear}>
        Clear Completed
      </Button>
      <Button
        variant="secondary mb-2"
        onClick={(e) => {
          filterByStatus("deleted");
        }}
      >
        Recently Deleted
      </Button>
      <Button variant="secondary mb-2" onClick={reactivate}>
        Reactivate
      </Button>
    </ButtonGroup>
  );
}
