import { memo, useState } from "react";
import GreetingSelector from "./GreetingSelector";

const Greeting = memo(function Greeting({ name }) {
  const [greeting, setGreeting] = useState("Hello");

  return (
    <>
      <h3>
        Hello{name && ", "}
        {name}!
      </h3>

      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

export default Greeting;
