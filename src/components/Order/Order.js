import React from 'react';
import "./Order.css";
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    };

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem product={product} handleRemoveProduct={handleRemoveProduct} key={product.id}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate("/inventory")}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;