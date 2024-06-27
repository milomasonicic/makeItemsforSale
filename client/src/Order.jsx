import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

export default function Order({ contract }) {
  const [orders, setOrders] = useState([]); // State za čuvanje ordera
  const navigate = useNavigate();

  const sellerRef = useRef(null);
  const priceRef = useRef(null);
  const productNameRef = useRef(null);

  const handleEditClick = (order) => {
    const { seller, price, productName } = order;
    sellerRef.current.value = seller;
    priceRef.current.value = ethers.utils.formatEther(price); // Formatiraj cenu u ether
    productNameRef.current.value = productName;
    navigate("/edit", { state: { order } });
  };

  useEffect(() => {
    const fetchOrders = async () => {
      if (contract) {
        try {
          const orderCounter = await contract.orderCounter();
          const ordersFromContract = [];

          for (let i = 1; i <= orderCounter; i++) {
            const order = await contract.orders(i);
            ordersFromContract.push({
              productName: order.productName,
              price: order.price, // Nemoj formatirati ovde, formatiraj samo pri prikazu
              seller: order.seller,
            });
          }

          setOrders(ordersFromContract); // Ažuriraj state sačuvane ordera
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchOrders();
  }, [contract]);

  return (
    <div>
      <h2 style={{ marginTop: "30px" }}>Orders</h2>

      <div style={{ marginTop: "50px" }}>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Item Price</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.productName}</td>
                <td> ETH</td>
                <td>
                  <button onClick={() => handleEditClick(order)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
