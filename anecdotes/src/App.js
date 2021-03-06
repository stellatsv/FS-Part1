import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setVoted] = useState(new Array(6).fill(0))

  const nextAnecdote = () => {
    const index = generateRandom()
    setSelected(index)
  }

  const setVote = () => {
    const index = selected
    const copy = [...points]
    copy[index]+=1
    setVoted(copy)
  }

  const getMaxAnecdote = () => {
    const max = Math.max(...points)
    const index = points.indexOf(max)
    return anecdotes[index]
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>Votes: {points[selected]}</p>
      <p></p>      
      <Button onClick={() => nextAnecdote()} text="next anecdote"/>
      <Button onClick={() => setVote()} text="vote"/>
      <p>Anecdote with most votes:</p>
      <p>{getMaxAnecdote()}</p>
    </div>
  )
}

function generateRandom(){
  let rand = Math.random() * 6;
  rand = Math.floor(rand); 
  return rand;
}

const Button = (props) => (
  <button onClick={props.onClick}> {props.text}</button>
)


export default App