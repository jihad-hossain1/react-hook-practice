import React, { useState } from "react";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h4>ReactMemo hook use</h4>

      <p> Count click : {count}</p>
      <button onClick={handleClick} className="btn">Click</button>
    </div>
  );
};

export default ReactMemo;
