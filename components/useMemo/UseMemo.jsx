import React, { useCallback, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = useCallback(() => {
    console.log("increment 1");
    setCount(count + 1);
  }, [count]);

  const increment5 = useCallback(() => {
    console.log("increment 5");
    setCount2(count2 + 5);
  }, [count2]);

  const checkEvenOdd = useMemo(() => {
    console.log("checkEvenOdd");
    for (let i = 0; i < 1000000000; i++) {}

    return count % 2 === 0;
  }, [count]);

  return (
    <div className="flex flex-col gap-3">
      <h4>ReactMemo hook use</h4>

      <p> Count click 1 : {count}</p>
      <button onClick={increment1} className="btn_primary w-fit">
        Click Expensive
      </button>
      <span>{checkEvenOdd ? "Even" : "Odd"}</span>
      <hr />
      <p> Count click 5 : {count2}</p>
      <button onClick={increment5} className="btn_primary w-fit">
        Click
      </button>
    </div>
  );
};

export default UseMemo;
