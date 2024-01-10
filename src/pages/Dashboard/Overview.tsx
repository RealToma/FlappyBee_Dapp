import { Box } from "@mui/material";
import styled from "styled-components";
import { useContext, useState } from "react";
// import { FaUser } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { shortAddress, shortFloat } from "../../libs/Functions";
import copy from "copy-to-clipboard";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { RefContext } from "../../libs/RefContext";
import Chart from "react-apexcharts";
import imgUser01 from "../../assets/images/icons/user01.png";
import imgButtonGreen01 from "../../assets/images/buttons/GreenButton01.svg";
import { TextStakeTitle } from "../../components/Text/TextStakeTitle";
import { NotificationManager } from "react-notifications";

const dataChartAssets: any = {
  // series: [70, 20, 10],
  options: {
    // chart: {
    //   width: 380,
    //   type: "pie",
    // },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: true,
        opacity: 0.5,
      },
    },
    labels: [" BNB", " BEET", " BEET NFTs"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const Overview = () => {
  const { account, active } = useWeb3React();
  const [flagCopiedAddress, setFlagCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    setFlagCopiedAddress(true);
    copy(account as any);
    setTimeout(() => {
      setFlagCopiedAddress(false);
    }, 1000);
  };

  const {
    balanceBNB,
    balanceBEET,
    balanceBEETStaked,
    balanceBEETNFT,
    balanceBEETClaimReward,
    dataUser,
  }: any = useContext(RefContext);

  const handleClaim = () => {
    if (account === undefined || account === null) {
      return NotificationManager.warning("Connect your wallet.", "", 3000);
    }
  };

  const getAssetPercent = (amount: any) => {
    const totalUSD =
      balanceBNB * 250 +
      (balanceBEET + balanceBEETStaked) *
        (process.env.REACT_APP_PRICE_BEET_USD as any) +
      balanceBEETNFT * (process.env.REACT_APP_PRICE_BEETNFT_USD as any);
    return (amount / totalUSD) * 100;
  };

  const handleOpenMetamask = () => {
    // if (window.ethereum) {
    //   window.ethereum
    //     .request({ method: "eth_requestAccounts" })
    //     .then((accounts) => {
    //       console.log("Connected to MetaMask:", accounts[0]);
    //     })
    //     .catch((error) => {
    //       console.error("Error connecting to MetaMask:", error);
    //     });
    // } else {
    //   console.error("MetaMask not installed");
    // }
  };

  return (
    <StyledComponent>
      <SectionTop>
        <SectionUser>
          <IconUser>
            <img src={imgUser01} width={"100%"} alt="user" />
          </IconUser>
          <SectionUserDetail>
            <SectionAddressWallet>
              <TextAddressWallet>
                {active ? shortAddress(account) : "Connect Wallet"}
              </TextAddressWallet>
              {active && (
                <IconCopyAddress
                  onClick={() => {
                    handleCopyAddress();
                  }}
                >
                  {!flagCopiedAddress ? <HiClipboard /> : <HiClipboardCheck />}
                </IconCopyAddress>
              )}
            </SectionAddressWallet>
            <SectionAddressWallet>
              <TextSmallDate>First Joined :</TextSmallDate>
              <TextBigDate>{active ? dataUser?.dateJoined : "_"}</TextBigDate>
            </SectionAddressWallet>
            <SectionAddressWallet>
              <TextSmallDate>Last Login :</TextSmallDate>
              <TextBigDate>
                {active ? dataUser?.dateLastLoggedIn : "_"}
              </TextBigDate>
            </SectionAddressWallet>
            <SectionAddressWallet>
              <TextSmallDate>P2E Seesion Available :</TextSmallDate>
              <TextP2EAvailable>
                {active
                  ? dataUser && parseInt(dataUser?.countP2EAvailable)
                  : "_"}
              </TextP2EAvailable>
            </SectionAddressWallet>
          </SectionUserDetail>
        </SectionUser>
        <SectionClaimable>
          <TextClaimableRewards>
            Claimable Staking Rewards :
          </TextClaimableRewards>
          <SectionClaim>
            <TextBEETtoUSD>
              {active
                ? `${shortFloat(
                    balanceBEETClaimReward,
                    3
                  )} $BEET = ${shortFloat(
                    balanceBEETClaimReward *
                      (process.env.REACT_APP_PRICE_BEET_USD as any),
                    3
                  )} USD`
                : "Connect Wallet"}
            </TextBEETtoUSD>
            <ButtonClaim onClick={() => handleClaim()}>Claim Now</ButtonClaim>
          </SectionClaim>
        </SectionClaimable>
      </SectionTop>
      <SecionBEETBalance>
        <SectionEachStatsBEET>
          <TextHead01>Total BEET Wallet</TextHead01>
          <TextContent01>
            {active
              ? `${shortFloat(
                  balanceBEET + balanceBEETStaked,
                  5
                )} $BEET = ${shortFloat(
                  (balanceBEET + balanceBEETStaked) *
                    (process.env.REACT_APP_PRICE_BEET_USD as any),
                  3
                )} USD`
              : "Connect Wallet"}
          </TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Available</TextHead01>
          <TextContent01>
            {active
              ? `${shortFloat(balanceBEET, 5)} $BEET = ${shortFloat(
                  balanceBEET * (process.env.REACT_APP_PRICE_BEET_USD as any),
                  3
                )} USD`
              : "Connect Wallet"}
          </TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Staked</TextHead01>
          <TextContent01>
            {active
              ? `${shortFloat(balanceBEETStaked, 5)} $BEET = ${shortFloat(
                  balanceBEETStaked *
                    (process.env.REACT_APP_PRICE_BEET_USD as any),
                  3
                )} USD`
              : "Connect Wallet"}
          </TextContent01>
        </SectionEachStatsBEET>
      </SecionBEETBalance>
      <SectionTotalAssets>
        <TextStakeTitle text="Total Assets Overview" />
        <SectionChartData>
          <SectionPieChart>
            <Chart
              options={dataChartAssets.options}
              series={
                active
                  ? [
                      getAssetPercent(balanceBNB * 250),
                      getAssetPercent(
                        (balanceBEET + balanceBEETStaked) *
                          (process.env.REACT_APP_PRICE_BEET_USD as any)
                      ),
                      getAssetPercent(
                        balanceBEETNFT *
                          (process.env.REACT_APP_PRICE_BEETNFT_USD as any)
                      ),
                    ]
                  : [1, 1, 1]
              }
              type="pie"
              width={500}
            />
          </SectionPieChart>
          <SectionAssetsDetails>
            <TableRowAssetsHead>
              <TableRowNo></TableRowNo>
              <TableRowEachHead>Asset</TableRowEachHead>
              <TableRowEachHead>Allocation %</TableRowEachHead>
              <TableRowEachHead>Quantity</TableRowEachHead>
              <TableRowEachHead>USD Value</TableRowEachHead>
            </TableRowAssetsHead>
            <TableRowAssets borderBottom="1px solid #117754">
              <TableRowNo>1</TableRowNo>
              <TableRowEachContent>BNB</TableRowEachContent>
              <TableRowEachContent>
                {!active
                  ? "_"
                  : shortFloat(getAssetPercent(balanceBNB * 250), 1) + "%"}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active ? "_" : shortFloat(balanceBNB, 5)}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active ? "_" : "$ " + shortFloat(balanceBNB * 250, 3)}
              </TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets borderBottom="1px solid #117754">
              <TableRowNo>2</TableRowNo>
              <TableRowEachContent>BEET</TableRowEachContent>
              <TableRowEachContent>
                {!active
                  ? "_"
                  : shortFloat(
                      getAssetPercent(
                        (balanceBEET + balanceBEETStaked) *
                          (process.env.REACT_APP_PRICE_BEET_USD as any)
                      ),
                      1
                    ) + "%"}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active ? "_" : shortFloat(balanceBEET, 5)}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active
                  ? "_"
                  : "$ " +
                    shortFloat(
                      (balanceBEET + balanceBEETStaked) *
                        (process.env.REACT_APP_PRICE_BEET_USD as any),
                      3
                    )}
              </TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets borderRadius="0px 0px 16px 16px">
              <TableRowNo>3</TableRowNo>
              <TableRowEachContent>BEET NFTs</TableRowEachContent>
              <TableRowEachContent>
                {!active
                  ? "_"
                  : shortFloat(
                      getAssetPercent(
                        balanceBEETNFT *
                          (process.env.REACT_APP_PRICE_BEETNFT_USD as any)
                      ),
                      1
                    ) + "%"}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active ? "_" : balanceBEETNFT}
              </TableRowEachContent>
              <TableRowEachContent>
                {!active
                  ? "_"
                  : "$ " +
                    shortFloat(
                      balanceBEETNFT *
                        (process.env.REACT_APP_PRICE_BEETNFT_USD as any),
                      3
                    )}
              </TableRowEachContent>
            </TableRowAssets>
          </SectionAssetsDetails>
        </SectionChartData>
      </SectionTotalAssets>
      <SectionTotalAssets>
        <TextStakeTitle text="Actions" />
        <SecitonActionButtonGroup>
          <ButtonAction
            onClick={() => {
              window.open(
                "https://pancakeswap.finance/swap?outputCurrency=0x684eAfeb7E5be043842D892980695C68e15152b7"
              );
            }}
          >
            Buy/Sell
          </ButtonAction>
          <ButtonAction onClick={() => handleOpenMetamask()}>Send</ButtonAction>
          <ButtonAction>Receive</ButtonAction>
          <ButtonAction>Unstake</ButtonAction>
        </SecitonActionButtonGroup>
      </SectionTotalAssets>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionTop = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionUser = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconUser = styled(Box)`
  display: flex;
  width: 100px;
  aspect-ratio: 1;
`;

const SectionUserDetail = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const SectionAddressWallet = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TextAddressWallet = styled(Box)`
  display: flex;
  color: #a9d100;
  font-family: Rowdies;
  font-size: 2.4em;
  font-style: normal;
`;

const TextClaimableRewards = styled(Box)`
  display: flex;
  color: white;
  font-family: Rowdies;
  font-size: 2.4em;
  font-style: normal;
`;

const IconCopyAddress = styled(Box)`
  display: flex;
  color: #fff;
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:hover {
    filter: drop-shadow(0px 0px 2px white);
  }
`;

const TextSmallDate = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Lato;
  font-size: 1.5em;
  font-style: normal;
`;

const TextBigDate = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Rowdies;
  font-size: 1.5em;
  font-style: normal;
  margin-left: 5px;
`;

const SectionClaimable = styled(Box)`
  display: flex;
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 16px;
  border: 1px solid #117754;

  background: #003d28;
  flex-direction: column;
`;

const SectionClaim = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TextBEETtoUSD = styled(Box)`
  display: flex;
  color: #a9d100;
  font-family: Rowdies;
  font-size: 3em;
  font-style: normal;
  margin-right: 50px;
`;

const ButtonClaim = styled(Box)`
  display: flex;
  width: fit-content;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #117754;
  padding: 0px 20px;
  box-sizing: border-box;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2em;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 500px) {
    height: 40px;
  }
`;

const SecionBEETBalance = styled(Box)`
  display: grid;
  width: 100%;
  margin-top: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
`;

const SectionEachStatsBEET = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #117754;

  background: #003624;
  padding: 30px;
  box-sizing: border-box;

  transition: 0.2s;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5));
  }
`;

const TextHead01 = styled(Box)`
  display: flex;
  color: #7cc2aa;

  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;

const TextContent01 = styled(Box)`
  display: flex;
  margin-top: 5px;
  color: #fff;

  font-family: Rowdies;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;

  margin-top: 10px;
`;

const SectionTotalAssets = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
`;

const SectionChartData = styled(Box)`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`;

const SectionPieChart = styled(Box)`
  display: flex;
`;

const SectionAssetsDetails = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-left: 100px;
  flex-direction: column;
  border: 1px solid #117754;
  border-radius: 16px;
`;

const TableRowAssetsHead = styled(Box)`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  background: #a9d100;
  border-bottom: 1px solid white;
  /* box-shadow: 0px -1px 0px 0px #edf2f7 inset; */
`;

const TableRowAssets = styled(Box)`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  background: #003624;
  /* border-bottom: 1px solid #117754; */
  /* box-shadow: 0px -1px 0px 0px #117754 inset; */
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #117754;
  }
`;

const TableRowNo = styled(Box)`
  display: flex;
  flex: 0.1;
  color: #7cc2aa;
  padding-left: 20px;
  font-family: Lato;
  font-size: 2em;
  font-weight: 500;
  font-style: normal;
`;

const TableRowEachHead = styled(Box)`
  display: flex;
  flex: 1;
  color: #003d28;

  font-family: Rowdies;
  font-size: 2em;
  font-weight: 400;
`;

const TableRowEachContent = styled(Box)`
  display: flex;
  flex: 1;
  color: #7cc2aa;

  font-family: Lato;
  font-size: 2em;
  font-weight: 500;
  font-style: normal;
`;

// const TableRowEachContentUnderLine = styled(Box)`
//   display: flex;
//   flex: 1;
//   color: #7cc2aa;

//   font-family: Lato;
//   font-size: 2em;
//   font-weight: 500;
// `;

const SecitonActionButtonGroup = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const ButtonAction = styled(Box)`
  display: flex;
  width: 300px;
  height: 100px;
  justify-content: center;
  align-items: center;

  background-image: url(${imgButtonGreen01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  color: white;
  text-align: center;
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 6px 6px rgba(255, 255, 255, 0.3));
  }

  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 500px) {
    height: 40px;
  }
`;

const TextP2EAvailable = styled(Box)`
  font-family: Rowdies;
  font-size: 2em;
  font-style: normal;
  margin-left: 5px;
  color: #e73c28;
  font-weight: 400;
  text-shadow: 0px 0px 2px black;
`;

export default Overview;
