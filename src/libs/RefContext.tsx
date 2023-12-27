import { useState } from "react";
import { createContext } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }: any) {
  const [balanceBNB, setBalanceBNB] = useState(0);
  const [balanceBEET, setBalanceBEET] = useState(0);
  const [balanceBEETStaked, setBalanceBEETStaked] = useState(0);
  const [balanceBEETNFT, setBalanceBEETNFT] = useState(0);
  const [balanceBEETClaimReward, setBalanceBEETClaimReward] = useState(0);
  const [flagModalDelegate, setFlagModalDelegate] = useState(false);
  const [dataValidator, setDataValidator] = useState({});
  const [dataUser, setDatauser] = useState();

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
          flagModalDelegate,
          setFlagModalDelegate,
          dataValidator,
          setDataValidator,
          balanceBEETNFT,
          setBalanceBEETNFT,
          balanceBEETClaimReward,
          setBalanceBEETClaimReward,
          dataUser,
          setDatauser,
        } as any
      }
    >
      {children}
    </RefContext.Provider>
  );
}
