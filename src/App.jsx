import React from "react";
import { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);

  //初期化処理と同じことをすれば良い
  const reset = () => {
    setState(props);
  };

  return (
    <>
      <p>
        現在の{state.name}は{state.price}円持っています。
      </p>
      <button
        onClick={() => {
          setState({ ...state, price: state.price + 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setState({ ...state, price: state.price - 1 });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setState(props);
        }}
      >
        RESET
      </button>
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
