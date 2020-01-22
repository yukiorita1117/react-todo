import React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(prevCount => prevCount + 1);
  const decrement2 = () => setCount(prevCount => prevCount - 1);

  return (
    <>
      <div>count : {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </>
  );
};

export default App;
