import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import { PRODUCTS } from "../../../products";
import {useNavigate} from 'react-router-dom';
import cls from "./cart.module.scss";
import { CartItem } from "../../../components/CartItem";
import { Button } from "../../../ui/button";

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className={cls.cart}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className={cls.cartItems}>
                {PRODUCTS.map(product => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className={cls.checkout}>
                    <p>Subtotal: ${totalAmount}</p>

                    <Button onClick={() => {navigate('/')}}>Continue Shopping</Button>
                    <Button>Checkout</Button>

                </div> ) : (
                <div className={cls.emptyCheckOut}>
                    <h1>Your Cart is empty!</h1>

                    <Button onClick={() => {navigate('/')}}>Continue Shopping</Button>
                </div>
                )
            }
        </div>
    );
}
 
export default Cart;