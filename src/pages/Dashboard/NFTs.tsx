import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import CardNFT from "../../components/Card/CardNFT";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";

const NFTs = () => {
  const [countNFT, setCountNFT] = useState(8);
  const [flagShowAll, setFlagShowAll] = useState(false);
  const handleShowAll = () => {
    if (flagShowAll) {
      setCountNFT(8);
    } else {
      setCountNFT(40);
    }
    setFlagShowAll(!flagShowAll);
  };

  return (
    <StyledComponent>
      <SectionInitialNFT>
        {new Array(countNFT).fill(0).map((each, index) => {
          return <CardNFT key={index} data={index} />;
        })}
      </SectionInitialNFT>
      <SectionButtonGroup>
        {!flagShowAll ? (
          <ButtonPlay onClick={() => handleShowAll()}>Show All</ButtonPlay>
        ) : (
          <ButtonPlay onClick={() => handleShowAll()}>Show Less</ButtonPlay>
        )}
      </SectionButtonGroup>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 80px 60px 150px 60px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  @media (max-width: 1600px) {
    padding: 80px 60px 150px 60px;
  }
  @media (max-width: 1440px) {
    padding: 60px 30px 100px 30px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px 70px 20px;
  }
  @media (max-width: 390px) {
    padding: 30px 10px 50px 10px;
  }
`;

const SectionInitialNFT = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-bottom: 120px;

  transition: all 0.3s;
  @media (max-width: 1600px) {
    grid-column-gap: 50px;
    margin-bottom: 100px;
  }
  @media (max-width: 1440px) {
    grid-column-gap: 45px;
    margin-bottom: 80px;
  }
  @media (max-width: 1439px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-bottom: 70px;
  }
  @media (max-width: 768px) {
    padding: 20px 20px 50px 20px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
  }
  @media (max-width: 700px) {
    padding: 1px 10px 40px 10px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;
  }
  @media (max-width: 390px) {
    padding: 0px 10px 30px 10px;
  }
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  @media (max-width: 500px) {
    /* flex-direction: column; */
  }
`;

const ButtonPlay = styled(Box)`
  display: flex;
  width: 350px;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #511900;
  text-align: center;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 65px;

  background-image: url(${imgButtonPlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: white;
    text-shadow: 0px 0px 12px white;
  }

  margin-right: 20px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 300px;
    height: 85px;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
  }

  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
  }
  /* @media (max-width: 390px) {
    width: 135px;
    height: 40px;
  } */
`;

export default NFTs;
