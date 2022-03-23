import { ToggleButton } from "react-bootstrap"
import { useState } from "react";

export default function ToDoItem(){
    const [checked, setChecked] = useState(false);
    const [deleted, setDeleted] = useState(false);
    //for loop that generates one of these divs for each object in the toDos array
    //something isn't right with the delete button.  "Warning: Received `false` for a non-boolean attribute `deleted`."
    return (
        <>
        {/* <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton> */}
        Build App
        {/* <button
            id="toggle-delete"
            type="checkbox"
            variant="secondary"
            deleted={deleted}
            value="1"
            onChange={(e) => setDeleted(e.currentTarget.deleted)}
        >
            Delete
        </button> */}
        </>
    )
}