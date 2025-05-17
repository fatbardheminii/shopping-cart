import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaStar, FaHeadset } from "react-icons/fa";
import { getProducts } from "../api/api";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const products = await getProducts();
        setFeaturedProducts(products.slice(0, 3)); // Show 3 products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Store</h1>
        <p>Discover amazing products at great prices!</p>
        <Link to="/shop" className="cta-button">
          Shop Now
        </Link>
      </section>
      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaShippingFast />
            <h3>Free Shipping</h3>
            <p>Enjoy free shipping on all orders over $50.</p>
          </div>
          <div className="feature-item">
            <FaStar />
            <h3>Quality Products</h3>
            <p>Shop our curated selection of high-quality items.</p>
          </div>
          <div className="feature-item">
            <FaHeadset />
            <h3>24/7 Support</h3>
            <p>Our team is here to assist you anytime.</p>
          </div>
        </div>
      </section>
      <section className="featured">
        <h2>Featured Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <Link to="/shop">View More</Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
