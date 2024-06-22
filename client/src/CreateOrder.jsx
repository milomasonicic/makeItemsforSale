import { useState } from "react";
import abi from "./contract/supply.json"

import { ethers,  parseUnits} from "ethers";
import Order from "./Order";


export default function CreateOrder({state}) {
    //const { state } = props;
    //console.log('State iz order:', state);

    const create = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        console.log(contract)
        const _productName = document.querySelector("#productName").value;
        
        const amountValue = document.querySelector("#price").value;
     
        //const _price = String(amountValue * 10000000000000000000) // convert to WEI
        //const _price = {value:parseEther(amountValue.toString())}
        
  
        // Pretpostavimo da je amountValue vrednost iz input polja u ETH
        const amm = "50000";  // npr. 2 ETH
        const _price = ethers.parseUnits(amm, 'ether'); // Konvertuje 2 ETH u wei
        //const _price = {value:amount.toString()}
        const transaction = await contract.createOrder( _productName, _price)
        await transaction.wait();

        alert("Transaction is successul");
        //contract.on
        //window.location.reload();
      }
  
    

    return(
        <div>

            <h2>Komp</h2>
            <form action="" onSubmit={create}>
                <div className="mx-auto my-4">
                    <input type="text" required="required" id="productName" placeholder="Name" />
                </div>

                <div  className="mx-auto my-4">
                <select name="amount" id="price">
                <option value="1">1 ETH</option>
                <option value="2">2 ETH</option>
                <option value="5">5 ETH</option>
                </select>
                </div>


                <button>Create</button>

            </form>
          
        </div>
    )
}