import React, { FC, useState, useEffect } from 'react';

export const UIButton: FC = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-green-700"
        >
        Click me
      </button>
    </div>
  );
};