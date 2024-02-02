import React from 'react';

export default function LikePost({ value, increase }) {
  return (
    <div>
      <button onClick={increase}>Like Post {value}</button>
    </div>
  );
}