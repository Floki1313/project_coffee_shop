import "./MenuTitle.css"

const MenuTitle  = () => {

    return(
        <section className="menu-header">
            <div className="menu-header_content">
                <h1 className="menu-header__itle">Наше меню</h1>
                <p className="menu-header_subtitle">Тщательно приготовленные напитки и свежая выпечка, созданные с любовью и из лучших ингредиентов.</p>
            </div>
        </section>
    );
}

export default MenuTitle;