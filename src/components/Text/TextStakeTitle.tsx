import { Box } from "@mui/material";
import styled from "styled-components";

export const TextStakeTitle = ({ text }: any) => {
  return <StyledComponent>{text}</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  color: white;
  font-family: Rowdies;
  font-size: 3em;
  font-style: normal;
`;
