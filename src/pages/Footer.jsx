import { PiXLogoBold } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";

const footerNav1Items = [
  {
    href: "/shop/bikes",
    title: "BIKES",
  },
  {
    href: "/shop/parts",
    title: "PARTS",
  },
  {
    href: "/shop/gears",
    title: "GEARS",
  },
];

const footerNavItem1Items = [
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/about#services",
    title: "Services",
  },
  {
    href: "",
    title: "Blog",
  },
  {
    href: "",
    title: "Events",
  },
];

const footerNavItem2Items = [
  {
    href: "",
    title: "FAQs",
  },
  {
    href: "",
    title: "Orders & Shippings",
  },
  {
    href: "",
    title: "Returns & Refunds",
  },
  {
    href: "",
    title: "Warranty & Repair",
  },
];

const footerNavSocialItems = [
  {
    class: "fb-icon",
    title: FaFacebook,
  },
  {
    class: "insta-icon",
    title: FaInstagram,
  },
  {
    class: "x-icon",
    title: PiXLogoBold,
  },
  {
    class: "yt-icon",
    title: FaYoutube,
  },
];

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="footer-body">
        <div className="footer-content">
          <div className="footer-nav">
            {/* Footer Nav 1 */}
            <div className="footer-nav-links footer-nav-1">
              {footerNav1Items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="footer-nav-link footer-large-text"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="footer-nav-item footer-nav-item-1">
              <h3 className="footer-heading-small">EXPLORE</h3>
              <div className="footer-nav-links">
                {footerNavItem1Items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="footer-nav-link footer-small-text"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-nav-item footer-nav-item-2">
              <h3 className="footer-heading-small">SUPPORT</h3>
              <div className="footer-nav-links">
                {footerNavItem2Items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="footer-nav-link footer-small-text"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-nav-social">
              {footerNavSocialItems.map((item, index) => {
                const Component = item.title;

                return (
                  <Link key={index} className={item.class}>
                    <Component className="shake" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-legal">
            <div>
              <p>&copy; BikeShop 2026. All rights reserved.</p>
            </div>
            <div className="footer-legal-links">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
