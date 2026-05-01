import React, {useState} from "react";
import "./MenuSort.css"

const MenuSort = ({onClickAll, onClickEspresso, onClickIced, onClickSignature, onClickTea, onClickBakery}) => {
    const [active, setActive] = useState("Все позиции");


    return(
         <nav className="filter-container">
            <div className="filter-scroll">
        
                <button
                    className={`filter-btn ${active === 'Все позиции' ? 'active' : ''}`}
                    onClick={() => {setActive('Все позиции');
                                    onClickAll()
                     }
                } 
                >
                Все позиции
                </button>

                <button
                    className={`filter-btn ${active === 'Эспрессо-бар' ? 'active' : ''}`}
                    onClick={() => {setActive('Эспрессо-бар')
                                    onClickEspresso()
                    }
                }

                >
                Эспрессо-бар
                </button>

                <button
                    className={`filter-btn ${active === 'Холодный кофе' ? 'active' : ''}`}
                    onClick={() => {setActive('Холодный кофе')
                                    onClickIced()}
                    }
                >
                Холодный кофе
                </button>

                <button
                    className={`filter-btn ${active === 'Фирменный кофе' ? 'active' : ''}`}
                    onClick={() =>{ setActive('Фирменный кофе')
                                    onClickSignature()}
                    
                    }
                >
                Фирменный кофе
                </button>

                <button
                    className={`filter-btn ${active === 'Чай' ? 'active' : ''}`}
                    onClick={() => {setActive('Чай')
                                    onClickTea()
                    }
                
                    }
                >
                Чай
                </button>

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