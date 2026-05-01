import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./LocationCont.css";
import Loc from "../../icons/Loc.svg"
import Time from "../../icons/Time.svg"
import Logo1 from "../../icons/Logo1.svg"
import in1 from "../../icons/in1.svg"
import in2 from "../../icons/in2.svg"
import in3 from "../../icons/in3.svg"
import in4 from "../../icons/in4.svg"

const LocationCont = () => {

  const points = [
    { id: 1, coords: [53.893392, 27.556720], name: 'Ballu Свердлова 11' },
    { id: 2, coords: [53.909917, 27.496272], name: 'Ballu Притыцкого 28А' },
    { id: 3, coords: [53.908092, 27.549560], name: 'Ballu проспект Победителей 7' }
  ];


  const locationsData = [
    {
      id: 1,
      title: 'Ballu Свердлова',
      address: 'Свердлова 11',
      coords: [53.893392, 27.556720],
      hours: 'Пн–Вс · 7:00 – 20:00',
      description: 'Флагманская эспрессо-кофейня с собственной обжаркой небольших партий.',
    },
    {
      id: 2,
      title: 'Ballu Притыцкого',
      address: 'Притыцкого 28А',
      coords: [53.909917, 27.496272],
      hours: 'Пн–Вс · 8:00 – 22:00',
      description: 'Уютное пространство с акцентом на альтернативные способы заваривания.',
    },
    {
      id: 3,
      title: 'Ballu Победителей',
      address: 'проспект Победителей 7',
      coords: [53.908092, 27.549560],
      hours: 'Пн–Вс · 9:00 – 21:00',
      description: 'Городская локация с большой витриной сезонной выпечки и завтраками.',
    }
  ];


  const handleRoute = (coords) => {
    const lat = coords[0];
    const lon = coords[1];
    
    
    const url = `https://yandex.ru/maps/?rtext=~${lat},${lon}`;
    
    window.open(url, '_blank');
  };

  

  return (
    <div>
  
      <section className="hero-section">
        <div className="hero-content">
          <h1>Найдите ближайшее к вам кафе Ballu</h1>
          <p className="hero-description">
            От утреннего эспрессо до неспешного дневного пуровера — наши кофейни созданы для ежедневных ритуалов. 
            Посмотрите адреса, часы работы и особенности каждой локации.
          </p>
          <div className="badge-group">
            <span className="feature-badge">3 уютные городские локации</span>
            <span className="feature-badge">Открыты ежедневно</span>
            <span className="feature-badge">Зал, самовывоз и зёрна с собой</span>
          </div>
        </div>

        <div className="map-container">
          <YMaps query={{ lang: 'ru_RU' }}>
            <Map 
              defaultState={{ center: [53.901064, 27.527767], zoom: 12 }} 
              width="100%" 
              height="100%"
            >
              {points.map(point => (
                <Placemark 
                  key={point.id}
                  geometry={point.coords}
                  properties={{
                    hintContent: point.name,
                    balloonContent: `Кофейня ${point.name}`
                  }}
                  options={{
                    preset: 'islands#brownDotIcon',
                    iconColor: '#6B3E26'
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </section>

      <section className="locations-list-section">
        <div className="locations-header">
          <h2>Наши локации</h2>
          <p>У каждого пространства свой ритм, но в каждой кофейне вас ждут одинаково свежая обжарка и тёплая атмосфера.</p>
        </div>

        <div className="locations-grid">
          {locationsData.map((loc) => (
            <div key={loc.id} className="location-card">
              <div className="card-header">
                <h3>{loc.title}</h3>
                <span className="status-badge">Открыто</span>
              </div>
              
              <div className="card-info">
                <div className="info-item">
                  <img src={Loc} alt=""></img>
                  <p>{loc.address}</p>
                </div>
                <div className="info-item">
                  <img src={Time} alt=""></img>
                  <p>{loc.hours}</p>
                </div>
                <div className="info-item">
                  <img src={Logo1} alt=""></img>
                  <p>{loc.description}</p>
                </div>
              </div>

              <button 
                className="route-button" 
                onClick={() => handleRoute(loc.coords)}
              >
                Построить маршрут
              </button>
            </div>
          ))}
        </div>
      </section>

    
<section class="plan-visit-section">
  <div class="plan-visit-container">
    
  
    <div class="visit-main-info">
      <div class="visit-header">
        <h2>Планируйте визит</h2>
        <p class="visit-description">
          Будь то встреча с другом, покупка зёрен домой или спокойная работа с ноутбуком, 
          наши кофейни открыты всю неделю и встречают гостей удобными местами и свежей выпечкой каждое утро.
        </p>
      </div>

      <div class="schedule-box">
        <div class="schedule-row">
          <span class="schedule-day">Понедельник – Пятница</span>
          <span class="schedule-time">7:00 – 21:00</span>
        </div>
        <div class="schedule-row">
          <span class="schedule-day">Суббота</span>
          <span class="schedule-time">7:30 – 19:00</span>
        </div>
        <div class="schedule-row">
          <span class="schedule-day">Воскресенье</span>
          <span class="schedule-time">8:00 – 18:00</span>
        </div>
      </div>
    </div>

   
    <div class="amenities-card">
      <h3>Что вы найдёте внутри</h3>
      <ul class="amenities-list">
        <li class="amenity-item">
          <span class="amenity-icon"><img src={in1} alt=""/></span>
          <span class="amenity-text">Бесплатный Wi‑Fi и удобные места</span>
        </li>
        <li class="amenity-item">
          <span class="amenity-icon"><img src={in2} alt=""/></span>
          <span class="amenity-text">Зёрна, аксессуары для заваривания и подарочные карты</span>
        </li>
        <li class="amenity-item">
          <span class="amenity-icon"><img src={in3} alt=""/></span>
          <span class="amenity-text">Сезонная выпечка и лёгкие завтраки</span>
        </li>
        <li class="amenity-item">
          <span class="amenity-icon"><img src={in4} alt=""/></span>
          <span class="amenity-text">Удобная парковка рядом</span>
        </li>
      </ul>
    </div>

  </div>
</section>


    </div>

  );
}

export default LocationCont;
