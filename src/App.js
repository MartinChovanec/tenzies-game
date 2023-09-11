import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
    const [dice, setDice] = React.useState(newAllDice);

    function newAllDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({ id: nanoid(), value: Math.floor(Math.random() * 6 + 1), isHeld: false });
        }
        return newDice;
    }

    function rollDice() {
        setDice((prevDice) =>
            prevDice.map((die) => {
                return die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) };
            })
        );
    }

    function holdDice(id) {
        setDice((prevDice) =>
            prevDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }

    const allDiceElements = dice.map((die) => {
        return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />;
    });

    return (
        <main>
            <h1 style={{ color: "red" }}> Tenzies game - The project is not finished yet!</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">{allDiceElements}</div>
            <div className="button-roll">
                <button onClick={rollDice}>Roll</button>
            </div>
        </main>
    );
}
