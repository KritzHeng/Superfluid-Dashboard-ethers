import { ethers } from "ethers";

// declare global {
//   interface Window {
//     ethereum: any; // TODO: find the type
//   }
// }

export const getEthereum = () => {
  if (typeof window.ethereum !== "undefined") {
    return window.ethereum;
  }
  return null;
};

export const getProvider = () => {
  const ethereum = getEthereum();
  if (ethereum) {
    return new ethers.providers.Web3Provider(getEthereum());
  }
  return null;
};

export const connectWallet = () => {
  return getEthereum()?.request({
    method: "eth_requestAccounts",
  })
};

export const getWalletAddress = () => {
  return getEthereum()?.selectedAddress;
};

export const getChainId = () => {
  return getEthereum()?.request({ method: "eth_chainId" })
};

export const getBalance = (address) => {
  const provider = getProvider();
  return provider?.getBalance(address);
};