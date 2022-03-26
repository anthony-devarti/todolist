import { Form } from "react-bootstrap";
import { useState } from "react";

export default function Input({ setToDos, toDos, max }) {
  //add an onKeyDown event listener for the return key to generate a new
  //object, set its text to the contents of the text box, give it a new ID, and add it
  //to the toDos array in state.

  //this defines the handler for the form submission.
  function handleSubmit(e) {
    e.preventDefault();
    let newState = toDos;
    let identifier = Date.now();
    newState.push({ text: value, id: identifier, status: "active" });
    setValue("");
    setToDos([...newState]);
    max();
  }

  const [value, setValue] = useState("");

  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="What's getting done?"
      />
      <button>Go</button>
    </Form>
  );
}
