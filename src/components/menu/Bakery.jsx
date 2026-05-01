import React from "react";
import CardWithButton from "../templates/CardWithButton";
import "./Sections.css"
import croissantWithButter from "../../img/croissantWithButter.svg"
import blueberryMuffin from "../../img/blueberryMuffin.svg"
import avocadoToast from "../../img/avocadoToast.svg"; 
import chocolateChipCookies from "../../img/chocolateChipCookies.svg"; 
import mochi from "../../img/mochi.svg"; 
import trifle from "../../img/trifle.svg"; 
import macaron from "../../img/macaron.svg"; 
import brownie from "../../img/brownie.svg"; 

const Bakery = ({onAdd}) => {

    return(
        <div className="section-wrapper">
            <div className="category-heading">
                <h1 className="category-title">Выпечка и еда</h1>
            </div>
            <div className="products-grid">
                <CardWithButton onAdd={onAdd} name_img = {croissantWithButter}  alt_={"croissantWithButter"} title={"Круассан с маслом"} price={3.00} description={"Классическая французская выпечка — маслянистая, слоёная и свежая каждое утро."}/>
                <CardWithButton onAdd={onAdd} name_img = {blueberryMuffin}  alt_={"blueberryMuffin"} title={"Черничный маффин"} price={2.80} description={"Щедро наполнен черникой и покрыт хрустящей крошкой сверху."}/>
                <CardWithButton onAdd={onAdd} name_img = {avocadoToast}  alt_={"avocadoToast"} title={"Тост с авокадо"} price={4.50} description={"Авокадо на заквасочном хлебе с хлопьями чили и микрозеленью."}/>
                <CardWithButton onAdd={onAdd} name_img = {chocolateChipCookies}  alt_={"dchocolateChipCookies"} title={"Печенье с шоколадом и морской солью"} price={1.00} description={"Печенье на коричневом масле с шоколадом и щепоткой морской соли."}/>
                <CardWithButton onAdd={onAdd} name_img = {mochi}  alt_={"mochi"} title={"Моти"} price={2.30} description={"Моти — японское лакомство из рисового теста с кремовой начинкой. Легкий, необычный и очень инстаграмный."}/>
                <CardWithButton onAdd={onAdd} name_img = {trifle}  alt_={"trifle"} title={"Трайфл"} price={4.00} description={"Порционный десерт в стаканчике: слои бисквита, крема и ягод. Удобно брать с собой."}/>
                <CardWithButton onAdd={onAdd} name_img = {macaron}  alt_={"macaron"} title={"Макароны"} price={2.00} description={"Мини-печенье из миндальной муки с яркими начинками. Идеальный формат «на один укус»."}/>
                <CardWithButton onAdd={onAdd} name_img = {brownie}  alt_={"ebrownie"} title={"Брауни"} price={4.00} description={"Cупершоколадный, влажный пирог с тягучей текстурой. Идеален для любителей насыщенных вкусов."}/>
            </div>
        </div>
    );
}

export default Bakery;
