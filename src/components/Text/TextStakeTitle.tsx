import { Box } from "@mui/material";
import styled from "styled-components";

export const TextStakeTitle = ({ text }: any) => {
  return <StyledComponent>{text}</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  color: white;
  font-family: Rowdies;
  font-size: 30px;
  font-style: normal;

  @media (max-width: 1440px) {
    font-size: 28px;
  }
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 23px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;
