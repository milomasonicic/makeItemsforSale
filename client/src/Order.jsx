import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contract/Items.json"; // Adjust the path to your ABI

export default function Order({state}) {
  const { contract } = state;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (contract) {
        try {
          const orderCounter = await contract.orderCounter();
          const ordersFromContract = [];

          for (let i = 1; i <= orderCounter; i++) {
            const order = await contract.orders(i);
            ordersFromContract.push(order);
          }

          setOrders(ordersFromContract);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchOrders();
  }, [contract]);

  return (
    <div>
      <h2 style={{marginTop: '30px' }}>Orders</h2>

    <div style={{marginTop: '50px' }}>

      {orders.map((order, index) => (
      <table key={index} style={{ margin: 'auto'}}>
        <tr>
          
          <th>Product Name</th>
          <th></th>
        </tr>
        <tr>
          
          <td>{order.productName}</td>
          <td>{order.price}</td>
          <td>

            <form action="">
            <input type="text" value={order.seller} style={{ display: 'none'}}  />
            <input type="text" value={order.price} style={{ display: 'none'}} />
            <button>
              edit
            </button>  
            </form>

          </td>
          
        </tr>
      
         
      </table>
      ))}
   
    </div>
      
    
    </div>
  );
}