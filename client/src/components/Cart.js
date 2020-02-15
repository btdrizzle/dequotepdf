import React, { useContext, useEffect } from "react"
import { CartContext } from "./ContextCartContext";
import { Modal, Table } from "react-bootstrap";
import PDF from "./PDF";
import CartPart from "./CartPart";
import "./index.css";
import "../App.css";

export const Cart = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const pdfValues = cart.map(item => ({
    partNumber: item.partNumber, partType: item.partType, description: item.description,
    partPrice: "$" + item.partPrice.toString(), quantity: item.quantity, subTotal: "$" + item.subTotal.toString()
  }));
  function Sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].subTotal;
    }
    return total;

  }


  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart for Quote
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive bordered hover>
          <thead className="table-header">
            <tr></tr>
            <th>Part Number</th>
            <th>Part Type</th>
            <th>Description</th>
            <th>$Unit Cost</th>
            <th>Quantity to Quote</th>
            <th>$Subtotal</th>
            <th>Remove from Cart</th>
            <tr></tr>
          </thead>
          <tbody>
            {cart.map(data => (
              <CartPart key={data.id} data={data} />
            ))}
          </tbody>

        </Table>
      </Modal.Body>
      <Modal.Footer>
        <PDF
          pdfHeaders={["Part Number", "Part Type", "Part Description", "Part Cost", "Quantity Quoted", "Subtotal"]}
          pdfValues={pdfValues}
          total={Sum(cart)}
        />

      </Modal.Footer>

    </Modal>
  )
}

// <button className="btn exports" onClick={props.onHide}>Close</button>
// Remove line 65 if you want to remove the close button