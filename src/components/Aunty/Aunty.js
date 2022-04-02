import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleAuntymagic = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <div>
            <h1>aunty</h1>
            <p>house:{house}</p>
            <button onClick={handleAuntymagic}> aunty magic</button>
        </div >
    );
};

export default Aunty;