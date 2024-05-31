import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cart-items-format-main cart-items-format">
                                <img src={product.image} alt={product.name} className='cart-icon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <button className='cart-items-quantity'>{cartItems[product.id]}</button>
                                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <img className='cart-items-remove-icon' src={removeIcon} alt="remove" onClick={() => removeFromCart(product.id)} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promo-code">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-items-promo-box">
                        <input type="text" placeholder = 'promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartItems;

