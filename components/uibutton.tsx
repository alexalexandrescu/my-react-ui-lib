import React, { FC } from 'react';

export const UIButton: FC = () => {
  return (
    <>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-green-700">
          Click me
        </button>
    </>
  );
};