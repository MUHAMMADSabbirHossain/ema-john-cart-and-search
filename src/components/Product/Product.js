import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Product.css"
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    // console.log(props);
    // console.log(props.product);
    // const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;