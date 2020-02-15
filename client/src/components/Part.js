import React, { useContext, useState } from "react";
import { CartContext } from "./ContextCartContext";

function Part(props) {

    const [select, setSelect] = useState('0');
    const [cart, setCart] = useContext(CartContext);


    const addToCart = () => {
        if (select > 0) {
            const newPart = {
                id: props.data.id, partNumber: props.data.partNumber, partType: props.data.partType, description: props.data.partDescription,
                partPrice: props.data.partPrice, quantity: select, subTotal: (props.data.partPrice * select)
            };
            setCart(current => [...current, newPart]);
        }

    }
    return (
        <tr>
            <td><img src={props.data.partPath} alt="part path" width="200" height="auto"></img></td>
            <td>{props.data.partNumber}</td>
            <td>{props.data.partType}</td>
            <td>{props.data.partDescription}</td>
            <td>${props.data.partPrice}</td>
            <td>{props.data.inStock === true ? "Yes" : "No"}</td>
            <td>
                <select value={select} onChange={event => setSelect(event.target.value)} name="select" className="form-control">
                    <option className="option" value="0">0</option>
                    <option className="option" value="1">1</option>
                    <option className="option" value="2">2</option>
                    <option className="option" value="3">3</option>
                    <option className="option" value="4">4</option>
                    <option className="option" value="5">5</option>
                    <option className="option" value="6">6</option>
                    <option className="option" value="7">7</option>
                    <option className="option" value="8">8</option>
                    <option className="option" value="9">9</option>
                    <option className="option" value="10">10</option>
                </select>
            </td>
            <td><button className="btn exports" onClick={addToCart}>Add To Cart</button></td>
        </tr>
    )

}

export default Part;
