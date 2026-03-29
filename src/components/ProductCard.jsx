import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">

      <img src={product.image} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>View</Link>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;