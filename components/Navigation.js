import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="sticky-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#co">Co</a></li>
                <li><a href="#dla-kogo">Dla Kogo</a></li>
                <li><a href="#po-co">Po Co</a></li>
                <li><a href="#oferta">Oferta</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;