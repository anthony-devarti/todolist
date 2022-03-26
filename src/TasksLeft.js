export default function TasksLeft({ toDos }) {
  let filtered = toDos.filter((item) => item.status === "active");
  let thisMany = filtered.length;
  let counterMessage = "";

  if (thisMany === 0) {
    counterMessage = "All done!  Maybe go outside and touch some grass?";
  } else if (thisMany === 1) {
    counterMessage = "Just one thing left!  You're almost there!";
  } else {
    counterMessage = `You have ${thisMany} things to do! That less than ${
      thisMany + 1
    }
    things.`;
  }

  return <>{counterMessage}</>;
}
