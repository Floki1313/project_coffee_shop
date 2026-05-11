/**
 * Страница «О нас»: несколько секций с текстом и изображениями, блок «Наши ценности» из трёх карточек.
 * Данные статичны.
 */
import React from "react";
// Большие иллюстрации для hero-секций (пути относительно этого файла)
import coffeeShop from "../../img/coffeeShop.svg"
import streetCoffee from "../../img/streetCoffee.svg"
// Иконки для трёх карточек «ценности» (SVG как URL)
import about1 from "../../icons/about1.svg"
import about2 from "../../icons/Group.svg"
import about3 from "../../icons/about3.svg"
import "./AboutCont.css"

const AboutCont = () => {

    return(
        <div>
            {/* Первый экран: миссия бренда + фото интерьера */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Вкладываем страсть в каждую чашку.</h1>
                        <p className="hero-description">В Ballu мы верим, что отличный кофе — это больше, чем просто напиток. Это впечатление. Мы выбираем лучшие зёрна, бережно их обжариваем и доводим каждую чашку до совершенства, чтобы угощать вас лучшим кофе в городе.</p>
                    </div>
                    <img src={coffeeShop} alt="Бариста наливает кофе" className="hero-img"/>
                </div>
            </section>

            {/* Второй экран: фото улицы и блок «Наша история» (два абзаца) */}
            <section className="hero-section-2">
                <div className="hero-container">
                    <img src={streetCoffee} alt="Бариста наливает кофе" className="hero-img"/>

                    <div className="hero-content">
                        <h1 className="hero-title">Наша история</h1>
                        <p className="hero-description">Основанная в 2023, Ballu начиналась как небольшая тележка в самом сердце города. Наша цель была простой: поделиться любовью к specialty coffee с нашим сообществом. Со временем мы выросли в любимое локальное кафе, но наша приверженность качеству имастерству осталась неизменной.</p>
                        <p className="hero-description">Мы сотрудничаем с устойчивыми фермами по всему миру, чтобы наши зёрна были получены этично. Каждая партия обжаривается у нас на месте, чтобы раскрыть её уникальный вкусовой профиль и сделать каждую чашку максимально свежей и насыщенной.</p>
                    </div>
                </div>
            </section>

            {/* Три колонки-ценности с иконками; article улучшает семантику */}
            <section className="values">
                <h2 className="values_title">Наши ценности</h2>
  
                <div className="values_container">
    
                    <article className="value-card">
                        <div className="value-card_icon">
                            <img src={about1} alt="" />
                        </div>
                        <h3 className="value-card_heading">Устойчивость</h3>
                        <p className="value-card_text">Мы придерживаемся этичных закупок и экологичных практик на каждом этапе нашей работы.</p>
                    </article>

  
                    <article className="value-card">
                        <div className="value-card_icon">
                            <img src={about2} alt="" />
                        </div>
                        <h3 className="value-card_heading">Сообщество</h3>
                        <p className="value-card_text">Наше кафе — это место встреч. Мы создаём тёплое и гостеприимное пространство, где каждый может общаться и отдыхать.</p>
                    </article>


                    <article className="value-card">
                        <div className="value-card_icon">
                            <img src={about3} alt="" />
                        </div>
                        <h3 className="value-card_heading">Качество</h3>
                        <p className="value-card_text">От зерна до чашки мы никогда не идём на компромиссы в качестве. Высокий стандарт — наша норма.</p>
                    </article>
                </div>
            </section>


        </div>
    );
}
export default AboutCont;