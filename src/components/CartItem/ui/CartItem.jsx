import { useContext } from "react";
import cls from "./CartItem.module.scss";
import { ShopContext } from "../../../context/shop-context";

const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
        <div className={cls.cartItem}>
            <img src={productImage}/>
            <div className={cls.description}>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className={cls.countHandler}>
                    
                    <button onClick={() => {removeFromCart(id)}}> - </button>

                    <input value={cartItems[id]} onChange={(e) => {updateCartItemCount(Number(e.target.value), id)}} />

                    <button onClick={() => {addToCart(id)}}> + </button>
                    
                </div>
            </div>
        </div>
    );
}
 
export {CartItem};