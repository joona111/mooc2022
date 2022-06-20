import { useState } from "react"

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const StatisticsLine = ({text, value}) => {

    return (
     <tr> 
      <td>{text}</td> 
      <td>{value}</td>
     
     
     </tr>
    )
  }
  const Statistics = () => {
    return(
      <table>
        <tbody>
      <StatisticsLine text ="good" value={good} ></StatisticsLine>
      <StatisticsLine text = "neutral" value ={neutral}>  </StatisticsLine>
      <StatisticsLine text = "bad" value = {bad}></StatisticsLine>
      <StatisticsLine text = "all" value = {good+neutral+bad}>all </StatisticsLine>
      <StatisticsLine text = "average" value = {(good-bad)/(good+bad+neutral)}> </StatisticsLine>
      <StatisticsLine text = "positive" value = {good*100/(good+neutral+bad)+"%"}></StatisticsLine>
      </tbody>
      </table>
    )
  }
  const Button = ({name,set,value}) => {

    return(
      <button onClick={()=>set(value+1)}>{name}</button>
    )
  }
  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button name = "good" set = {setGood} value = {good} ></Button>
      <Button name = "neutral" set = {setNeutral} value = {neutral} ></Button>
      <Button name = "bad" set = {setBad} value = {bad} ></Button>
      <Statistics></Statistics>
    </div>
  );
}

export default App;
