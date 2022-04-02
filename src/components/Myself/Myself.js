import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h1>me</h1>
            <p>house: {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;