import { useState } from "react";
import { createContext } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }: any) {
  const [balanceBNB, setBalanceBNB] = useState(0);
  const [balanceBEET, setBalanceBEET] = useState(0);
  const [balanceBEETStaked, setBalanceBEETStaked] = useState(0);

  return (
    <RefContext.Provider
      value={
        {
          balanceBNB,
          setBalanceBNB,
          balanceBEET,
          setBalanceBEET,
          balanceBEETStaked,
          setBalanceBEETStaked,
        } as any
      }
    >
      {children}
    </RefContext.Provider>
  );
}
