import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart, cartMessage } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProduct() {
            try {
                setLoading(true);
                setError("");

                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                setError("Failed to load product. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (loading) {
        return (
            <main>
                <p className="status-message">
                    Loading product...
                </p>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <p className="error-message">
                    {error}
                </p>
            </main>
        );
    }

    return (
        <main>
            <div className="product-details">
                <div>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </div>

                <div>
                    <h1>{product.title}</h1>

                    <p>{product.description}</p>

                    <h2>${product.price}</h2>

                    <p>⭐ {product.rating}</p>

                    <p>Category: {product.category}</p>

                    <p>Stock: {product.stock}</p>

                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                    {cartMessage === product.id && (
                        <p className="cart-message">
                            ✓ Added to cart!
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;