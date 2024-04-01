import React from 'react';

const FinalLine = ({finishLineClass}) => {
    console.log(`finish-line ${finishLineClass}`)
    return (
        <div className={`finish-line ${finishLineClass}`}></div>
    );
};
export default FinalLine;
