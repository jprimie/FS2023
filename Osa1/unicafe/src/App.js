import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ text, total }) => (
  <p>
    {text} {total}
  </p>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGoodClick} text={"Good"} />
      <Button handleClick={handleNeutralClick} text={"Neutral"} />
      <Button handleClick={handleBadClick} text={"Bad"} />
      <h1> statistics </h1>
      <Display text={"Good"} total={good} />
      <Display text={"Neutral"} total={neutral} />
      <Display text={"Bad"} total={bad} />
    </div>
  );
};

export default App;
