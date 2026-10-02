import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartItems } = useCart();

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav>
            <h2>
                <Link to="/">My Store</Link>
            </h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({cartCount})</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;