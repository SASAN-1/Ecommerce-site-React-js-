import { fetchProducts } from '@/redux/product';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Bikes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.items);

  useEffect(() => {
    dispatch(fetchProducts("bikes"));
  },[dispatch]);

  return (
    <>
      <div className="product-container bike-container">
        {
          productData?.map((item) => (
            <div className="product-card"
            key={item.id}
            onClick={() => navigate(`/productDetails/${item.slug}`)}
            >
              <h2 className="product-name">
                {item.title}
              </h2>
              <img src={item.thumbnail} alt={item.title} className="product-img"/>
              <p className="product-price">Rs. {item.price}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Bikes