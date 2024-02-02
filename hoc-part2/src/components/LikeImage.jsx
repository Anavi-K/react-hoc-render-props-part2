import React from 'react';

export default function LikeImage({ value, increase }) {
  return (
    <div>
      <button onClick={increase}>Like Image {value}</button>
    </div>
  );
}