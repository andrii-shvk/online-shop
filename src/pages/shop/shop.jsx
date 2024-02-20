import { useContext } from "react";
import { PRODUCTS } from "../../products";
import {Product} from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const {popup} = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className="shop">
            {popup && (
                <div className="openPopup" onClick={() => {navigate('/cart')}}>
                    <p>The product was added to cart!</p>
                </div>
            )}
            <div className="shopTitle">
                <h1>Shevchuk Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map(product => {
                    return <Product data={product} key={product.id}/>
                })}
            </div>
        </div>
    );
}
 
export default Shop;