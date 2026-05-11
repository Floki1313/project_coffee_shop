/**
 * Layout.jsx — главный «компоновщик» страницы: шапка, один из экранов контента, подвал.
 *
 * Навигация реализована объектом `view` (несколько boolean-флагов). 
 *
 * Корзина (`items`) хранится здесь, чтобы и Header, и OrderPage видели одни данные.
 */
import React, { useState } from "react";
// Стили оболочки (фон страницы, flex на всю высоту) — файл Layout.scss компилируется в CSS
import "./Layout.scss";
// Шапка получает колбэки смены экрана и массив корзины для счётчика
import Header from "../Header";
import Footer from "../Footer";
// Две секции главной страницы
import Section1 from "../main/Section1";
import Section2 from "../main/Section2";
// Страница меню со всеми категориями
import MenuCont from "../menu/MenuCont";
import AboutCont from "../AboutUs/AboutCont";
import LocationCont from "../Location/LocationCont";
import OrderPage from "../Order/Order";

// const Layout = () => { ... } — функциональный компонент без собственных пропсов
const Layout = () => {
  /**
   * useState(initialObject) — пара [значение, сеттер]; setView полностью заменяет объект.
   * Ключи: main, menu, about, location, order — какие флаги true, такой экран показан.
   */
  const [view, setView] = useState({
    main: true, // стартовый экран — главная
    menu: false,
    about: false,
    location: false,
    order: false,
  });

  /**
   * Корзина: массив объектов { name, price, img, desc, id }.
   * id добавляется в handleAddItem через Date.now() для уникальности в списке React.
   */
  const [items, setItems] = useState([]);

  /**
   * product — объект из CardWithButton: name, price, img, desc.
   * Копируем поля через spread и добавляем id для удаления и key в списке заказа.
   */
  const handleAddItem = (product) => {
    const newItem = {
      ...product, // копия всех полей входного объекта
      id: Date.now(), // число-миллисекунды (достаточно уникально для UI-демо)
    };
    // Важно: items здесь — значение из замыкания на момент создания handleAddItem; для отладки ок
    console.log("Текущая корзина:", items);

    // setItems(prev => ...) — рекомендуемый стиль: всегда актуальный предыдущий массив при быстрых кликах
    setItems((prev) => [...prev, newItem]); // новый массив = старый + newItem (иммутабельное обновление)
  };

  /**
   * Удаление товара по id. Альтернатива без зависимости от items: setItems(prev => prev.filter(...)).
   */
  const removeItem = (id) => {
    setItems(items.filter((i) => i.id !== id)); // filter возвращает новый массив без элемента с этим id
  };

  // Ниже — «навигационные» функции: каждая вызывает setView с ровно одним true

  const openMenu = () => {
    setView({ main: false, menu: true, about: false, location: false, order: false });
  };

  const openMain = () => {
    setView({ main: true, menu: false, about: false, location: false, order: false });
  };

  const openAbout = () => {
    setView({ main: false, menu: false, about: true, location: false, order: false });
  };

  const openLocation = () => {
    setView({ main: false, menu: false, about: false, location: true, order: false });
  };

  const openOrder = () => {
    setView({ main: false, menu: false, about: false, location: false, order: true });
  };

  // return JSX — описание UI; React сравнит с прошлым деревом и обновит DOM
  return (
    <div className="main-wrapper">
      {/* Header — не знает про view; только вызывает переданные функции */}
      <Header
        onMenuClick={openMenu} // пункт «Меню»
        onMainClick={openMain} // логотип / «Главная»
        onAboutClick={openAbout}
        onLocationClick={openLocation}
        onOrderClick={openOrder} // иконка корзины
        myArray={items} // тот же массив, что и у OrderPage
      />

      {/* Логическое И: если view.main ложно, весь блок не рендерится */}
      {view.main && (
        // Fragment <>...</> — группировка без лишнего DOM-элемента
        <>
          {/* onOrderClick ведёт сразу в корзину; onMenuClick — в меню */}
          <Section1 onMenuClick={openMenu} onOrderClick={openOrder} />
          <Section2 onMenuClick={openMenu} />
        </>
      )}

      {/* onAdd прокидывается вниз до CardWithButton */}
      {view.menu && <MenuCont onAdd={handleAddItem} />}

      {view.about && <AboutCont />}

      {view.location && <LocationCont />}

      {/* item и onRemoveItem связывают форму заказа с состоянием items выше */}
      {view.order && <OrderPage item={items} onRemoveItem={removeItem} />}

      <Footer />
    </div>
  );
};

export default Layout;
