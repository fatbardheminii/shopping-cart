import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
                aria-label={`Decrease quantity of ${item.title}`}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label={`Increase quantity of ${item.title}`}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
              aria-label={`Remove ${item.title} from cart`}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${getCartTotal()}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
