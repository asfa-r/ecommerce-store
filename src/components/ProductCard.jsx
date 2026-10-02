import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart, cartMessage } = useCart();

    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                />
            </Link>

            <Link
                to={`/products/${product.id}`}
                className="product-title-link"
            >
                <h3>{product.title}</h3>
            </Link>

            <p className="product-price">
                ${product.price}
            </p>

            <p className="product-rating">
                ⭐ {product.rating}
            </p>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

            {cartMessage === product.id && (
                <p className="cart-message">
                    ✓ Added to cart!
                </p>
            )}
        </div>
    );
}

export default ProductCard;