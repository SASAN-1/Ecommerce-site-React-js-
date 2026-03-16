import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaYoutube, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-content">
          <p>Sign up for latest news and updates.</p>
            <form action="" className="signup-form">
              <input type="email" placeholder="EMAIL" id="email-2" className="email-input"/>
              <input type="submit" value="SIGN UP" className="signup-btn"/>
            </form>
        </div>
      </div>  
      <div className="footer-body">
        <div className="footer-content">
          <div className="footer-nav">
            <div className="footer-nav-links footer-nav-link">
              <a href="">
                <div className="footer-large-text">BIKES</div>
              </a>
              <a href="">
                <div className="footer-large-text">GEAR</div>
              </a>
              <a href="">
                <div className="footer-large-text">PARTS</div>
              </a>
              <a href="">
                <div className="footer-large-text">BRANDS</div>
              </a>
              <a href="">
                <div className="footer-large-text">OUTLET</div>
              </a>
            </div>
            <div className="footer-nav-item">
              <h3 className="footer-heading-small">EXPLORE</h3>
              <div className="footer-nav-links">
                <a href="">
                  <div className="footer-small-text">About Us</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Services</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Blog</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Events</div>
                </a>
              </div>
            </div>
            <div className="footer-nav-item">
              <h3 className="footer-heading-small">SUPPORT</h3>
              <div className="footer-nav-links">
                <a href="">
                  <div className="footer-small-text">FAQs</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Orders & Shippings</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Returns & Refunds</div>
                </a>
                <a href="">
                  <div className="footer-small-text">Warranty & Repair</div>
                </a>
              </div>
            </div>
            <div className="footer-nav-social">
              <div className="footer-social-item">
                <a href="" className="fb-icon">
                  <FaFacebook />
                </a>
              </div>
              <div className="footer-social-item">
                <a href="" className="insta-icon">
                  <FaInstagram />
                </a>
              </div>
              <div className="footer-social-item">
                <a href="" className="x-icon">
                  <FaX />
                </a>
              </div>
              <div className="footer-social-item">
                <a href="" className="yt-icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
