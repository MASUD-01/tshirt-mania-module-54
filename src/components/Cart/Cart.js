import React from 'react';
import './Cart.css'

const Cart = ({ cart, handeleRemoveFromCart }) => {
    //Conditional rendering options
    //1.Element variable
    //2.ternary operator
    //3.&& operator(shorthand)
    let command;
    if (cart.length === 0) {
        command = <div>
            <p>ohh,kipta kinos na ken</p>
            <p>khoroch kor</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Items selected:{cart.length}</h2>

            {
                cart.map(Tshirt => <p
                    key={Tshirt._id}

                >{Tshirt.name} <button onClick={() => handeleRemoveFromCart(Tshirt)}>x</button></p>)
            }
            {command}
            {cart.length === 0 || <p className='orange'>yay, you are buying</p>}
            {cart.length === 3 && <div className='orange'><p>Trigonal</p></div>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
        </div>
    );
};

export default Cart;