
import { useState, useRef } from "react";
import { Contract, ethers } from "ethers";
import abi from "./contract/ItemsForSell.json"
import { formatUnits } from "ethers";
import CreateOrder from "./CreateOrder";



import './App.css'

function CreateItem() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(" ");

  const [state, setState] = useState({
      provider:null,
      signer:null,
      contract:null
  })

  

  async function connectWallet() {

    if(!connected) {
        
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();
        
        //wallet
        const walletAddress = await signer.getAddress();
        setConnected(true);
        setWalletAddress(walletAddress); 

        //balance
        
        if(walletAddress !== null){
            const balance1 = await provider.getBalance(walletAddress)
            const showBalance = formatUnits(balance1,"ether")
            setBalance(showBalance)
        }
    
        const contractAddres = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
        const contractABI = abi.abi;
        console.log(contractABI)

        const contract = new ethers.Contract(
            contractAddres,
            contractABI,
            signer
        )

    
        setState({provider,signer,contract});

        console.log("app state", state)
         if(contract) {
              
        const owner = contract.orderCounter( ) 
        console.log(owner)
         } 
    
    } else {
        // Disconnect the wallet
        //window.ethereum.selectedAddress = null;
        setConnected(false);
        setWalletAddress("");

    }
}

  return (
    <>
  
      <div>
       <h1 style={{padding:"40px"}}>Create Items </h1>
       

        <button onClick={connectWallet}> Connect</button>

        <p>
        {walletAddress}
       </p>
       
      </div>

      <div>
        
        {connected ?
                     <div className="bg-blue-100 rounded-3xl">
                         <CreateOrder state={state} />
                     </div>
                     : 
         "" }
        
      </div>

  
       
      
    </>
  )
}

export default CreateItem
