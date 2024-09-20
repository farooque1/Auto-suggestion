import { useState } from "react";

export default function Counter({ color }) {
  const [counter, setCounter] = useState(1);

  const Incress = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Counter {counter}</h1>
      <button onClick={Incress}>incress Counter</button>
    </div>
  );
}
