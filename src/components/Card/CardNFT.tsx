import { Box } from "@mui/material";
import styled from "styled-components";

const CardNFT = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionImage>
        <img src={`/assets/images/nfts/${data + 1}.jpg`} alt="" />
      </SectionImage>
      <SectionBorderImage>MORE INFO</SectionBorderImage>
      <SectionTextDetails></SectionTextDetails>
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

  &:hover {
    box-shadow: 0px 0px 12px white;
  }
  transition: 0.3s;
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
  > img {
    width: 100%;
    aspect-ratio: 1;
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

  transition: 0.3s;
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

const SectionTextDetails = styled(Box)`
  display: flex;
`;

export default CardNFT;
