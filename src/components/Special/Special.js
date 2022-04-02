import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>special</h4>
            <p>{ring}</p>
        </div>
    );
};

export default Special;