import { useState } from 'react'


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const argMax = (array) => {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [ selected, setSelected] = useState(0)
  const [ points, setPoints ] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnnecdote = () => setSelected(getRandomInt(0, anecdotes.length))
  const handleClickVote = () => {
    const newPoints = [...points]
    newPoints[selected]++
    setPoints(newPoints)
  }

  const mostPointsInd = argMax(points)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {points[selected]} votes<br/>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleNextAnnecdote}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostPointsInd]}<br/>
      has {points[mostPointsInd]} votes<br/>
    </div>
  )
}

export default App
