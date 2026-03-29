import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;