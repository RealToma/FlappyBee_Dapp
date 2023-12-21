import { Box } from "@mui/material";
import styled from "styled-components";
import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { shortAddress } from "../../libs/Functions";
import copy from "copy-to-clipboard";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { RefContext } from "../../libs/RefContext";
import Chart from "react-apexcharts";

const dataChartAssets: any = {
  series: [44, 55, 13, 43, 22],
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
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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

  const { balanceBNB, balanceBEET, balanceBEETStaked }: any =
    useContext(RefContext);

  return (
    <StyledComponent>
      <SectionTop>
        <SectionUser>
          <IconUser>
            <FaUser />
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
              <TextBigDate>12/1/2023, 12:03:33 PM</TextBigDate>
            </SectionAddressWallet>
            <SectionAddressWallet>
              <TextSmallDate>Last Login :</TextSmallDate>
              <TextBigDate>12/1/2023, 12:03:33 PM</TextBigDate>
            </SectionAddressWallet>
          </SectionUserDetail>
        </SectionUser>
        <SectionClaimable>
          <TextAddressWallet>Total Claimabe Rewards :</TextAddressWallet>
          <SectionClaim>
            <TextBEETtoUSD>
              {balanceBEET} $BEET = {balanceBEET * 0.001} USD
            </TextBEETtoUSD>
            <ButtonClaim>Claim Now</ButtonClaim>
          </SectionClaim>
        </SectionClaimable>
      </SectionTop>
      <SecionBEETBalance>
        <SectionEachStatsBEET>
          <TextHead01>BEET Wallet</TextHead01>
          <TextContent01>$597.68</TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Available</TextHead01>
          <TextContent01>$30</TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Staked</TextHead01>
          <TextContent01>$567.68</TextContent01>
        </SectionEachStatsBEET>
      </SecionBEETBalance>
      <SectionTotalAssets>
        <TextHead01>Total Assets Overview</TextHead01>
        <SectionChartData>
          <SectionPieChart>
            <Chart
              options={dataChartAssets.options}
              series={dataChartAssets.series}
              type="pie"
              width={500}
            />
          </SectionPieChart>
          <SectionAssetsDetails>
            <TableRowAssets>
              <TableRowEachHead>Asset</TableRowEachHead>
              <TableRowEachHead>Allocation %</TableRowEachHead>
              <TableRowEachHead>Quantity</TableRowEachHead>
              <TableRowEachHead>USD Value</TableRowEachHead>
            </TableRowAssets>
            <TableRowAssets>
              <TableRowEachContentUnderLine>BNB</TableRowEachContentUnderLine>
              <TableRowEachContent>70%</TableRowEachContent>
              <TableRowEachContent>1.35</TableRowEachContent>
              <TableRowEachContent>$325.56</TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets>
              <TableRowEachContentUnderLine>BEET</TableRowEachContentUnderLine>
              <TableRowEachContent>20%</TableRowEachContent>
              <TableRowEachContent>4500</TableRowEachContent>
              <TableRowEachContent>$450</TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets>
              <TableRowEachContentUnderLine>
                BEET NFTs
              </TableRowEachContentUnderLine>
              <TableRowEachContent>10%</TableRowEachContent>
              <TableRowEachContent>6</TableRowEachContent>
              <TableRowEachContent>$60</TableRowEachContent>
            </TableRowAssets>
          </SectionAssetsDetails>
        </SectionChartData>
      </SectionTotalAssets>
      <SectionTotalAssets>
        <TextHead01>Actions</TextHead01>
        <SecitonActionButtonGroup>
          <ButtonAction>Buy/Sell</ButtonAction>
          <ButtonAction>Send</ButtonAction>
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
  color: white;
  font-size: 40px;
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
  color: rgb(0, 255, 25);
  font-family: Rowdies;
  font-size: 2em;
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
  font-size: 1.7em;
  font-style: normal;
  margin-left: 5px;
`;

const SectionClaimable = styled(Box)`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 6px;
  border: 2px solid white;
  flex-direction: column;
`;

const SectionClaim = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TextBEETtoUSD = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Rowdies;
  font-size: 3em;
  font-style: normal;
  margin-right: 50px;
`;

const ButtonClaim = styled(Box)`
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #117754;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2.5em;
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
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

const SectionEachStatsBEET = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TextHead01 = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Rowdies;
  font-size: 3em;
  font-style: normal;
`;

const TextContent01 = styled(Box)`
  display: flex;
  color: rgb(255, 199, 0);
  font-family: Rowdies;
  font-size: 2.2em;
  font-style: normal;

  margin-top: 10px;
`;

const SectionTotalAssets = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const SectionChartData = styled(Box)`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const SectionPieChart = styled(Box)`
  display: flex;
`;

const SectionAssetsDetails = styled(Box)`
  display: flex;
  width: 800px;
  flex-direction: column;
`;

const TableRowAssets = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const TableRowEachHead = styled(Box)`
  display: flex;
  flex: 1;
  color: rgb(0, 255, 25);
  font-family: Rowdies;
  font-size: 2em;
  font-style: normal;
`;

const TableRowEachContent = styled(Box)`
  display: flex;
  flex: 1;
  color: white;
  font-family: Rowdies;
  font-size: 1.6em;
  font-style: normal;
`;

const TableRowEachContentUnderLine = styled(Box)`
  display: flex;
  flex: 1;
  color: white;
  font-family: Rowdies;
  font-size: 1.6em;
  font-style: normal;
  text-decoration: underline;
`;

const SecitonActionButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const ButtonAction = styled(Box)`
  display: flex;
  width: fit-content;
  padding: 0px 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #117754;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2.5em;
  font-style: normal;
  font-weight: 400;
  margin-right: 100px;
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

export default Overview;
