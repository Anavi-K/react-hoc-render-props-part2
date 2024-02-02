import React, { useState } from "react";

const RenderPropsComponent = ({ render }) => {
  const [x, setCount] = useState(0);

  const handleCount = () => {
    setCount(x + 1);
  };

  return render(x, handleCount);
};

export default RenderPropsComponent;