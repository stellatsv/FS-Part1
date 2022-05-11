import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
	const newValue = good + 1
    console.log('good now', newValue)
    setGood(newValue)
  }

  const badClick = () => {
	const newValue = bad + 1
    console.log('bad now', newValue)
    setBad(newValue)
  }

  const neutralClick = () => {
	const newValue = neutral + 1
    console.log('neutral now', newValue)
    setNeutral(newValue)
  }

  return (
    <div>
      <h> Give Feedback</h>
		<p>
			<Button handleClick={() => goodClick()} text="Good" />
			<Button handleClick={() => neutralClick()} text="Neutral" />
			<Button handleClick={() => badClick()} text="Bad" />
		</p>
	  <h>Statistics</h>
	  <Statistic text="Good" number={good}></Statistic>
	  <Statistic text="Neutral" number={neutral}></Statistic>
	  <Statistic text="Bad" number={bad}></Statistic>
    </div>
  )
}

const Button = (props) => (
	<button onClick={props.handleClick}>
	  {props.text}
	</button>
)

const Statistic = (props) => (
	<p>{props.text} {props.number}</p>
)
export default App