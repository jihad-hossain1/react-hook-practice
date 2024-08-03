import React, { useState } from "react";
import MemoTitle from "./MemoTitle";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("handleClick");
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <MemoTitle title="ReactMemo hook use not render by useing React.memo" className="text-yellow-500 text-4xl" />

      <p> Count click : {count}</p>
      <button onClick={handleClick} className="btn">Click</button>
    </div>
  );
};

export default ReactMemo;
