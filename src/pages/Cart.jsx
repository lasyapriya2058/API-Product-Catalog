import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">

      <h1>Your Cart</h1>

      <Link to="/">⬅ Back to Products</Link>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} />
            <span>{item.title}</span>
            <span>${item.price}</span>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <h3>Total: ${total.toFixed(2)}</h3>
      )}

    </div>
  );
}

export default Cart;0