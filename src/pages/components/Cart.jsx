import { clearCart, removeItemFromCart, updateQuantity } from "@/redux/slice";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selects Items stored in cart
  const cartItem = useSelector((state) => state.cart.items);

  // Holds cart Items
  const [cartData, setCartData] = useState(cartItem);

  useEffect(() => {
    setCartData(cartItem);
  }, [cartItem]);

  const handleQuantityChange = (id, value) => {
    const quantity = value < 1 ? 1 : Number(value);
    dispatch(updateQuantity({ id, quantity }));
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
            <div key={item.id} className="cart-item">
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItemFromCart(item))}
              >
                <ImCross />
              </button>
              <div className="item-info">
                <img src={item.thumbnail} alt="item.title" />
                <div className="item-detail">
                  <h3>{item.title}</h3>
                  <p>{item.brand}</p>
                  <div className="item-price">
                    Rs.{" "}
                    {(
                      Number(item.price.toString().replace(/,/g, "")) *
                      (item.quantity || 1)
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
                    handleQuantityChange(item.id, e.target.value)
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <h4 className="null-item-case">No items in your cart!</h4>
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
