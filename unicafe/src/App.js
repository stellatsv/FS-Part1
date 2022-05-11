import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClick = () => {
	  const newValue = good + 1
    console.log('good now', newValue)
    setGood(newValue)
    calcAverage(newValue, bad, neutral)
    calcPositive(newValue, bad, neutral)
  }

  const badClick = () => {
	  const newValue = bad + 1
    setBad(newValue)
    calcAverage(good, newValue, neutral)
    calcPositive(good, newValue, neutral)
  }

  const neutralClick = () => {
	  const newValue = neutral + 1
    console.log('neutral now', newValue)
    setNeutral(newValue)
    calcAverage(good, bad, newValue)
    calcPositive(good, bad, newValue)
  }

  const calcAverage = (good, bad, neutral) => {
    setAverage((good - bad) / (good + bad + neutral))
  }

  const calcPositive = (good, bad, neutral) => {
    setPositive(good / (good + bad + neutral))
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
	  <Statistic text="Average" number={average}></Statistic>
	  <Statistic text="Positive" number={positive}></Statistic>
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