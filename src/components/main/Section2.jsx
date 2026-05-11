/**
 * Section2.jsx  — блок «Фирменная обжарка» на главной.
 * Четыре карточки статичны в коде; клик «Всё меню» вызывает onMenuClick из Layout.
 */
import React from "react";
import "./Section_2.css";
// Четыре отдельных импорта изображений
import card1 from "../../img/sec_2bg_1.svg";
import card2 from "../../img/vanillaLatte.svg";
import card3 from "../../img/nitroColdBrew.svg";
import card4 from "../../img/ethiopianPour_over.svg";
import Card from "../templates/Card";

/** @param {function} onMenuClick — открыть полное меню (тот же колбэк, что для пункта «Меню» в шапке) */
const Specialty = ({onMenuClick}) => {
  return (
    <section className="specialty">
      <div className="specialty-container">

        <div className="specialty-header">
          <div className="specialty-info">
            <h2 className="specialty-title">Фирменная обжарка</h2>
            <p className="specialty-subtitle">
              Откройте для себя наши самые популярные бленды и моносорта.
            </p>
          </div>
          {/* Дублирующий onClick на span со стрелкой: оба вызова ведут в меню */}
          <p className="view-all" onClick={onMenuClick}>
            Всё меню <span className="arrow" onClick={onMenuClick}>→</span>
          </p>
        </div>

        <div className="specialty-grid">
            <div>
                <Card name_img = {card1}  alt_={"img_1"} title={"Классический капучино"} price={5.20} description={"Насыщенный эспрессо с идеально вспененным молоком и плотной молочной пеной."} />
            </div>

            <div>
                <Card name_img = {card2}  alt_={"img_2"} title={"Ванильный латте"} price={6.00} description={"Нежный эспрессо с домашним ванильным сиропом и бархатистой молочной пеной."} />
            </div>

            <div>
                <Card name_img = {card3}  alt_={"img_3"} title={"Нитро колд брю"} price={5.50} description={"Заваривается 18 часов и насыщается азотом для особенно кремовой текстуры."} />
            </div>

            <div>
                <Card name_img = {card4}  alt_={"img_4"} title={"Эфиопия пуровер"} price={6.30} description={"Моносорт ручного заваривания с нотами жасмина, черники и мёда."} />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Specialty;
