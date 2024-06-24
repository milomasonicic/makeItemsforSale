import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useRef } from "react";
import abi from "./contract/Items.json"; // Adjust the path to your ABI
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export default function Order({state}) {
  const { contract } = state;
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();


  const sellerRef = useRef(null);
  const priceRef = useRef(null);
  const productNameRef = useRef(null);
 

  const handleEditClick = () => {
    const order = {
      seller: sellerRef.current.value,
      price: priceRef.current.value,
      productName: productNameRef.current.value,
    };
    navigate('/edit', { state: { order } });
  };

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

          <form action="" onSubmit={(e) => { e.preventDefault(); handleEditClick(); }}>
            <input type="text" ref={sellerRef} defaultValue={order.seller} style={{ display: 'none' }} />
            <input type="text" ref={priceRef} defaultValue={order.price} style={{ display: 'none' }} />
            <input type="text" ref={productNameRef} defaultValue={order.productName} style={{ display: 'none' }} />
            <button type="submit">Edit</button>
        </form>

          </td>
          
        </tr>
      
         
      </table>
      ))}
   
    </div>
      
    
    </div>
  );
}