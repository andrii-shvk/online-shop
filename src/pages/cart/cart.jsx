import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./cartItem";
import "./cart.css";
import {useNavigate} from 'react-router-dom';
import Button from "../../ui/button/button";

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map(product => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>

                    <Button onClick={() => {navigate('/')}}>Continue Shopping</Button>
                    <Button>Checkout</Button>

                </div> ) : (
                <div className="emptyCheckOut">
                    <h1>Your Cart is empty!</h1>

                    <Button onClick={() => {navigate('/')}}>Continue Shopping</Button>
                </div>
                )
            }
        </div>
    );
}
 
export default Cart;