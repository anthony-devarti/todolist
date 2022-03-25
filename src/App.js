import "./App.css";
import Input from "./Input";
import { Card, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoitem";
import FilterButtons from "./FilterButtons";

function App() {
  const [toDos, setToDos] = useState(() => {
    const saved = localStorage.getItem("toDos");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          text: "this is a To-Do task",
          id: 89868689,
          status: "active",
        },
        {
          text: "click the check mark to mark me as complete",
          id: 5678765,
          status: "active",
        },
        {
          text: "click the trash icon to delete me",
          id: 5678766,
          status: "active",
        },
        {
          text: "click clear to remove completed todos",
          id: 5678767,
          status: "done",
          className: "done",
        },
      ]
    );
  });
  //this saves to local storage
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  });

  const [filter, setFilter] = useState(
    () => (item) => item.status !== "deleted"
  );

  //I know these look weird.  this lets me pass an arrow function down
  // to modify the filter object in state. it helps me avoid repeating this logic
  //every time I want to filter

  const filterByStatus = (destination, second) => {
    setFilter(()=>(item)=> item.status === destination||second);
  }

  const clear = () => {
    console.log("clear");
    toDos.forEach((item) => {
      if (item.status === "done") {
        item.status = "deleted";
      }
    });
    let newState = toDos;
    setToDos([...newState]);
  };

  const reactivate = () => {
    console.log("reactivate");
    toDos.forEach((item) => {
      if ((item.status = "done")) {
        item.status = "active";
      }
    });
    let newState = toDos;
    setToDos([...newState]);
  };

  //this should remove oldest todos if we're saving over 50 of them
  //this only deletes the oldest one regardless of its status
  //should go through and fix this to only delete oldest ones and have a catch if all 50 are active
  const max = () => {
    const overMax = toDos.length - 50;
    if (overMax > 0) {
      console.log("removing the oldest todo");
      toDos.splice(0, overMax);
      let newState = toDos;
      setToDos([...newState]);
    }
  };

  let filtered = toDos.filter((item) => item.status === "active");
  let thisMany = filtered.length;

  return (
    <Card>
      <Card.Header>
        <h1>To-Do List</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Input max={max} setToDos={setToDos} toDos={toDos} />
        </Card.Title>
        <Card.Text>
          <ToDoItem
            max={max}
            setToDos={setToDos}
            toDos={toDos}
            filter={filter}
          />
        </Card.Text>
        <FilterButtons
          reactivate={reactivate}
          clear={clear}
          filterByStatus={filterByStatus}
        />
      </Card.Body>
      <Badge bg="secondary">
        You have {thisMany} things to do! That's less than {thisMany + 1}{" "}
        things.
      </Badge>
    </Card>
  );
}

export default App;
