import React, { useState, useEffect } from "react";
import { CartProvider } from "./components/ContextCartContext";
import API from "./components/API";
import Part from "./components/Part";
import { Cart } from "./components/Cart";
import { Table } from 'react-bootstrap';
import "./App.css";



export default function App()  {

  const [fromDatabase,setfromDatabase] = useState([])
  const [modalShow, setModalShow] = useState(false);
  
  function getAPI() {
    API.getParts()
    .then(data => {
      setfromDatabase(data.data);
      })
  }

  useEffect(() => {
    getAPI();
  }, [])

    return (
      <CartProvider>
      <div>
        <img className="logo" src="../faure-herman-logo.jpg" alt="Faure Herman logo"></img>
        <h1 className="text-center">Spare Parts Quotation</h1>
        <button className="btn exports mx-auto" onClick={() => setModalShow(true)}>Show Cart</button>
        <br/>
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
        <Table responsive bordered hover>
          <thead className="table-header">
            <tr></tr>
            <th>Picture</th>
            <th>Part Number</th>
            <th>Part Type</th>
            <th>Description</th>
            <th>Unit Cost</th>
            <th>In Stock</th>
            <th>Quantity to Quote</th>
            <th>Add to Cart</th>
            <tr></tr>
          </thead>
          <tbody>
            {fromDatabase.map(data => (
              <Part key={data.id} data={data}/>
            ))}
          </tbody>

        </Table>

      </div>
      </CartProvider>
    )
  
}

