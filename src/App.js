import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
    const [dice, setDice] = React.useState(newAllDice);
    const [won, setWon] = React.useState(false);

    React.useEffect(() => {
        const allIsHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allHasSameValue = dice.every((die) => die.value === firstValue);
        if (allIsHeld && allHasSameValue) {
            setWon(true);
            console.log("You won! Congratulations");
        }
    }, [dice]);

    function newAllDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({ id: nanoid(), value: Math.floor(Math.random() * 6 + 1), isHeld: false });
        }
        return newDice;
    }

    function rollDice() {
        if (!won) {
            setDice((prevDice) =>
                prevDice.map((die) => {
                    return die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) };
                })
            );
        } else {
            setWon(false);
            setDice(newAllDice());
        }
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
            {won && <Confetti />}
            <h1> Tenzies game</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">{allDiceElements}</div>
            <div className="p-4">
                <button className="roll-button" onClick={rollDice}>{won ? "New Game" : "Roll"}</button>
            </div>
        </main>
    );
}
