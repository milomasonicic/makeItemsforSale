import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import abi from "./contract/ItemsForSell.json";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [state, setState] = useState({
    connected: false,
    walletAddress: "",
    balance: "",
    provider: null,
    signer: null,
    contract: null,
  });

  const connectWallet = async () => {
    if (!state.connected) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const walletAddress = await signer.getAddress();
      const balance = await provider.getBalance(walletAddress);
      const showBalance = ethers.formatUnits(balance, "ether");

      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contractABI = abi.abi;
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      setState({
        connected: true,
        walletAddress,
        balance: showBalance,
        provider,
        signer,
        contract,
      });

      console.log("Wallet connected:", {
        walletAddress,
        balance: showBalance,
        provider,
        signer,
        contract,
      });
    } else {
      setState({
        connected: false,
        walletAddress: "",
        balance: "",
        provider: null,
        signer: null,
        contract: null,
      });
    }
  };

  return (
    <WalletContext.Provider value={{ state, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);