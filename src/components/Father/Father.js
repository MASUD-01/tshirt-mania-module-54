import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house, ornament] = useContext(RingContext)
    return (
        <div>
            <h4>father</h4>
            <p>house:{house}</p>
            <p>house:{ornament}</p>
            <div style={{ display: "flex" }}>

                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;