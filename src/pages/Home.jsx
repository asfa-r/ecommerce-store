import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <main>
            <section className="home-intro">
                <h1>Welcome to Our Store</h1>
                <p>Find the latest products at great prices.</p>
            </section>

            <h2>Products</h2>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    );
}

export default Home;