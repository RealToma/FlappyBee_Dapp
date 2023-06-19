import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/background/BGHome.png";
import imgBackFooter from "../../assets/images/background/floor.png";
import { dataTopNavigation } from "../../data/Link.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }: any) => {
  const navigate = useNavigate();
  const [flagLink, setFlagLink] = useState(0);
  return (
    <StyledComponent>
      <SectionHeader>
        <SectionPageLink>
          {dataTopNavigation?.map((each: any, index: any) => {
            return (
              <LinkEach
                key={index}
                active={flagLink === index ? 1 : 0}
                onClick={() => {
                  setFlagLink(index);
                  navigate(each.link);
                }}
              >
                {each.name}
              </LinkEach>
            );
          })}
        </SectionPageLink>
        <SectionWalletConnect>Connect Wallet</SectionWalletConnect>
      </SectionHeader>
      {children}
      <SectionFooter></SectionFooter>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  height: 100vh;
  flex-direction: column;
  background-image: url(${imgBackHome});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

const SectionHeader = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #a9d100;
  height: 120px;
  padding: 0px 60px;
  box-sizing: border-box;
`;

const SectionFooter = styled(Box)`
  display: flex;
  width: 100%;
  height: 125px;
  background-image: url(${imgBackFooter});
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center;
`;

const SectionPageLink = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionWalletConnect = styled(Box)`
  display: flex;
  width: 280px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #003d28;
  border-radius: 12px;

  font-family: "Rowdies";
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  line-height: 38px;
  text-align: center;
  color: white;

  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #daf07e;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const LinkEach = styled(Box)`
  display: flex;
  width: fit-content;
  padding: 0px 10px;
  box-sizing: border-box;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }: any) => (active ? "#003D28" : "unset")};
  color: ${({ active }: any) => (active ? "white" : "#003D28")};
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  line-height: 40px;
  margin-right: 40px;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: white;
  }
`;

export default Layout;
