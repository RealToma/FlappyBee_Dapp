import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/BGHome.png";

const Home = () => {
  return <StyledComponent>123</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackHome});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

export default Home;
