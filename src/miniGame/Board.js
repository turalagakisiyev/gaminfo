import React from 'react';
import Tile from './Tile';
import './Board.css'

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <Tile key={`${rowIndex}-${colIndex}`} value={value} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
