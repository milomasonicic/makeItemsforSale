import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import abi from "./contract/ItemsForSell.json";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  const providerRef = useRef(null);
  const signerRef = useRef(null);
  const contractRef = useRef(null);

  useEffect(() => {
    const initializeWallet = async () => {
      // Check local storage for saved wallet data
      const savedWalletAddress = localStorage.getItem("walletAddress");
      const savedConnected = localStorage.getItem("connected") === "true";

      if (savedConnected && savedWalletAddress) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();

          const walletAddress = await signer.getAddress();
          const balance = await provider.getBalance(walletAddress);
          const showBalance = ethers.formatUnits(balance, "ether");

          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contractABI = abi.abi;
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          providerRef.current = provider;
          signerRef.current = signer;
          contractRef.current = contract;

          setConnected(true);
          setWalletAddress(walletAddress);
          setBalance(showBalance);

          console.log("Wallet connected:", {
            walletAddress,
            balance: showBalance,
            provider,
            signer,
            contract,
          });
        } catch (error) {
          console.error("Error connecting wallet:", error);
          // Handle errors connecting wallet if needed
        }
      }
    };

    initializeWallet();
  }, []);

  const connectWallet = async () => {
    if (!connected) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const walletAddress = await signer.getAddress();
        const balance = await provider.getBalance(walletAddress);
        const showBalance = ethers.formatUnits(balance, "ether");

        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contractABI = abi.abi;
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        providerRef.current = provider;
        signerRef.current = signer;
        contractRef.current = contract;

        setConnected(true);
        setWalletAddress(walletAddress);
        setBalance(showBalance);

        // Save wallet data to local storage
        localStorage.setItem("connected", "true");
        localStorage.setItem("walletAddress", walletAddress);

        console.log("Wallet connected:", {
          walletAddress,
          balance: showBalance,
          provider,
          signer,
          contract,
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
        // Handle errors connecting wallet if needed
      }
    } else {
      providerRef.current = null;
      signerRef.current = null;
      contractRef.current = null;

      setConnected(false);
      setWalletAddress("");
      setBalance("");

      // Clear saved wallet data from local storage
      localStorage.removeItem("connected");
      localStorage.removeItem("walletAddress");
    }
  };

  return (
    <WalletContext.Provider
      value={{
        connected,
        walletAddress,
        balance,
        provider: providerRef.current,
        signer: signerRef.current,
        contract: contractRef.current,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);


