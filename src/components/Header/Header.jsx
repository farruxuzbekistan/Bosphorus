import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Заказывайте вашу любимую еду здесь</h2>
        <p>
          Выберите из разнообразного меню, включающего вкусные блюда,
          приготовленные с любовью и качеством.
        </p>
        <button>Посмотреть меню</button>
      </div>
    </div>
  );
};

export default Header;
