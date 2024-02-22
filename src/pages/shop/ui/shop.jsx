import { useContext } from "react";
import { PRODUCTS } from "../../../products";
import { ShopContext } from "../../../context/shop-context";
import { useNavigate } from "react-router-dom";
import cls from "./shop.module.scss";
import { Product } from "../../../components/Product";

const Shop = () => {
    const {popup} = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className={cls.shop}>
            {popup && (
                <div className={cls.openPopup} onClick={() => {navigate('/cart')}}>
                    <p>The product was added to cart!</p>
                </div>
            )}
            <div className={cls.shopTitle}>
                <h1>Shevchuk Shop</h1>
            </div>
            <div className={cls.products}>
                {PRODUCTS.map(product => {
                    return <Product data={product} key={product.id}/>
                })}
            </div>
        </div>
    );
}
 
export default Shop;