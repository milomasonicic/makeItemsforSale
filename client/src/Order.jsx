import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contract/Items.json"; // Adjust the path to your ABI

export default function Order() {
  //const { contract } = state;
  const [orders, setOrders] = useState([]);
/*
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
*/
  return (
    <div>
      <h2>Orders</h2>
    
    </div>
  );
}

/*

  <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <p>Order ID: {index + 1}</p>
            <p>Product Name: {order.productName}</p>
            <p>Price: {order.price}</p>
            <p>Buyer: {order.buyer}</p>
            <p>Seller: {order.seller}</p>
            <p>State: {order.state}</p>
          </li>
        ))}
      </ul>

*/


