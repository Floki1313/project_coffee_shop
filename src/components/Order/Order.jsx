import React, { useState } from 'react';
import './Order.css';

const OrderPage = ({ item = [], onRemoveItem }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [pickupPoint, setPickupPoint] = useState('m7');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [orderComment, setOrderComment] = useState('');

  const addressMap = {
    m11: "Минск, Свердлова 11",
    m28: "Минск, Притыцкого 28А",
    m7: "Минск, Победителей 7"
  };

  const totalPrice = item.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  const saveToDB = async () => {
    if (item.length === 0) {
      alert('Ваша корзина пуста');
      return;
    }

    const orderData = {
      customer: {
        name: userName,
        email: userEmail,
        phone: userPhone
      },
      details: {
        address: addressMap[pickupPoint],
        payment: paymentMethod === 'cash' ? 'Наличные' : 'Картой',
        comment: orderComment
      },
      items: item
    };

    try {
      const response = await fetch('http://localhost:5000/save-xml', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      
      if (response.ok) {
        alert('Заказ успешно сохранен!');
      } else {
        alert('Ошибка при сохранении');
      }
    } catch (err) {
      alert('Ошибка сервера');
    }
  };

  return (
    <main className="order-page-wrapper">
      <div className="checkout-container">
        <section className="form-section">
          <h2 className="section-heading">Контактные данные</h2>
          <div className="inputs-wrapper">
            <div className="input-group">
              <label className="input-label">Имя</label>
              <input 
                className="form-input" 
                placeholder="Ваше имя..." 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
              />
              <label className="input-label">Email</label>
              <input 
                type="email" 
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
          <div className="radio-option active pointer-none">
            <div className="radio-circle">
              <div className="radio-inner" />
            </div>
            <span className="radio-text">Самовывоз</span>
          </div>

          <div className="input-group">
            <label className="input-label">Точка самовывоза</label>
            <div className="select-wrapper">
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

      <aside className="order-summary">
        <h2 className="summary-title">Ваш заказ</h2>
        <div className="summary-items">
          {item.length > 0 ? (
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
