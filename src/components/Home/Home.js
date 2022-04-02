import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tShirt, setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);
    const handleAdToCart = (selectedItems) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItems._id);
        if (!exists) {
            const newCart = [...cart, selectedItems];
            setCart(newCart)
        }
        else {
            alert('you alrady added this')
        }

    }
    const handeleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div>
            <div className="home-container">
                <div className="tshirt-container">
                    {
                        tShirt.map(tShirt => <Tshirt
                            key={tShirt._id}
                            handleAdToCart={handleAdToCart}
                            tShirt={tShirt}
                        ></Tshirt>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}
                        handeleRemoveFromCart={handeleRemoveFromCart}
                    ></Cart>
                </div>
            </div>


        </div>
    );
};

export default Home;