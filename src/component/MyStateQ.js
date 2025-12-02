import React, { useState } from "react";

function MyStateQ() {
    const [count, setCount] = useState(0);

  const onIncrease = () => setCount((prev) => prev + 1);
  const onDecrease = () => setCount((prev) => prev - 1);
  const onReset = () => setCount(0);

  return (
    <div style={{ padding: 24 }}>
      <h2>MyStateQ</h2>
      <p>Count: {count}</p>

      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease} style={{ marginLeft: 8 }}>
        감소
      </button>
      <button onClick={onReset} style={{ marginLeft: 8 }}>
        초기화
      </button>
    </div>
  )
}

export default MyStateQ;