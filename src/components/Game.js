import React, { useState } from 'react';
import { calculateWinner } from './calculateWinner.js';
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board]
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : '0'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game;