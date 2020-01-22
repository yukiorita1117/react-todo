import React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  return <div>ここにテンプレート！</div>;
};

export default App;
