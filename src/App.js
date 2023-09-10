import React from "react"
import Die from "./components/Die"


export default function App() {

  const [numbers, setNumbers] = React.useState(allNewDiceNumbers)
  console.log(numbers)



    function allNewDiceNumbers() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.floor((Math.random() * 6) + 1))
        }
        return (newDice)
    }
    
    function rollDice() {
      setNumbers(allNewDiceNumbers ())
    }
    
    const allDiceElemennts = numbers.map(finalValue => {
      return (
          <Die
              value={finalValue}
              {...finalValue}
          />
      )
  })       

    return (
        <main>
            <div className="dice-container">
                {allDiceElemennts}
            </div>
            <div className="button">
            <button onClick={rollDice}>Roll</button>
            </div>
        </main>
    )
}