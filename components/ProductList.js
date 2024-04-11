// ProductList.js
import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ProductList;
