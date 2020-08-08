import React, { useContext } from "react"
import { CartContext } from "./ContextCartContext";
import "./index.css";
import "../App.css";

export default function CartPart(props) {
    const [cart, setCart] = useContext(CartContext);

    const removeFromCart = () => {
        setCart(cart.filter(item => item.id !== props.data.id))
    }

    return (
        <tr>
            <td>{props.data.partNumber}</td>
            <td>{props.data.partType}</td>
            <td>{props.data.description}</td>
            <td>${props.data.partPrice}</td>
            <td>{props.data.quantity}</td>
            <td>${props.data.subTotal}</td>
            <td><button className="btn exports" onClick={removeFromCart}>Remove</button></td>
        </tr>
    )
}