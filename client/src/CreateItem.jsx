import React from "react";
import { useWallet } from "./WalletContext";
import './App.css';
import CreateOrder from "./CreateOrder";
import Order from "./Order";

function CreateItem() {
  const { state, connectWallet } = useWallet();
  const { connected, walletAddress, balance, contract } = state;

  return (
    <div>
      <button onClick={connectWallet}>
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
      {connected && (
        <div>
          <p>Wallet Address: {walletAddress}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}

      <div>
      {connected ?
                     <div className="bg-blue-100 rounded-3xl">
                         <CreateOrder state={state} />
                         <Order state={state}></Order>
                     </div>
                     : 
         "" }
      </div>

    
    </div>
  );
}

export default CreateItem;
