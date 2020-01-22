import React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(prevCount => prevCount + 1);
  const decrement2 = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const isTriple = () => setCount(count % 3 === 0 ? count / 3 : count);

  return (
    <>
      <div>count : {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={isTriple}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
