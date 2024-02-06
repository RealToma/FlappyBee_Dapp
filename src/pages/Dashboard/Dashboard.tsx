import { Box } from "@mui/material";
import styled from "styled-components";
import { dataTabDashboard } from "../../data/Tab";
import { useState } from "react";
import Overview from "./Overview";
import NFTs from "./NFTs";
import TxHistory from "./TxHistory";

const Dashboard = () => {
  const [flagClickedTab, setFlagClickedTab] = useState(0);

  return (
    <StyledComponent>
      <SectionTabContent clicked={flagClickedTab === 0 ? true : false}>
        <SectionTab>
          {dataTabDashboard.map((each, index) => {
            if (flagClickedTab === index) {
              return (
                <ButtonClickedTab
                  key={index}
                  onClick={() => {
                    setFlagClickedTab(index);
                  }}
                >
                  {each}
                </ButtonClickedTab>
              );
            } else {
              return (
                <ButtonUnClickedTab
                  key={index}
                  onClick={() => {
                    setFlagClickedTab(index);
                  }}
                >
                  {each}
                </ButtonUnClickedTab>
              );
            }
          })}
        </SectionTab>
        {flagClickedTab === 0 ? (
          <Overview />
        ) : flagClickedTab === 1 ? (
          <NFTs />
        ) : (
          <TxHistory />
        )}
      </SectionTabContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #003d28;
  padding: 80px 60px 150px 60px;
  box-sizing: border-box;
  @media (max-width: 1600px) {
    padding: 80px 60px 150px 60px;
  }
  @media (max-width: 1440px) {
    padding: 60px 30px 100px 30px;
  }
  @media (max-width: 768px) {
    padding: 60px 20px 80px 20px;
  }
  @media (max-width: 430px) {
    padding: 60px 10px 50px 10px;
  }
`;

const SectionTabContent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border: 2px solid #a9d100;
  background-color: #00583a;
  border-radius: ${({ clicked }: any) =>
    clicked ? "0px 8px 8px 8px" : "8px 8px 8px 8px"};

  padding: 60px 30px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 40px 20px;
  }
  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const SectionTab = styled(Box)`
  display: flex;
  position: absolute;
  top: -50px;
  left: -2px;

  @media (max-width: 768px) {
    top: -45px;
  }
  @media (max-width: 430px) {
    top: -40px;
  }
`;

const ButtonClickedTab = styled(Box)`
  display: flex;
  width: fit-content;
  height: 50px;
  padding: 0px 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  /* color: white; */
  color: #003d28;
  background: #a9d100;
  /* background-color: #00583a; */
  border-top: 2px solid #a9d100;
  border-left: 2px solid #a9d100;
  border-right: 2px solid #a9d100;
  border-bottom: 2px solid #a9d100;
  border-radius: 8px 8px 0px 0px;

  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    height: 45px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    height: 40px;
  }
`;

const ButtonUnClickedTab = styled(Box)`
  display: flex;
  width: fit-content;
  height: 50px;
  padding: 0px 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: white;
  /* background-color: #00583a;
  border-top: 2px solid #117754;
  border-left: 2px solid #117754;
  border-right: 2px solid #117754;
  border-bottom: 2px solid #00583a;
  border-radius: 6px 6px 0px 0px; */
  border: 2px solid rgba(0, 0, 0, 0);

  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-shadow: 0px 0px 5px white;
  }

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    height: 45px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    height: 40px;
  }
`;

export default Dashboard;
