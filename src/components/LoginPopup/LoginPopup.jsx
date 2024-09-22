import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

export const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Регистрация");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        {/* Заголовок модального окна */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Закрыть"
          />
        </div>

        {/* Входные поля */}
        <div className="login-popup-inputs">
          {currState === "Вход" ? null : (
            <input type="text" placeholder="Ваше имя" required />
          )}
          <input type="email" placeholder="Ваш email" required />
          <input type="password" placeholder="Пароль" required />
        </div>

        {/* Кнопка входа или создания аккаунта */}
        <button>
          {currState === "Регистрация" ? "Создать аккаунт" : "Войти"}
        </button>

        {/* Условия использования */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Продолжая, я соглашаюсь с условиями использования и политикой
            конфиденциальности
          </p>
        </div>

        {/* Переключение между входом и регистрацией */}
        {currState === "Вход" ? (
          <p>
            Создать новый аккаунт?{" "}
            <span onClick={() => setCurrState("Регистрация")}>
              Нажмите здесь
            </span>
          </p>
        ) : (
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setCurrState("Вход")}>Войти здесь</span>
          </p>
        )}
      </form>
    </div>
  );
};
