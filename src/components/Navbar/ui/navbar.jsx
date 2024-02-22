import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';
import cls from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div className={cls.links}>
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /></Link>
            </div>
        </div>
    );
}
 
export {Navbar};