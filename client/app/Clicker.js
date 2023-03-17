import React, { useState, useEffect } from 'react';

const Clicker = () => {
  const [incrementValue, setIncrementValue] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(currentScore => currentScore + incrementValue);
    }, 1000);
    return () => clearInterval(interval);
  }, [incrementValue]);

  const handleClick = () => {
    setScore(score + incrementValue);
  };

  const handleUpgrade = () => {
    if (score >= 10) {
      setIncrementValue(incrementValue + 1);
      setScore(score - 10);
    }
  };

  return (
    <div>
      <h1>Increment Game</h1>
      <p>Score: {score}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUpgrade}>Upgrade (+1 score/click) - 10 score</button>
    </div>
  );
}

export default Clicker;
