// Oferta Page with products and gallery

import React, { useState } from 'react';
import './Oferta.css';

const Oferta = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const products = [
        {
            id: 1,
            name: "Rustic Wooden House",
            description: "Beautiful frame house with traditional design",
            price: "$50,000",
            images: [
                "/images/house1-1.jpg",
                "/images/house1-2.jpg",
                "/images/house1-3.jpg"
            ]
        },
        {
            id: 2,
            name: "Modern Frame House",
            description: "Contemporary wooden frame design",
            price: "$65,000",
            images: [
                "/images/house2-1.jpg",
                "/images/house2-2.jpg"
            ]
        },
        {
            id: 3,
            name: "Eco-Friendly Cottage",
            description: "Sustainable wooden frame cottage",
            price: "$45,000",
            images: [
                "/images/house3-1.jpg",
                "/images/house3-2.jpg",
                "/images/house3-3.jpg",
                "/images/house3-4.jpg"
            ]
        }
    ];

    return (
        <div className="oferta-container">
            <h1>Oferta</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-gallery">
                            <img src={product.images[selectedImageIndex]} alt={product.name} />
                            <div className="gallery-controls">
                                {product.images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === selectedImageIndex ? 'active' : ''}`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Oferta;