function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>My Store</h2>

                <p>
                    Find the latest products at great prices.
                </p>

                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/cart">Cart</a>
                    <a href="/login">Login</a>
                </div>

                <p className="footer-copyright">
                    © 2026 My Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;