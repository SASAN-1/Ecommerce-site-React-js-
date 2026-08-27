import { clearCart, removeItemFromCart, updateQuantity } from "@/redux/slice";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selects Items stored in cart
  const cartData = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, size, value) => {
    const quantity = Math.max(1, Number(value));

    dispatch(
      updateQuantity({
        id,
        size,
        quantity,
      }),
    );
  };

  const handleCheckOut = () => {
    toast.success("Order placed successfully");
    dispatch(clearCart());
    localStorage.removeItem("cart");
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <button
            className="nav-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            return Home
          </button>
        </div>
        <hr />
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItemFromCart(item))}
              >
                <ImCross />
              </button>
              <div className="item-info">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-detail">
                  <h3>{item.title}</h3>
                  <p>{item.brand}</p>

                  <p>
                    <strong>Size:</strong> {item.size}
                  </p>

                  <div className="item-price">
                    Rs.
                    {(
                      Number(item.price.toString().replace(/,/g, "")) *
                      item.quantity
                    ).toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="item-quantity">
                <input
                  className="q-value"
                  type="number"
                  name="quantity"
                  value={item.quantity ? item.quantity : 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, item.size, e.target.value)
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <div className="null-item-case">
              <h4>No items in your cart!</h4>
              <button
                className="null-case-btn"
                onClick={() => navigate("/shop")}
              >
                Add item
              </button>
            </div>
          </div>
        )}
        {cartData.length > 0 && (
          <div className="total-price">
            <h3>
              Total price: Rs.{" "}
              {cartData
                .reduce(
                  (sum, item) =>
                    sum +
                    Number(item.price.toString().replace(/,/g, "")) *
                      (item.quantity || 1),
                  0,
                )
                .toLocaleString("en-IN")}
            </h3>
            <button className="checkOut-btn" onClick={handleCheckOut}>
              CheckOut
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
