import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const anecdotesLenght = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const points = new Uint8Array(8);
  const [votes, setVotes] = useState(points);

  const handleRandomAnec = () => {
    let randomAnec = Math.floor(Math.random() * anecdotesLenght);
    setSelected(randomAnec);
    console.log(randomAnec, anecdotesLenght);
  };

  const handleAnecVote = () => {
    const pointsCopy = { ...votes };
    pointsCopy[selected] += 1;
    setVotes(pointsCopy);
  };

  const getMax = () => {
    let max = 0;
    let index = 0;
    for (let i = 0; i < anecdotesLenght; i++) {
      if (votes[i] > max) {
        max = votes[i];
        index = i;
      }
    }
    return index;
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes.</p>
      <button onClick={handleRandomAnec}> next anecdote</button>
      <button onClick={handleAnecVote}> Vote</button>
      <p>
        {anecdotes[getMax()]}. Has {votes[getMax()]} votes
      </p>
    </div>
  );
};

export default App;
