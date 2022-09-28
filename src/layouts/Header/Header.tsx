import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { RootState } from "../../redux/store";

const Header = () => {
  const navigate = useNavigate();

  const cartList = useSelector((state:RootState) => state.cart.cartList);
  const [quantity, setQuantity] = useState<number>(0);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleGoCart = () => {
    navigate("/cart");
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    setQuantity(cartList.length);
  }, [cartList]);

  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <div className="nav__brand  pc__menu">
            <NavLink to="/">
              <img className="nav__logo" src={require("../../assets/brand/logo.png")} alt="pokemon-logo" />
            </NavLink>
          </div>

          <div className="nav__menu pc__menu">
            <ul>
              <li className="nav__item">
                <NavLink className="nav__link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/products">
                  Pokemon
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav__menu mobile__menu">
            <span
              className="mobile__bars"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </span>
            {showMenu && (
              <div className="mobile__wrap">
                <ul>
                  <li className="nav__item">
                    <NavLink
                      className="nav__link"
                      to="/"
                      end
                      onClick={() => {
                        setShowMenu(!showMenu);
                      }}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      className="nav__link"
                      to="/products"
                      onClick={() => {
                        setShowMenu(!showMenu);
                      }}
                    >
                      Products
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      className="nav__link"
                      to="/news"
                      onClick={() => {
                        setShowMenu(!showMenu);
                      }}
                    >
                      News
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      className="nav__link"
                      to="/contact"
                      onClick={() => {
                        setShowMenu(!showMenu);
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="nav__user" onClick={() => setShowMenu(false)}>
            <button className="nav__button" onClick={handleGoLogin}>
              <span>
                <i className="fa-solid fa-user"></i> Login
              </span>
            </button>
            <button className="nav__button" onClick={handleGoCart}>
              <span>
                <i className="fa-solid fa-cart-shopping"></i> Cart ({quantity})
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

