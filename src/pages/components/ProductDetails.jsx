import {
  addItemToCart,
  removeItemFromCart,
  updateQuantity,
} from "@/redux/slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const cartItem = useSelector((state) => state.cart.items);
  const [product, setProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState("M");

  const [quantity, setQuantity] = useState(1);

  const cartProduct = product
    ? cartItem.find(
        (item) => item.id === product.id && item.size === selectedSize,
      )
    : null;

  useEffect(() => {
    if (cartProduct) {
      setQuantity(cartProduct.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartProduct]);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const itemAdded = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
        size: selectedSize,
      }),
    );

    toast.success("Item added to the cart.");
  };

  const itemRemoved = () => {
    dispatch(
      removeItemFromCart({
        id: product.id,
        size: selectedSize,
      }),
    );
    toast.error("Item removed from cart.");
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      // List all end points
      const endpoints = ["homeProducts", "parts", "bikes", "gears"];

      // Fetch all products
      const allProducts = await Promise.all(
        endpoints.map(async (ep) => {
          const res = await fetch(`http://localhost:3000/${ep}`);
          return res.json();
        }),
      );

      // Flatten array of arrays
      const combined = allProducts.flat();

      // Find product by slug
      const found = combined.find((p) => p.slug === slug);
      setProduct(found);
    };

    fetchAllProducts();
  }, [slug]);
  return (
    <>
      {product ? (
        <div className="product-details-section">
          <div className="product-details-container">
            <img src={product.thumbnail} alt={product.title} />
            <div className="p-info">
              <h1 className="p-name">{product.title}</h1>
              <div className="p-price">
                <h3 className="og-price">
                  <s>{product.originalPrice}</s>
                </h3>
                <h3 className="dis-price">Rs. {product.price}</h3>
              </div>
              <hr />
              {/* <ul className="size-container">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul> */}
              <ul className="size-container">
                {sizes.map((size) => (
                  <li
                    key={size}
                    className={`${selectedSize === size ? "active-size" : ""} ${
                      cartProduct ? "disabled-size" : ""
                    }`}
                    onClick={() => {
                      if (!cartProduct) {
                        setSelectedSize(size);
                      }
                    }}
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <hr />
              <div className="p-des">
                <h3 className="des-tag">Description</h3>
                <p className="des">{product.description}</p>
              </div>
              <hr />
              <div className="btns-qntity">
                {cartItem.find((cart) => cart.id === product.id) ? (
                  <button className="rfc-btn" onClick={itemRemoved}>
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="atc-btn"
                    onClick={() =>
                      isLoggedIn
                        ? itemAdded()
                        : (navigate("/login"),
                          toast("Please login before purchasing"))
                    }
                  >
                    Add to cart
                  </button>
                )}
                <input
                  type="number"
                  min="1"
                  className="q-value"
                  value={quantity}
                  disabled={cartProduct}
                  onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value));
                    setQuantity(value);

                    if (cartProduct) {
                      dispatch(
                        updateQuantity({
                          id: product.id,
                          size: selectedSize,
                          quantity: value,
                        }),
                      );
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </>
  );
};

export default ProductDetails;
