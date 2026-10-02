import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <main>
                <div className="empty-cart">
                    <h1>Your Cart</h1>
                    <p>Your cart is empty.</p>
                </div>
            </main>
        );
    }

    return (
        <main>
            <h1>Your Cart</h1>

            <div className="cart-container">
                {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                            />
                        </Link>

                        <div className="cart-item-info">
                            <Link
                                to={`/products/${item.id}`}
                                className="cart-product-title"
                            >
                                <h3>{item.title}</h3>
                            </Link>

                            <p className="cart-item-price">
                                ${item.price}
                            </p>

                            <div className="quantity-controls">
                                <button
                                    type="button"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    −
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    type="button"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            <p>
                                Item Total: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button
                                type="button"
                                className="remove-button"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-total">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
        </main>
    );
}

export default Cart;