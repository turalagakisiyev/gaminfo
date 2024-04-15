import React, { useState, useEffect } from 'react';
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        startGame();
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const startGame = () => {
        const newBoard = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0));
        addNewTile(newBoard);
        addNewTile(newBoard);
        setBoard(newBoard);
    };

    const addNewTile = (board) => {
        const emptyCells = [];
        board.forEach((row, rowIndex) => {
            row.forEach((value, colIndex) => {
                if (value === 0) {
                    emptyCells.push({ row: rowIndex, col: colIndex });
                }
            });
        });

        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[randomCell.row][randomCell.col] = Math.random() > 0.5 ? 2 : 4;
        }
    };

    const handleKeyPress = (event) => {
        const key = event.key;
        if (!board) return;

        let newBoard = JSON.parse(JSON.stringify(board)); // Yeni tahta kopyası

        switch (key) {
            case 'ArrowUp':
                newBoard = moveUp(newBoard);
                break;
            case 'ArrowDown':
                newBoard = moveDown(newBoard);
                break;
            case 'ArrowLeft':
                newBoard = moveLeft(newBoard);
                break;
            case 'ArrowRight':
                newBoard = moveRight(newBoard);
                break;
            default:
                return;
        }

        if (!isEqual(board, newBoard)) {
            addNewTile(newBoard);
            setBoard(newBoard);
        }
    };

    const moveUp = (currentBoard) => {
    const newBoard = [...currentBoard];

    for (let col = 0; col < 4; col++) {
        const columnTiles = [];
        for (let row = 0; row < 4; row++) {
            if (newBoard[row][col] !== 0) {
                columnTiles.push(newBoard[row][col]);
            }
        }

        // Merge operation
        for (let i = 0; i < columnTiles.length - 1; i++) {
            if (columnTiles[i] === columnTiles[i + 1]) {
                columnTiles[i] *= 2;
                columnTiles.splice(i + 1, 1);
            }
        }

        // Fill the rest of the column with zeros
        while (columnTiles.length < 4) {
            columnTiles.push(0);
        }

        // Update the board
        for (let i = 0; i < 4; i++) {
            newBoard[i][col] = columnTiles[i];
        }
    }

    return newBoard;
};



    const moveDown = (currentBoard) => {
        const newBoard = [...currentBoard];

        for (let col = 0; col < 4; col++) {
            const columnTiles = [];
            for (let row = 3; row >= 0; row--) {
                if (newBoard[row][col] !== 0) {
                    columnTiles.push(newBoard[row][col]);
                }
            }

            // Birleştirme işlemi
            for (let i = 0; i < columnTiles.length - 1; i++) {
                if (columnTiles[i] === columnTiles[i + 1]) {
                    columnTiles[i] *= 2;
                    columnTiles[i + 1] = 0;
                }
            }

            // Tahtayı güncelle
            for (let i = 3; i >= 0; i--) {
                newBoard[i][col] = columnTiles.pop() || 0;
            }
        }

        return newBoard;
    };


    const moveLeft = (currentBoard) => {
        const newBoard = currentBoard.map(row => {
            const newRow = row.filter(tile => tile !== 0);
            const mergedTiles = [];

            for (let i = 0; i < newRow.length; i++) {
                if (newRow[i] === newRow[i + 1]) {
                    mergedTiles.push(newRow[i] * 2);
                    i++;
                } else {
                    mergedTiles.push(newRow[i]);
                }
            }

            while (mergedTiles.length < 4) {
                mergedTiles.push(0);
            }

            return mergedTiles;
        });

        return newBoard;
    };


    const moveRight = (currentBoard) => {
        const newBoard = currentBoard.map(row => {
            const newRow = row.filter(tile => tile !== 0);
            const mergedTiles = [];

            for (let i = newRow.length - 1; i >= 0; i--) {
                if (newRow[i] === newRow[i - 1]) {
                    mergedTiles.unshift(newRow[i] * 2);
                    i--;
                } else {
                    mergedTiles.unshift(newRow[i]);
                }
            }

            while (mergedTiles.length < 4) {
                mergedTiles.unshift(0);
            }

            return mergedTiles;
        });

        return newBoard;
    };


    const isEqual = (board1, board2) => {
        return JSON.stringify(board1) === JSON.stringify(board2);
    };

    return (
        <div className="game">
            <h1>2048 Game</h1>
            {board && <Board board={board} />}
        </div>
    );
};

export default Game;
