import React from "react";
import CardWithButton from "../templates/CardWithButton";
import "./Sections.css"
import classicCappuccino from "../../img/classicCappuccino.svg"
import vanillaLatte from "../../img/vanillaLatte.svg"
import doubleEspresso from "../../img/doubleEspresso.svg"; 
import ethiopianPour_over from "../../img/ethiopianPour_over.svg"; 
import flatWhite from "../../img/flatWhite.svg"; 
import mocha from "../../img/mocha.svg"; 
import americano from "../../img/americano.svg"; 
import hazelnutLatte from "../../img/hazelnutLatte.svg"; 

const EspressoSection = ({onAdd}) => {

    return(
        <div className="section-wrapper">
            <div className="category-heading">
                <h1 className="category-title">Эспрессо-бар</h1>
                <div className="reveal-bg"></div>
            </div>
            <div className="products-grid">
                <CardWithButton onAdd={onAdd} name_img = {classicCappuccino}  alt_={"classicCappuccino"} title={"Классический капучино"} price={5.20} description={"Насыщенный эспрессо с идеально вспененным молоком и плотной молочной пеной."}/>
                <CardWithButton onAdd={onAdd} name_img = {vanillaLatte}  alt_={"vanilaLatte"} title={"Ванильный латте"} price={6.00} description={"Нежный эспрессо с домашним ванильным сиропом и бархатистой молочной пеной."}/>
                <CardWithButton onAdd={onAdd} name_img = {ethiopianPour_over}  alt_={"ethiopianPour_over"} title={"Эфиопия пуровер"} price={6.30} description={"Моносорт ручного заваривания с нотами жасмина, черники и мёда."}/>
                <CardWithButton onAdd={onAdd} name_img = {doubleEspresso}  alt_={"doubleEspresso"} title={"Двойной эспрессо"} price={5.00} description={"Двойная порция нашегофирменного эспрессо с насыщенной крема."}/>
                <CardWithButton onAdd={onAdd} name_img = {flatWhite}  alt_={"flatWhite"} title={"Флэт уайт"} price={6.00} description={"Бархатистая микропена поверх ристретто для мягкого и сбалансированного вкуса."}/>
                <CardWithButton onAdd={onAdd} name_img = {mocha}  alt_={"mocha"} title={"Мокка с тёмным шоколадом"} price={7.00} description={"Яркий эспрессо с тёмным шоколадом и нежным вспененным молоком."}/>
                <CardWithButton onAdd={onAdd} name_img = {americano}  alt_={"americano"} title={"Американо"} price={4.80} description={"Два шота эспрессо, разбавленные горячей водой, для чистого и насыщенного вкуса."}/>
                <CardWithButton onAdd={onAdd} name_img = {hazelnutLatte}  alt_={"ehazelnutLatte"} title={"Латте с фундукомпия пуровер"} price={5.50} description={"Ореховый, слегка сладкий кофейный напиток с нежным вспененным молоком."}/>
            </div>
        </div>
    );
}

export default EspressoSection;