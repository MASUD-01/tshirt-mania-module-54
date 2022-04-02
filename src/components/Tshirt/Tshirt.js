import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handleAdToCart, tShirt }) => {
    const { name, picture, price } = tShirt
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAdToCart(tShirt)}>add to cart</button>
        </div>
    );
};

export default Tshirt;