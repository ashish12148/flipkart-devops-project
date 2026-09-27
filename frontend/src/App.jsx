import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">Flipkart</div>

        <input
          type="text"
          className="search"
          placeholder="Search for products, brands and more"
        />

        <button className="login-btn">Login</button>

        <button className="cart-btn">
          🛒 Cart
        </button>
      </header>

      {/* Categories */}
      <nav className="categories">
        <span>📱 Mobiles</span>
        <span>💻 Electronics</span>
        <span>👕 Fashion</span>
        <span>🏠 Home</span>
        <span>📺 Appliances</span>
        <span>🛒 Grocery</span>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Flipkart DevOps Store</h1>

        <p>
          Everything you need, at the best prices.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section className="products">

        <h2>Top Deals</h2>

        {loading && (
          <p>Loading products...</p>
        )}

        {error && (
          <p>{error}</p>
        )}

        {!loading && !error && (
          <div className="product-container">

            {products.map((product) => (
              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">
                  {product.category === "Mobiles"
                    ? "📱"
                    : product.name === "Laptop"
                    ? "💻"
                    : product.name === "Headphones"
                    ? "🎧"
                    : "⌚"}
                </div>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                <br />

                <button>
                  Add to Cart
                </button>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default App;