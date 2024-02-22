import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import cls from "./Product.module.scss";

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className={cls.product}>
            <img src={productImage} />
            <div className={cls.description}>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className={cls.addToCartBttn} onClick={() => {addToCart(id)}}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
        </div>
    );
}
 
export {Product};