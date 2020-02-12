import React, { Component } from "react";
import API from "./components/API";
import PDF from "./components/PDF";
import Table from 'react-bootstrap/Table';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fromDatabase: [],
        toPDF: []
      }
    }
    handleChange = async event => {
      const { name, value } = event.target;
      await this.setState({
          [name]: value
      });
    }
    async componentDidMount() {
        await API.getParts()
        .then(data => {
            this.setState({fromDatabase: data.data});
            console.log(this.state.fromDatabase)
        })
    }


    render() {
      
      const dataCopy = this.state.fromDatabase;
      let sendData = dataCopy.map(data => ({
        partNumber: data.partNumber,partType: data.partType,partDescription:data.partDescription,partPrice:data.partPrice,
        quantityOrdered: 0, totalPrice: 0
      }))



      return(
          <div>
              <h1 className="text-center">Faure Herman Spare Parts Quotation</h1>
              <PDF className="mx-auto"
                  pdfHeaders={["Part Number","Part Type","Part Description","Part Cost", "Quantity Ordered", "Total Price"]}
                  pdfValues={sendData}

              />
              <Table responsive bordered hover>
                <thead>
                  <tr></tr>
                  <th>Picture</th>
                  <th>Part Number</th>
                  <th>Part Type</th>
                  <th>Description</th>
                  <th>Unit Cost</th>
                  <th>In Stock</th>
                  <th>Quantity to Order</th>
                  <th>Add to Cart</th>
                  <tr></tr>
                </thead>
                  <tbody>
                      {this.state.fromDatabase.map(data => (
                        <tr>
                          <td><img src={data.partPath} width="200" height="auto"></img></td>
                          <td>{data.partNumber}</td>
                          <td>{data.partType}</td>
                          <td>{data.partDescription}</td>
                          <td>{data.partPrice}</td>
                          <td>{data.inStock === true ? "Yes" : "No"}</td>
                        </tr>
                      ))}
                  </tbody>
                  
              </Table>

          </div>
      )
    }
}

export default App;
