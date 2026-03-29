import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Controls from "../components/Controls";

function Catalog({ cart, addToCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="container">

      <h1>Product Catalog</h1>

      {/* 🛒 Cart Button */}
      <Link to="/cart" className="cart-btn">
        🛒 Cart ({cart.length})
      </Link>

      <Controls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <ProductList products={paginated} addToCart={addToCart} />

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span> Page {page} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>

    </div>
  );
}

export default Catalog;