import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>welcome tshirt mania</h2>
            <nav>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>OrderReview</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>

            </nav>
        </div>
    );
};

export default Header;