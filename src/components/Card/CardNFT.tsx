import { Box } from "@mui/material";
import styled from "styled-components";

const CardNFT = ({ data }: any) => {
  return (
    <StyledComponent data-aos="flip-left" data-aos-duration="1000">
      <SectionImage>
        <img src={`/assets/images/nfts/${data + 1}.jpeg`} alt="" />
      </SectionImage>
      <SectionBorderImage>MORE INFO</SectionBorderImage>
      <SectionCommonDetails>
        <TextCommon>Common</TextCommon>
        <TextNFTName>FlappyBee #{data + 1}</TextNFTName>
      </SectionCommonDetails>
      <SectionOtherDetails>
        <TextComingSoon>Coming Soon</TextComingSoon>
        <TextPrice>Price</TextPrice>
      </SectionOtherDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  background: #fff;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s !important;
  &:hover {
    box-shadow: 0px 0px 20px white;
    > :nth-child(1) > img {
      transition: 0.3s;
      transform: scale(1.2);
    }
  }

  @media (max-width: 1440px) {
    padding: 8px 8px 18px 8px;
  }
  @media (max-width: 1024px) {
    padding: 7px 7px 17px 7px;
  }
  @media (max-width: 768px) {
    padding: 6px 6px 16px 6px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  > img {
    width: 100%;
    aspect-ratio: 1;
    transition: 0.3s;
    border-radius: 20px 20px 0px 0px;
  }
`;

const SectionBorderImage = styled(Box)`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 0px 0px 40px 40px;
  background: #a9d100;
  justify-content: center;
  align-items: center;

  color: #003d28;
  font-family: Lato;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  /* line-height: 30px; */
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #003d28;
    color: #a9d100;
  }

  @media (max-width: 1440px) {
    height: 31px;
  }
  @media (max-width: 1024px) {
    height: 25px;
  }
  @media (max-width: 768px) {
    height: 20px;
  }
`;

const SectionCommonDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 61, 40, 0.1);

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 25px 0px;
  }
  @media (max-width: 1024px) {
    padding: 20px 0px;
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

const TextCommon = styled(Box)`
  color: #003d28;
  font-family: Lato;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  transition: 0.3s;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const TextNFTName = styled(Box)`
  color: #003d28;
  font-family: Rowdies;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const SectionOtherDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 22px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const TextComingSoon = styled(Box)`
  color: #003d28;
  font-family: Lato;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 30px;
  }
  @media (max-width: 1024px) {
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const TextPrice = styled(Box)`
  color: rgba(0, 61, 40, 0.5);
  font-family: Lato;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
`;

export default CardNFT;
