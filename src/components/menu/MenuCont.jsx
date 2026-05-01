import React,{useState} from "react";
import MenuTitle from "./MenuTitle.jsx";
import MenuSort from "./MenuSort.jsx";
import EspressoSection from "./EspressoSection.jsx";
import IcedCoffee from "./IcedCoffee.jsx";
import Bakery from "./Bakery.jsx";
import Tea from "./Tea.jsx";
import SignatureCoffee from "./SignatureCoffee.jsx";

const MenuCont = ({ onAdd }) => {
    const[view_menu, setView_menu] = useState({
        espresso: true,
        iced: true,
        signature: true,
        tea: true,
        bakery: true
    });

    const ClickAll = () =>{
        setView_menu({
            espresso: true,
            iced: true,
            signature: true,
            tea: true,
            bakery: true
        })
    }

    const ClickEspresso = () =>{
        setView_menu({
            espresso: true,
            iced: false,
            signature: false,
            tea: false,
            bakery: false
        })
    }

    const ClickIced = () =>{
        setView_menu({
            espresso: false,
            iced: true,
            signature: false,
            tea: false,
            bakery: false
        })
    }

    const ClickSignature = () =>{
        setView_menu({
            espresso: false,
            iced: false,
            signature: true,
            tea: false,
            bakery: false
        })
    }

    const ClickTea = () =>{
        setView_menu({
            espresso: false,
            iced: false,
            signature: false,
            tea: true,
            bakery: false
        })
    }

    const ClickBakery = () =>{
        setView_menu({
            espresso: false,
            iced: false,
            signature: false,
            tea: false,
            bakery: true
        })
    }

    return(
        <div>
            <MenuTitle/>
            <MenuSort onClickAll={ClickAll} onClickEspresso={ClickEspresso} onClickIced={ClickIced} onClickSignature={ClickSignature} onClickTea={ClickTea} onClickBakery={ClickBakery}/>
            {view_menu.espresso && <EspressoSection onAdd={onAdd}/>}
            {view_menu.iced && <IcedCoffee onAdd={onAdd}/>}
            {view_menu.signature && <SignatureCoffee onAdd={onAdd}/>}
            {view_menu.tea && <Tea onAdd={onAdd}/>}
            {view_menu.bakery && <Bakery onAdd={onAdd}/>}
            


        </div>
    )
}
export default MenuCont;