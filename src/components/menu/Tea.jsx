import React from "react";
import CardWithButton from "../templates/CardWithButton";
import "./Sections.css"
import blackTea from "../../img/blackTea.svg"
import greenTea from "../../img/greenTea.svg"
import whiteTea from "../../img/whiteTea.svg"; 
import oolongTea from "../../img/oolongTea.svg"; 
import puerTea from "../../img/puerTea.svg"; 
import yellowTea from "../../img/yellowTea.svg"; 
import matchaTea from "../../img/matchaTea.svg"; 
import masalaTea from "../../img/masalaTea.svg"; 

const Tea = ({onAdd}) => {

    return(
        <div className="section-wrapper">
            <div className="category-heading">
                <h1 className="category-title">Чай</h1>
            </div>
            <div className="products-grid">
                <CardWithButton onAdd={onAdd} name_img = {blackTea}  alt_={"blackTea"} title={"Черный чай"} price={3.00} description={"Листья полностью окислены. Дает темный настой, глубокий терпкий вкус и согревающий эффект."}/>
                <CardWithButton onAdd={onAdd} name_img = {greenTea}  alt_={"greenTea"} title={"Зеленый чай"} price={3.00} description={"Минимальная обработка паром или прожаркой. Вкус свежий, травянистый, с легкой горчинкой."}/>
                <CardWithButton onAdd={onAdd} name_img = {whiteTea}  alt_={"whiteTea"} title={"Белый чай"} price={4.50} description={"Авокадо на заквасочном хлебе с хлопьями чили и микрозеленью."}/>
                <CardWithButton onAdd={onAdd} name_img = {oolongTea}  alt_={"oolongTea"} title={"Чай улун"} price={5.00} description={"Полуферментированный чай. Сочетает свежесть зеленого и насыщенность черного, часто с нотами сливок или цветов."}/>
                <CardWithButton onAdd={onAdd} name_img = {puerTea}  alt_={"puerTea"} title={"Чай пуэр"} price={5.00} description={"Выдержанный чай с мощным эффектом. Бывает мягкий древесный (Шу) или терпкий фруктовый (Шен)."}/>
                <CardWithButton onAdd={onAdd} name_img = {yellowTea}  alt_={"yellowTea"} title={"Желтый чай"} price={3.50} description={"Элитный чай, который долго «томят» в мешках. Вкус мягче зеленого, без терпкости, с бархатным послевкусием."}/>
                <CardWithButton onAdd={onAdd} name_img = {matchaTea}  alt_={"matchaTea"} title={"Чай матча"} price={5.00} description={"Перемолотый в пудру зеленый чай. Выпивается вместе с заваркой, очень бодрит и напоминает густой смузи."}/>
                <CardWithButton onAdd={onAdd} name_img = {masalaTea}  alt_={"masalaTea"} title={"Чай масала"} price={4.00} description={"Индийский черный чай, сваренный на молоке со специями (кардамон, корица, имбирь). Согревает и очень сытный."}/>
            </div>
        </div>
    );
}

export default Tea;
