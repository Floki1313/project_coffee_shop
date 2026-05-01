import React from "react";
import CardWithButton from "../templates/CardWithButton";
import "./Sections.css"
import rafCoffee from "../../img/rafCoffee.svg"
import bumblebeeCoffee from "../../img/bumblebeeCoffee.svg"
import cheeseLatte from "../../img/cheeseLatte.svg"; 
import affogato from "../../img/affogato.svg"; 
 

const SignatureCoffee = ({onAdd}) => {

    return(
        <div className="section-wrapper">
            <div className="category-heading">
                <h1 className="category-title">Фирменные кофе</h1>
            </div>
            <div className="products-grid">
                <CardWithButton onAdd={onAdd} name_img = {rafCoffee}  alt_={"rafCoffee"} title={"Раф-кофе"} price={7.00} description={"Популярный десертный напиток, где эспрессо взбивается вместе со сливками и ванильным сахаром. Имеет нежную консистенцию подтаявшего мороженого."}/>
                <CardWithButton onAdd={onAdd} name_img = {bumblebeeCoffee}  alt_={"bumblebeeCoffee"} title={"Бамбл-кофе"} price={6.80} description={"Освежающий многослойный коктейль из льда, карамельного сиропа, свежевыжатого апельсинового сока и порции эспрессо. По виду напоминает окрас шмеля."}/>
                <CardWithButton onAdd={onAdd} name_img = {cheeseLatte}  alt_={"cheeseLatte"} title={"Сырный латте"} price={7.20} description={"Необычный напиток с добавлением мягкого сыра или сырной пудры, что придает кофе сливочно-соленый «чизкейковый» вкус."}/>
                <CardWithButton onAdd={onAdd} name_img = {affogato}  alt_={"affogato."} title={"Аффогато"} price={6.50} description={"Кофейный десерт, состоящий из шарика ванильного мороженого, который заливается порцией горячего эспрессо."}/>
            </div>
        </div>
    );
}

export default SignatureCoffee;
