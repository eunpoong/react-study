/**
 * 8.1 useState
 */

import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        카운터 : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
