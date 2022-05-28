import "./styles.css";
import { useEffect, useState } from 'react'


const App = () =>{
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']
  
  const handleClick = (value) => {
  setUserChoice(value) 
  generateComputerChoice()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  setComputerChoice(randomChoice)
}

useEffect(() => {
  checkResult()
}, [computerChoice, userChoice])
  
   const checkResult = () =>{
  let bothChoices = (userChoice + computerChoice)
  console.log("bothChoices", bothChoices)
  
 { bothChoices ==='scissorspaper'&& 'rockscissors' && 'paperrock' ? setResult('YOU WIN!')
  :bothChoices === 'paperscissors' && 'rockscissors' && 'paperrock'? setResult('YOU LOSE!')
  :setResult('ITS A DRAW!')
}
  }

  return (
    <div>
      <h1>User choice is: {userChoice} </h1>
      <h1>Computer choice is:{computerChoice} </h1>

     {choices.map ((choice, index) =>  <button key={index} onClick={()=>handleClick(choice)}> {choice} </button>)} 
     <h1>{result}</h1>
    </div>
  )
}
export default App