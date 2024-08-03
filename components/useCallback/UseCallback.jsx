import React, { useCallback, useEffect, useState } from "react";
import Title from "./Title";
import Posts from "./Posts";

const UseCallback = () => {
  const [count, setCount] = useState(0);
 

  const addCount = useCallback(() => {
    setCount((previouscount) => previouscount + 1);
  }, []);



  return (
    <div>
      <Title title="useCallback Example" />
      <p>You clicked {count} times</p>
      <button onClick={addCount}>Click me</button>

      <Posts />
    </div>
  );
};

export default UseCallback;
