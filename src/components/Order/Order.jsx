/**
 * Order.jsx — страница оформления заказа: форма слева (или сверху на мобильном), корзина справа.
 * Данные корзины приходят пропcом `item` из Layout; локальный state хранит только поля формы.
 */
import React, { useState } from 'react';
// Стили страницы: двухколоночный layout, поля ввода, «радио»-блоки
import './Order.css';

/**
 * @param {Array<object>} item — массив позиций корзины (каждая: name, price, img, desc, id)
 * @param {function(number): void} onRemoveItem — функция удаления позиции по id (из Layout.removeItem)
 */
const OrderPage = ({ item = [], onRemoveItem }) => {
  // Значение по умолчанию item = [] 

  // Строка 'cash' | 'card' — какой блок «оплаты» визуально активен 
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Ключ выбранного пункта в <select> точек самовывоза; должен совпадать с ключами addressMap
  const [pickupPoint, setPickupPoint] = useState('m7');

  // Контролируемые поля: value синхронизирован с state, onChange обновляет state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [orderComment, setOrderComment] = useState('');

  // Словарь: код точки из option value → полный адрес для сервера (строка в XML)
  const addressMap = {
    m11: "Минск, Свердлова 11",
    m28: "Минск, Притыцкого 28А",
    m7: "Минск, Победителей 7"
  };

  // reduce суммирует price; toFixed(2) возвращает строку с двумя десятичными (для отображения)
  const totalPrice = item.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  // async function позволяет использовать await внутри
  const saveToDB = async () => {
    // Ранний выход: не слать пустой заказ на сервер
    if (item.length === 0) {
      alert('Ваша корзина пуста');
      return; // прекращаем выполнение функции
    }

    // Объект тела запроса — структура должна совпадать с тем, что читает server.js (customer, details, items)
    const orderData = {
      customer: {
        name: userName,
        email: userEmail,
        phone: userPhone
      },
      details: {
        address: addressMap[pickupPoint], // человекочитаемый адрес по коду точки
        payment: paymentMethod === 'cash' ? 'Наличные' : 'Картой', // сервер сохраняет русскую строку
        comment: orderComment // может быть пустой строкой
      },
      items: item // массив как в state корзины (с id — сервер пока использует name/price в XML)
    };

    try {
      // fetch — браузерный HTTP-клиент; URL указывает на развёрнутый backend 
      const response = await fetch('https://project-coffee-shop.onrender.com/save-xml', {
        method: 'POST', // создаёт/дописывает ресурс на сервере
        headers: { 'Content-Type': 'application/json' }, // тело — JSON
        body: JSON.stringify(orderData) // сериализация объекта в строку
      });
      
      // response.ok — true для статусов 200–299
      if (response.ok) {
        alert('Заказ успешно сохранен!');
      } else {
        alert('Ошибка при сохранении');
      }
    } catch (err) {
      // Сеть недоступна
      alert('Ошибка сервера');
    }
  };

  return (
    // <main> — семантика: основное содержимое страницы
    <main className="order-page-wrapper">
      {/* Левая колонка: только формы */}
      <div className="checkout-container">
        <section className="form-section">
          <h2 className="section-heading">Контактные данные</h2>
          <div className="inputs-wrapper">
            {/* Первая группа: имя и email в одной input-group по макету */}
            <div className="input-group">
              <label className="input-label">Имя</label>
              <input 
                className="form-input" 
                placeholder="Ваше имя..." 
                value={userName} // контролируемое значение
                onChange={(e) => setUserName(e.target.value)} // e.target — DOM-элемент input
              />
              <label className="input-label">Email</label>
              <input 
                type="email" // браузерная валидация формата email при submit 
                className="form-input" 
                placeholder="Введите ваш email" 
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Телефон</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+375 (__) __-___-__" 
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-heading">Способ получения</h2>
          {/* Статичный «выбранный» вариант самовывоза; class pointer-none в CSS отключает клики */}
          <div className="radio-option active pointer-none">
            <div className="radio-circle">
              <div className="radio-inner" />
            </div>
            <span className="radio-text">Самовывоз</span>
          </div>

          <div className="input-group">
            <label className="input-label">Точка самовывоза</label>
            <div className="select-wrapper">
              {/* value привязан; при смене option срабатывает onChange */}
              <select 
                className="form-input form-select" 
                value={pickupPoint}
                onChange={(e) => setPickupPoint(e.target.value)}
              >
                <option value="m11">Минск, Свердлова 11</option>
                <option value="m28">Минск, Притыцкого 28А</option>
                <option value="m7">Минск, Победителей 7</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Комментарий к заказу (необязательно)</label>
            <textarea 
              className="form-input form-textarea" 
              placeholder="Ваш комментарий..." 
              value={orderComment}
              onChange={(e) => setOrderComment(e.target.value)} 
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-heading">Оплата на месте</h2>
          <div className="payment-options">
            {/* Клик по div переключает state; внутри условный рендер «точки» */}
            <div 
              className={`radio-option ${paymentMethod === 'cash' ? 'active' : 'inactive'}`}
              onClick={() => setPaymentMethod('cash')}
            >
              <div className={`radio-circle ${paymentMethod !== 'cash' ? 'gray-border' : ''}`}>
                {paymentMethod === 'cash' && <div className="radio-inner" />}
              </div>
              <span className="radio-text">Наличные</span>
            </div>

            <div 
              className={`radio-option ${paymentMethod === 'card' ? 'active' : 'inactive'}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className={`radio-circle ${paymentMethod !== 'card' ? 'gray-border' : ''}`}>
                {paymentMethod === 'card' && <div className="radio-inner" />}
              </div>
              <span className="radio-text">Картой</span>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Примечание</label>
            <div className="form-input static-text placeholder-style">
              Оплата производится при получении заказа в кофейне
            </div>
          </div>
        </section>
      </div>

      {/* <aside> — дополнительный блок рядом с основным (семантика) */}
      <aside className="order-summary">
        <h2 className="summary-title">Ваш заказ</h2>
        <div className="summary-items">
          {/* Тернарный оператор: либо список, либо текст «пусто» */}
          {item.length > 0 ? (
            // item.map — для каждой позиции карточка; key обязателен для списков 
            item.map((itemObj, index) => (
              <div key={itemObj.id || index} className="summary-item">
                <div className="item-image" style={{ backgroundImage: `url(${itemObj.img})` }} />
                <div className="item-info">
                  <h3 className="item-name">{itemObj.name}</h3>
                  <p className="item-desc">{itemObj.desc}</p>
                </div>
                <div className="item-actions">
                  <div className="item-price">{itemObj.price} BYN</div>
                  <button 
                    className="delete-btn" 
                    onClick={() => onRemoveItem(itemObj.id)}
                    title="Удалить товар"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart-text">Корзина пуста</p>
          )}
        </div>

        <div className="summary-footer">
          <div className="summary-row">
            <span>Товары</span>
            <span>{totalPrice} BYN</span>
          </div>
          <div className="summary-row total">
            <span>Итого</span>
            <span>{totalPrice} BYN</span>
          </div>
          <button 
            className="submit-button" 
            onClick={saveToDB}
            disabled={item.length === 0}
          >
            Оформить заказ
          </button>
        </div>
      </aside>
    </main>
  );
};

export default OrderPage;
