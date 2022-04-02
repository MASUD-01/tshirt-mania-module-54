import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('ringgggg');

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'diamond'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse, ornament]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>

                <p>House:{house}<button onClick={handleBuyAHouse}>buy a house</button></p>

                <section style={{ display: "flex" }}>
                    <Father house={house} className='father'></Father>
                    <Aunty house={house}></Aunty>
                    <Uncle house={house}></Uncle>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;