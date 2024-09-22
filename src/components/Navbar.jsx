import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "./../assets/assets";
import "./Navbar/Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      {/* Логотип */}
      <Link to="/">
        <img src={assets.logo} alt="Логотип" className="log" />
      </Link>

      {/* Меню навигации */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setActiveMenu("home")}
          className={activeMenu === "home" ? "active" : ""}
        >
          Главная
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setActiveMenu("menu")}
          className={activeMenu === "menu" ? "active" : ""}
        >
          Меню
        </a>
        <a
          href="#app-download"
          onClick={() => setActiveMenu("mobile-app")}
          className={activeMenu === "mobile-app" ? "active" : ""}
        >
          Мобильное приложение
        </a>
        <a
          href="#footer"
          onClick={() => setActiveMenu("contact-us")}
          className={activeMenu === "contact-us" ? "active" : ""}
        >
          Контакты
        </a>
      </ul>

      {/* Правая часть навбара */}
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="Поиск"
          className="navbar-search-icon"
        />

        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Корзина" />
          </Link>
          {/* Показывать красную точку, если в корзине есть товары */}
          {getTotalCartAmount() > 0 && <div className="dot" />}
        </div>

        {/* Кнопка входа */}
        <button onClick={() => setShowLogin(true)}>Войти</button>
      </div>
    </div>
  );
};

export default Navbar;
