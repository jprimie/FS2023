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
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setAll(allClicks.concat(1));
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0));
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat(-1));
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
  };

  const countAverage = () => {
    let average = 0;
    allClicks.forEach((element) => {
      average += element;
    });
    return average / total;
  };

  const countPositive = () => {
    let positiveRatings = 0;
    allClicks.forEach((element) => {
      if (element === 1) positiveRatings++;
    });
    return (positiveRatings / total) * 100;
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
      <Display text={"All"} total={total} />
      <Display text={"Average"} total={countAverage(allClicks)} />
      <Display text={"Positive"} total={countPositive(allClicks) + "%"} />
    </div>
  );
};

export default App;
