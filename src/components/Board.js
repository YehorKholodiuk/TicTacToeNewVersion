import React from 'react';
import Square from './Square';
import FinalLine from "./FinalLine";

const style = {
    border: '4px solid teal',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    margin: 'auto',
}

const boardWrapper = {
    width: '306px',
    height: '306px',
    margin: '0 auto',
    position: 'relative',
}

const Board = ({squares, onClick, finishLineClass, winner}) => (
    <div style={boardWrapper}>

        <div style={style} className={winner && 'blocked-events'}>
            {squares.map((square, i) => (
                <Square

                    key={i}
                    value={square}
                    onClick={() => onClick(i)}
                />
            ))}
        </div>
        <FinalLine finishLineClass={finishLineClass}/>
    </div>
)

export default Board;
