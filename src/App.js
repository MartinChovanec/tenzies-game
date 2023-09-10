import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"


export default function App() {

  const [dice, setDice] = React.useState(newAllDice)

    function newAllDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
          const randomNumber = Math.floor((Math.random() * 6) + 1)
          newDice.push({id: nanoid(), value: randomNumber, isHeld:false})
        }
        return (newDice)
    }

    function rollDice() {
      setDice(newAllDice ())
    }
    
    const allDiceElements = dice.map(die => {
      return (
          <Die
              key = {die.id}
              value = {die.value}
              isHeld = {die.isHeld}
          />
      )
  })       

    return (
        <main>
            <div className="dice-container">
                {allDiceElements}
            </div>
            <div className="button">
            <button onClick={rollDice}>Roll</button>
            </div>
        </main>
    )
}