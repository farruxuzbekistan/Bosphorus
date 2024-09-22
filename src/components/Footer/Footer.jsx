import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content" id="footer">
        {/* Левый блок */}
        <div className="footer-content-left">
          <img width={80} src={assets.logo} alt="Логотип Bosphorous" />
          <p>
            Добро пожаловать в семейный ресторан турецкой кухни «Босфорус»! Мы
            гордимся тем, что предлагаем вам традиционные блюда турецкой и
            европейской кухни, приготовленные нашими лучшими поварами.
            Насладитесь вкусом аутентичных блюд в уютной обстановке.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Центральный блок */}
        <div className="footer-content-center">
          <h2>СВЯЖИТЕСЬ С НАМИ</h2>
          <ul>
            <li>+1-212-256-7890</li>
            <li>contact@bosphorous.com</li>
          </ul>
        </div>

        {/* Правый блок */}
        <div className="footer-content-right">
          <h2>О НАС</h2>
          <ul>
            <li>Главная</li>
            <li>О ресторане</li>
            <li>Доставка</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Подвал */}
      <p className="footer-copyright">
        Copyright 2024 © Bosphorous — Все права защищены
      </p>

      {/* Developer Credit */}
      <p className="footer-developer">
        Developed by{" "}
        <a
          href="https://www.youtube.com/@FarruxDeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          Farrux Developer
        </a>
      </p>
    </div>
  );
};

export default Footer;
