import { useState } from "react";
import abi from "./contract/supply.json"

import { ethers,  parseUnits} from "ethers";
import Order from "./Order";


export default function CreateOrder({state}) {
    //const { state } = props;
    //console.log('State iz order:', state);

    const create = async(event)=>{

        event.preventDefault();
        const { contract } = state;
        const _productName = document.querySelector("#productName").value;
        const amountValue = document.querySelector("#price").value;

        // Use the entered value directly as a number
        const _price = parseInt(amountValue, 10); // Convert string to number
        const transaction = await contract.createOrder(_productName, _price);
        await transaction.wait();

        alert("Transaction is successful");
        
      }
  
    

    return(
        <div>

            <h2>Komp</h2>
            <form action="" onSubmit={create}>
                <div className="mx-auto my-4">
                    <input type="text" required="required" id="productName" placeholder="Name" />
                </div>

                
                <div className="mx-auto my-4">
                    <input type="number" required="required" id="price" placeholder="Price in units" />
                </div>
                


                <button>Create</button>

            </form>
          
        </div>
    )
}