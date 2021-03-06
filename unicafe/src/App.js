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
    setNeutral(newValue)
    calcAverage(good, bad, newValue)
    calcPositive(good, bad, newValue)
  }

  const calcAverage = (good, bad, neutral) => {
    setAverage((good - bad) / (good + bad + neutral))
  }

  const calcPositive = (good, bad, neutral) => {
    setPositive(good / (good + bad + neutral) + "%")
  }

  return (
    <div>
      <h> Give Feedback</h>
		<p>
			<Button handleClick={() => goodClick()} text="Good" />
			<Button handleClick={() => neutralClick()} text="Neutral" />
			<Button handleClick={() => badClick()} text="Bad" />
		</p>
    <p>Statistics</p>    
    <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} />
    </div>
  )
}

const Button = (props) => (
	<button onClick={props.handleClick}>
	  {props.text}
	</button>
)

const Statistics = (props) => {
  console.log('neutral now', props.neutral)
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {   
    return (
      <div>
        <p>No feedback given</p>      
      </div>
    )
  }
  return ( <div>
    <table>
    <StatisticLine text="Good" value ={props.good} />
    <StatisticLine text="Neutral" value ={props.neutral}/>
    <StatisticLine text="Bad" value ={props.bad} />
    <StatisticLine text="Average" value ={props.average} />
    <StatisticLine text="Positive" value ={props.positive} />
    </table>   
    </div> )
  
}

const StatisticLine = (props) => (
  <tr>
    <td> {props.text} </td> <td>{props.value}</td>
  </tr>
)
export default App