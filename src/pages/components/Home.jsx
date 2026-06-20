import {
  cover,
  exp1,
  exp2,
  exp3,
  exp4,
  exp5,
  exp6,
  exp7,
} from "@/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/product";
import { Link, useNavigate } from "react-router";

// Explore container 1 details
const expContainer1Items = [
  {
    href: "/shop/bikes",
    image: exp1,
    title: "BIKES",
  },
  {
    href: "/shop/parts",
    image: exp2,
    title: "PARTS",
  },
  {
    href: "/shop/gears",
    image: exp3,
    title: "GEAR",
  },
  {
    href: "",
    image: exp4,
    title: "OUTLET",
  },
];

// Explore container 2 details
const expContainer2Items = [
  {
    href: "",
    image: exp5,
    title: "SERVICES",
  },
  {
    href: "",
    image: exp6,
    title: "BLOG",
  },
  {
    href: "",
    image: exp7,
    title: "EVENTS",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calls the fetch function in product.js
  useEffect(() => {
    dispatch(fetchProducts("homeProducts"));
  }, []);

  // Selects the data
  const productData = useSelector((state) => state.product.items);

  return (
    <main className="home-body">
      <div className="home-main-container">
        <img src={cover} alt="cover-img" className="main-img" />
        <h1 className="home-heading">
          FREEDOM <br /> IN MOTION.
        </h1>
        <p className="home-subheading">
          YOUR SHOP FOR BICYCLES <br /> IN NEPAL
        </p>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-section">
        <h1 className="new-arrivals-title">NEW ARRIVALS</h1>

        <div className="product-container home-product-container">
          {productData?.map((item) => (
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
              <p className="product-price">Rs.{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore-section">
        <h1 className="explore-title">EXPLORE</h1>

        <div className="explore-container1">
          {expContainer1Items.map((item, index) => (
            <Link key={index} to={item.href} className="explore-card">
              <img src={item.image} alt="explore-img" />
              <h1 className="title">{item.title}</h1>
            </Link>
          ))}
        </div>

        <div className="explore-container2">
          {expContainer2Items.map((item, index) => (
            <Link key={index} className="explore-card">
              <img src={item.image} alt="explore-img" />
              <h1 className="title">{item.title}</h1>
            </Link>
          ))}
        </div>
      </div>

      {/* Sign Up container */}
      <div className="signup-container">
        <div className="signup-content">
          <p>Sign up for latest news and updates.</p>
          <form className="signup-form">
            <input
              type="email"
              placeholder="EMAIL"
              id="email-2"
              className="email-input"
            />
            <button className="signup-btn">SIGN UP</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
