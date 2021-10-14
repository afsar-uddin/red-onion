import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="banner">
            <img src="https://i.ibb.co/17KQpw5/bannerbackground.png" alt="home banner" />
            <h1>Best food waiting for your belly</h1>
            <div className="search">
                <input type="text" placeholder="Search your favourite foods" />
                <button><FaSearch /></button>
            </div>
        </div>
    );
};

export default Banner;