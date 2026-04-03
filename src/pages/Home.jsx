import cover from "../assets/cover.png";
import exp1 from "../assets/exp1.png"
import exp2 from "../assets/exp2.png"
import exp3 from "../assets/exp3.png"
import exp4 from "../assets/exp4.png"
import exp5 from "../assets/exp5.png"
import exp6 from "../assets/exp6.png"
import exp7 from "../assets/exp7.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/product";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.items);

  useEffect(() => {
    dispatch(fetchProducts("homeProducts"));
  }, [dispatch]);

  return (
    <div className="home-body">
      <div className="home-main-container">
        <img src={cover} alt="cover-img" className="main-img"/>
        <h1 className="home-heading">
          FREEDOM <br /> IN MOTION.
        </h1>
        <p className="home-subheading">
          YOUR SHOP FOR BICYCLES <br /> IN NEPAL
        </p>
      </div>

      <div className="new-arrivals-section">
        <h1 className="new-arrivals-title">
          NEW ARRIVALS
        </h1>
        <div className="product-container">
          {
            productData?.map((item) => (
              <div 
              className="product-card" 
              key={item.id}
              onClick={() => navigate(`/productDetails/${item.slug}`)}
              >
                <h2 className="product-name">
                  {item.title}
                </h2>
                <img src={item.thumbnail} alt={item.title} className="product-img"/>
                <p className="product-price">Rs.{item.price}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="explore-section">
        <h1 className="explore-title">
          EXPLORE
        </h1>
        <div className="explore-container1">
          <Link to={"/shop/bikes"}  className="explore-card img-1">
            <img src={exp1} alt="explore-img" />
            <h1 className="title">BIKES</h1>
          </Link>
          <Link to={"/shop/parts"} className="explore-card img-2">
            <img src={exp2} alt="explore-img" />
            <h1 className="title">PARTS</h1>
          </Link>
          <Link to={"/shop/gears"} className="explore-card img-3">
            <img src={exp3} alt="explore-img" />
            <h1 className="title">GEAR</h1>
          </Link>
          <Link className="explore-card img-4">
            <img src={exp4} alt="explore-img" />
            <h1 className="title">OUTLET</h1>
          </Link>
        </div>
        <div className="explore-container2">
          <Link className="explore-card img-5">
            <img src={exp5} alt="explore-img" />
            <h1 className="title">SERVICES</h1>
          </Link>
          <Link className="explore-card img-6">
            <img src={exp6} alt="explore-img" />
            <h1 className="title">BLOG</h1>
          </Link>
          <Link className="explore-card img-7">
            <img src={exp7} alt="explore-img" />
            <h1 className="title">Events</h1>
          </Link>
        </div>
      </div>
      <div className="signup-container">
        <div className="signup-content">
          <p>Sign up for latest news and updates.</p>
            <form action="" className="signup-form">
              <input type="email" placeholder="EMAIL" id="email-2" className="email-input"/>
              <input type="submit" value="SIGN UP" className="signup-btn"/>
            </form>
        </div>
      </div>  
    </div>
  );
};

export default Home;
