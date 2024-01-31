"use client";
import { createContext, useContext, useState  } from "react";

type Account = {
	unisat: string;
	okx: string;
}


type ContextType = {
  account: Account;
  setAccount: React.Dispatch<any>;
};


const WalletContext = createContext<ContextType>({
  account: {
    unisat : "",
    okx: ""
  },
  setAccount: () => null
});


export default function WalletProvider({ children }: {
	children: React.ReactNode;
}) {

  let [account, setAccount] = useState({
    unisat : "",
    okx: ""
  })

  return (
    <WalletContext.Provider value={{
      account,
      setAccount
    }}>
      {children}
    </WalletContext.Provider>
  );
}

// Make useWalletContext Hook to easily use our context throughout the application
export function useWalletContext() {
  return useContext(WalletContext);
}