import React, { useState } from 'react';
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';
import Section1 from '../main/Section1';
import Section2 from '../main/Section2';
import MenuCont from '../menu/MenuCont';
import AboutCont from '../AboutUs/AboutCont';
import LocationCont from '../Location/LocationCont';
import OrderPage from '../Order/Order';

const Layout = () => {
  const [view, setView] = useState({
    main: true,
    menu: false,
    about: false,
    location: false,
    order: false
  })

  const [items, setItems] = useState([]);

  const handleAddItem = (product) => {
    const newItem = {
      ...product,
      id: Date.now()
    };
    console.log("Текущая корзина:", items);

    setItems(prev => [...prev, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

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


  return (
    <div className="main-wrapper">
      <Header onMenuClick={openMenu} onMainClick={openMain} onAboutClick={openAbout} onLocationClick={openLocation} onOrderClick={openOrder} myArray={items}/>

      {view.main && (
        <>
          <Section1 onMenuClick={openMenu} onOrderClick={openOrder} />
          <Section2 onMenuClick={openMenu} />
        </>
      )}

      {view.menu && <MenuCont onAdd={handleAddItem} />}

      {view.about && <AboutCont />}

      {view.location && <LocationCont />}

      {view.order && <OrderPage item={items} onRemoveItem={removeItem}/>}




      <Footer />
    </div>
  );
};

export default Layout;