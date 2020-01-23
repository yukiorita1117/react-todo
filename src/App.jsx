import React from "react";
import { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const [price, setPrice] = useState(props.price);
  const increment = () => setPrice(price + 1);
  const decrement = () => setPrice(price - 1);

  //初期化処理と同じことをすれば良い
  const reset = () => {
    setState(props);
  };

  return (
    <>
      <p>
        現在の{state.name}は{price}円持っています。
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>RESET</button>
      {/* e.targetで入力値を拾える */}
      <input
        value={state.name}
        onChange={e => setState({ ...state, name: e.target.value })}
      ></input>
    </>
  );
};

//defaultPropsはInitialStateと同義。Appの持つメソッド
App.defaultProps = {
  name: "JSON_HardCoder",
  price: 1000
};

export default App;
