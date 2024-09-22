import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const totalAmount = getTotalCartAmount() + deliveryFee;

  return (
    <form action="" className="place-order">
      {/* Левый блок: информация о доставке */}
      <div className="place-order-left">
        <p className="title">Информация о доставке</p>
        <div className="multi-field">
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
        </div>
        <input type="email" placeholder="Электронная почта" />
        <input type="text" placeholder="Улица" />

        <div className="multi-field">
          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Штат" />
        </div>

        <div className="multi-field">
          <input type="text" placeholder="Почтовый индекс" />
          <input type="text" placeholder="Страна" />
        </div>

        <input type="text" placeholder="Телефон" />
      </div>

      {/* Правый блок: итог заказа */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Итог заказа</h2>
          <div>
            <div className="cart-total-details">
              <p>Подытог</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Стоимость доставки</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итого</b>
              <b>${totalAmount}</b>
            </div>
          </div>
          <button>Перейти к оплате</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
