import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ statistics }) => {
  return (
    <table>
      <tbody>
        <StatisticLine statistic={statistics.good} />
        <StatisticLine statistic={statistics.neutral} />
        <StatisticLine statistic={statistics.bad} />
        <StatisticLine statistic={statistics.all} />
        <StatisticLine statistic={statistics.average} />
        <StatisticLine statistic={statistics.positive} />
      </tbody>
    </table>
  );
};
const StatisticLine = ({ statistic }) => {
  return (
    <tr>
      <td>{statistic.text} </td>
      <td>{statistic.value} </td>
    </tr>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

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
    return (positiveRatings / total) * 100 + "%";
  };

  const statistics = {
    good: {
      text: "Good",
      value: good,
    },
    neutral: {
      text: "Neutral",
      value: neutral,
    },
    bad: {
      text: "Bad",
      value: bad,
    },
    all: {
      text: "All",
      value: total,
    },
    average: {
      text: "Average",
      value: countAverage(),
    },
    positive: {
      text: "Positive",
      value: countPositive(),
    },
  };

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

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGoodClick} text={"Good"} />
      <Button handleClick={handleNeutralClick} text={"Neutral"} />
      <Button handleClick={handleBadClick} text={"Bad"} />
      <h1> statistics </h1>
      {allClicks !== 0 && <Statistics statistics={statistics} />}
      {allClicks === 0 && <p>No feedback given</p>}
    </div>
  );
};

export default App;
