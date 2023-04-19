import React from "react";

const MemoComponent = React.memo(({ count, text, handleClick }) => {
  return (
    <div>
      <h3>{count}</h3>
      <p>{text}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.count === nextProps.count;
});

export default MemoComponent;