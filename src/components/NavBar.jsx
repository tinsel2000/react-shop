import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({basketTotal}) => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="basket">Basket ({basketTotal})</Link>
        </nav>
        <Outlet />
        </>
    )
};

export default NavBar;