import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true);
                setError("");

                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError("Failed to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    const categories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main>
            <h1>All Products</h1>

            {loading && (
                <p className="status-message">
                    Loading products...
                </p>
            )}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>

                    <div className="category-container">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={
                                    selectedCategory === category
                                        ? "category-button active"
                                        : "category-button"
                                }
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <p className="no-products">
                            No products found.
                        </p>
                    )}
                </>
            )}
        </main>
    );
}

export default Products;