import "./Footer.scss";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__promo">
            <h5 className="footer__title">PROMO</h5>
            <div className="footer__promo__content">
              <ul>
                <li>Terms of Use</li>
                <li>Privacy Notice</li>
                <li>Cookie Page</li>
                <li>Legal Info</li>
                <li>Security</li>
              </ul>
              <img
                className="footer__promo__img"
                src={require("../../assets/footer/footerImg.png")}
                alt="footerImg"
              />
            </div>
            <p>Nintendo/GAME FREAK inc. TM, ®Nintendo.</p>
          </div>
          <div className="footer__quicklinks">
            <h5 className="footer__title">QUICK LINKS</h5>
            <div className="footer__quicklinks__content">
              <ul>
                <li>What's New</li>
                <li>Pokémon Parents Guide</li>
                <li>Customer Service</li>
              </ul>
              <ul>
                <li>About Our Company</li>
                <li>Pokémon Careers</li>
                <li>Select a Country/Region </li>
              </ul>
            </div>
          </div>
          <div className="footer__contact">
            <h5 className="footer__title">COMMUNITY</h5>
            <p className="contact__text">
              <span style={{ color: "var(--main-color)" }}>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </span>{" "}
              Nintendo of America Inc. Headquarters are in Redmond, Washington,
              USA
            </p>
            <p className="contact__text">
              <span style={{ color: "var(--main-color)" }}>
                <i className="fa-sharp fa-solid fa-phone"></i>
              </span>{" "}
              +1900 6098
            </p>
            <p className="contact__text">
              <span style={{ color: "var(--main-color)" }}>
                <i className="fa-sharp fa-solid fa-envelope"></i>
              </span>{" "}
              customer-service@nitendo.com
            </p>
            <span className="social-icon">
              <SocialIcon
                url="https://facebook.com/"
                style={{ height: 35, width: 35 }}
              />
            </span>
            <span className="social-icon">
              <SocialIcon
                url="https://youtube.com/"
                style={{ height: 35, width: 35 }}
              />
            </span>
            <span className="social-icon">
              <SocialIcon
                url="https://twitter.com/"
                style={{ height: 35, width: 35 }}
              />
            </span>
            <span className="social-icon">
              <SocialIcon
                url="https://instagram.com/"
                style={{ height: 35, width: 35 }}
              />
            </span>
            <span className="social-icon">
              <SocialIcon
                url="https://pinterest.com/"
                style={{ height: 35, width: 35 }}
              />
            </span>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="footer__copyright text-center">
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <span style={{ color: "var(--main-color)" }}>
            <i className="fa-sharp fa-solid fa-heart"></i>
          </span>{" "}
          by Me
        </div>
      </div>
    </div>
  );
};

export default Footer;
