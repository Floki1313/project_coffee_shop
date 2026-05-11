/**
 * MenuSort.jsx — ряд кнопок-фильтров над секциями меню.
 * Два параллельных механизма: (1) локальный state `active` для подсветки кнопки .active в CSS;
 * (2) колбэки из MenuCont, которые меняют, какие секции вообще смонтированы в DOM.
 */
import React, {useState} from "react";
import "./MenuSort.css"

/**
 * Все onClick* — функции без аргументов, определённые в MenuCont.jsx рядом с setView_menu.
 */
const MenuSort = ({onClickAll, onClickEspresso, onClickIced, onClickSignature, onClickTea, onClickBakery}) => {
    // Строка должна точно совпадать с проверками active === '...' в className ниже
    const [active, setActive] = useState("Все позиции");


    return(
         <nav className="filter-container">
            <div className="filter-scroll">

                {/* Кнопка «Все позиции»: показать все секции меню одновременно */}
                <button
                    className={`filter-btn ${active === 'Все позиции' ? 'active' : ''}`}
                    onClick={() => {setActive('Все позиции');
                                    onClickAll()
                     }
                }
                >
                Все позиции
                </button>

                {/* Только секция EspressoSection */}
                <button
                    className={`filter-btn ${active === 'Эспрессо-бар' ? 'active' : ''}`}
                    onClick={() => {setActive('Эспрессо-бар')
                                    onClickEspresso()
                    }
                }

                >
                Эспрессо-бар
                </button>

                {/* Только IcedCoffee */}
                <button
                    className={`filter-btn ${active === 'Холодный кофе' ? 'active' : ''}`}
                    onClick={() => {setActive('Холодный кофе')
                                    onClickIced()}
                    }
                >
                Холодный кофе
                </button>

                {/* Только SignatureCoffee */}
                <button
                    className={`filter-btn ${active === 'Фирменный кофе' ? 'active' : ''}`}
                    onClick={() =>{ setActive('Фирменный кофе')
                                    onClickSignature()}

                    }
                >
                Фирменный кофе
                </button>

                {/* Только Tea */}
                <button
                    className={`filter-btn ${active === 'Чай' ? 'active' : ''}`}
                    onClick={() => {setActive('Чай')
                                    onClickTea()
                    }

                    }
                >
                Чай
                </button>

                {/* Только Bakery */}
                <button
                    className={`filter-btn ${active === 'Выпечка' ? 'active' : ''}`}
                    onClick={() =>{ setActive('Выпечка')
                                    onClickBakery()
                    }
                }
                >
                Выпечка
                </button>

            </div>
        </nav>
    );
}

export default MenuSort;
