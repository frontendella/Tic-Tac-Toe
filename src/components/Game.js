import React, { useState } from 'react';
import { calculateWinner } from './calculateWinner';
import Board from './Board';


const buttonStyle = {
    width: '10rem',
    height: '4em',
    backgroundColor: '#f3eae8',
    padding: '10px',
    marginBottom: '3px',
    border: '2px solid grey',
    borderRadius: '6px',
    color: 'black',
    fontWeight: '800',
    fontSize: '15px',
    lineHeight: '1.5em',
    cursor: 'pointer',

}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        // If user click an occupied square or if game is won, return
        if (squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? '❌' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button style={buttonStyle} onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? '❌' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;