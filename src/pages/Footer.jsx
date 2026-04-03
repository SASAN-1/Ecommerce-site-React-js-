import { PiXLogoBold } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaYoutube, FaX } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer-body">
        <div className="footer-content">
          <div className="footer-nav">
            <div className="footer-nav-links footer-nav-1">
              <Link
                to={"/shop/bikes"}
                className="footer-nav-link footer-large-text"
              >
                BIKES
              </Link>
              <Link
                to={"/shop/parts"}
                className="footer-nav-link footer-large-text"
              >
                PARTS
              </Link>
              <Link
                to={"/shop/gears"}
                className="footer-nav-link footer-large-text"
              >
                GEARS
              </Link>
            </div>
            <div className="footer-nav-item">
              <h3 className="footer-heading-small">EXPLORE</h3>
              <div className="footer-nav-links">
                <Link
                  to={"/about"}
                  className="footer-nav-link footer-small-text"
                >
                  About Us
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Services
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Blog
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Events
                </Link>
              </div>
            </div>
            <div className="footer-nav-item">
              <h3 className="footer-heading-small">SUPPORT</h3>
              <div className="footer-nav-links">
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  FAQs
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Orders & Shippings
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Returns & Refunds
                </Link>
                <Link
                  to={""}
                  className="footer-nav-link footer-small-text"
                >
                  Warranty & Repair
                </Link>
              </div>
            </div>
            <div className="footer-nav-social">
                <Link className="fb-icon"><FaFacebook/></Link>
                <Link className="insta-icon"><FaInstagram/></Link>
                <Link className="x-icon"><PiXLogoBold/></Link>
                <Link className="yt-icon"><FaYoutube/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
