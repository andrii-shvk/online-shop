import { PRODUCTS } from "../../products";
import {Product} from "./product";
import "./shop.css";

const Shop = () => {
    return (
        <div className="shop">
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