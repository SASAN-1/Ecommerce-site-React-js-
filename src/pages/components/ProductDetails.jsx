import { addItemToCart, removeItemFromCart } from "@/redux/slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const cartItem = useSelector((state) => state.cart.items);
  const [product, setProduct] = useState(null);

  const itemAdded = () => {
    dispatch(addItemToCart(product));
  };

  const itemRemoved = () => {
    dispatch(removeItemFromCart(product));
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
      console.log(found);
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
              <div className="p-des">
                <h3 className="des-tag">Description</h3>
                <p className="des">{product.description}</p>
              </div>
              <hr />
              {cartItem.find((cart) => cart.id === product.id) ? (
                <button className="rfc-btn" onClick={itemRemoved}>
                  Remove from cart
                </button>
              ) : (
                <button className="atc-btn" onClick={itemAdded}>
                  Add to cart
                </button>
              )}
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
