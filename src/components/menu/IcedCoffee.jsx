import React from "react";
import CardWithButton from "../templates/CardWithButton";
import "./Sections.css"
import nitroColdBrew from "../../img/nitroColdBrew.svg"; 
import icedCaramelMacchiato from "../../img/icedCaramelMacchiato.svg"
import icedVanillaLatte from "../../img/icedVanillaLatte.svg"
import ColdBrewWithSweetCream from "../../img/ColdBrewWithSweetCream.svg"; 
import espressoTonic from "../../img/espressoTonic.svg"; 
import espressoShakenWithBrownSugar from "../../img/espressoShakenWithBrownSugar.svg"; 
import iceMocha from "../../img/iceMocha.svg"; 
import coldBrewWithOatMilk from "../../img/coldBrewWithOatMilk.svg"; 

const IcedCoffee = ({onAdd}) => {

    return(
        <div className="section-wrapper">
            <div className="category-heading">
                <h1 className="category-title">Холодный кофе</h1>
            </div>
            <div className="products-grid">
                <CardWithButton onAdd={onAdd} name_img = {nitroColdBrew}  alt_={"nitroColdBrew"} title={"Нитро колд брю"} price={5.50} description={"Заваривается 18 часов и насыщается азотом для особенно кремовой текстуры."} />
                <CardWithButton onAdd={onAdd} name_img = {icedCaramelMacchiato}  alt_={"icedCaramelMacchiato"} title={"Айс карамель макиато"} price={6.50} description={"Эспрессо, молоко и лёд, дополненные карамельным сиропом."}/>
                <CardWithButton onAdd={onAdd} name_img = {icedVanillaLatte}  alt_={"icedVanillaLatte"} title={"Айс латте"} price={6.80} description={"Охлаждённый эспрессо с молоком, льдом и нашим мягким ванильным сиропом."} />
                <CardWithButton onAdd={onAdd} name_img = {ColdBrewWithSweetCream}  alt_={"eColdBrewWithSweetCream"} title={"Колд брю со сливками"} price={7.40} description={"Наш классический колд брю с шапкой из домашних ванильных сливок."}/>
                <CardWithButton onAdd={onAdd} name_img = {espressoTonic}  alt_={"espressoTonic"} title={"Эспрессо-тоник"} price={6.70} description={"Яркое сочетание тоника, эспрессо и апельсиновой цедры."}/>
                <CardWithButton onAdd={onAdd} name_img = {espressoShakenWithBrownSugar}  alt_={"espressoShakenWithBrownSugar"} title={"Шейкен эспрессо"} price={6.40} description={"Эспрессо, взбитый со льдом и коричневым сахаром, для освежающего вкуса."}/>
                <CardWithButton onAdd={onAdd} name_img = {iceMocha}  alt_={"iceMocha"} title={"Айс мокка"} price={5.90} description={"Холодный эспрессо с шоколадом и молоком, подаётся со льдом."}/>
                <CardWithButton onAdd={onAdd} name_img = {coldBrewWithOatMilk}  alt_={"ehazelnutLatte"} title={"Колд брю на овсяном молоке"} price={7.20} description={"Мягкий колд брю с овсяным молоком и лёгкой поджаристой сладостью."}/>
            </div>
        </div>
    );
}

export default IcedCoffee;