import { Box } from "@mui/material";
import styled from "styled-components";
import { useContext, useState } from "react";
// import { FaUser } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { shortAddress } from "../../libs/Functions";
import copy from "copy-to-clipboard";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { RefContext } from "../../libs/RefContext";
import Chart from "react-apexcharts";
import imgUser01 from "../../assets/images/icons/user01.png";
import imgButtonGreen01 from "../../assets/images/buttons/GreenButton01.svg";

const dataChartAssets: any = {
  series: [70, 20, 10],
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
    labels: [" BNB", " $ BEET", " BEET NFTs"],
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
              <TextBigDate>12/1/2023, 12:03:33 PM</TextBigDate>
            </SectionAddressWallet>
            <SectionAddressWallet>
              <TextSmallDate>Last Login :</TextSmallDate>
              <TextBigDate>12/1/2023, 12:03:33 PM</TextBigDate>
            </SectionAddressWallet>
          </SectionUserDetail>
        </SectionUser>
        <SectionClaimable>
          <TextClaimableRewards>Total Claimabe Rewards :</TextClaimableRewards>
          <SectionClaim>
            <TextBEETtoUSD>
              {balanceBEET} $BEET ={" "}
              {balanceBEET * (process.env.REACT_APP_PRICE_BEET_USD as any)} USD
            </TextBEETtoUSD>
            <ButtonClaim>Claim Now</ButtonClaim>
          </SectionClaim>
        </SectionClaimable>
      </SectionTop>
      <SecionBEETBalance>
        <SectionEachStatsBEET>
          <TextHead01>BEET Wallet</TextHead01>
          <TextContent01>
            ${" "}
            {(balanceBEET + balanceBEETStaked) *
              (process.env.REACT_APP_PRICE_BEET_USD as any)}
          </TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Available</TextHead01>
          <TextContent01>
            $ {balanceBEET * (process.env.REACT_APP_PRICE_BEET_USD as any)}
          </TextContent01>
        </SectionEachStatsBEET>
        <SectionEachStatsBEET>
          <TextHead01>Staked</TextHead01>
          <TextContent01>
            ${" "}
            {balanceBEETStaked * (process.env.REACT_APP_PRICE_BEET_USD as any)}
          </TextContent01>
        </SectionEachStatsBEET>
      </SecionBEETBalance>
      <SectionTotalAssets>
        <TextTitle>Total Assets Overview</TextTitle>
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
              <TableRowEachContent>70%</TableRowEachContent>
              <TableRowEachContent>{balanceBNB}</TableRowEachContent>
              <TableRowEachContent>$ {balanceBNB * 250}</TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets borderBottom="1px solid #117754">
              <TableRowNo>2</TableRowNo>
              <TableRowEachContent>BEET</TableRowEachContent>
              <TableRowEachContent>20%</TableRowEachContent>
              <TableRowEachContent>{balanceBEET}</TableRowEachContent>
              <TableRowEachContent>
                ${" "}
                {(balanceBEET + balanceBEETStaked) *
                  (process.env.REACT_APP_PRICE_BEET_USD as any)}
              </TableRowEachContent>
            </TableRowAssets>
            <TableRowAssets borderRadius="0px 0px 16px 16px">
              <TableRowNo>3</TableRowNo>
              <TableRowEachContent>BEET NFTs</TableRowEachContent>
              <TableRowEachContent>10%</TableRowEachContent>
              <TableRowEachContent>6</TableRowEachContent>
              <TableRowEachContent>$60</TableRowEachContent>
            </TableRowAssets>
          </SectionAssetsDetails>
        </SectionChartData>
      </SectionTotalAssets>
      <SectionTotalAssets>
        <TextTitle>Actions</TextTitle>
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

const TextTitle = styled(Box)`
  display: flex;
  color: white;
  font-family: Rowdies;
  font-size: 3em;
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

  font-family: Lato;
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
  flex: 0.2;
  color: #7cc2aa;
  padding: 0px 15px;
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

export default Overview;
