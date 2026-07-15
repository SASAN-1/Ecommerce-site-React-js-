import { fetchProducts } from "@/redux/product";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router";

const Bikes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchData } = useOutletContext();

  // Selects Bikes data
  const productData = useSelector((state) => state.product.items);

  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchData.toLowerCase()),
  );

  //Fetches Bikes Data
  useEffect(() => {
    dispatch(fetchProducts("bikes"));
  }, [dispatch]);

  const dataToShow = searchData?.length > 0 ? filteredProducts : productData;

  return (
    <>
      <div className="product-container bike-container">
        {dataToShow.length > 0 ? (
          dataToShow?.map((item) => (
            <div
              className="product-card"
              key={item.id}
              onClick={() => navigate(`/productDetails/${item.slug}`)}
            >
              <h2 className="product-name">{item.title}</h2>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-img"
              />
              <p className="product-price">Rs. {item.price}</p>
            </div>
          ))
        ) : (
          <p className="error-message">No Bike found.</p>
        )}
      </div>
    </>
  );
};

export default Bikes;
