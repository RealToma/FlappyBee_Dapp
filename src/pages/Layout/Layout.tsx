import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/background/BGHome.png";
import imgBackFooter from "../../assets/images/background/floor.png";
import { dataTopNavigation } from "../../data/Link.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Slide } from "@mui/material";
import { MdClose } from "react-icons/md";

const Layout = ({ children }: any) => {
  const navigate = useNavigate();
  const [flagLink, setFlagLink] = useState(1);
  const [flagClickedMenu, setFlagClickedMenu] = useState(false);

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
        <SectionMobileButton
          onClick={() => {
            setFlagClickedMenu(true);
          }}
        >
          <HiMenu />
        </SectionMobileButton>
        <SectionWalletConnect>Connect Wallet</SectionWalletConnect>
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
      {flagLink === 0 || flagLink === 1 ? (
        <SectionFooter></SectionFooter>
      ) : (
        <></>
      )}

      <Slide in={flagClickedMenu} direction={"right"}>
        <SectionMobileMenu>
          <ButtonClose
            onClick={() => {
              setFlagClickedMenu(false);
            }}
          >
            <MdClose />
          </ButtonClose>
          <SectionMobilePageLink>
            {dataTopNavigation?.map((each: any, index: any) => {
              return (
                <LinkMobileEach
                  key={index}
                  active={flagLink === index ? 1 : 0}
                  onClick={() => {
                    setFlagLink(index);
                    navigate(each.link);
                  }}
                >
                  {each.name}
                </LinkMobileEach>
              );
            })}
          </SectionMobilePageLink>
        </SectionMobileMenu>
      </Slide>
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

const SectionMobileMenu = styled(Box)`
  display: flex;
  position: fixed;
  width: 300px;
  flex-direction: column;
  height: 100vh;
  box-shadow: 0px 0px 10px black;
  background-color: #a9d100;
  padding: 35px 0px;
  box-sizing: border-box;
`;

const ButtonClose = styled(Box)`
  display: flex;
  margin-left: 30px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  color: #003d28;
  font-size: 7em;
  &:active {
    color: white;
  }
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
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 0px 30px;
  }
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (max-width: 768px) {
    height: 100px;
  }
  @media (max-width: 390px) {
    height: 90px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: fit-content;
`;

const SectionFooter = styled(Box)`
  display: flex;
  width: 100%;
  height: 125px;
  background-image: url(${imgBackFooter});
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center;

  transition: 0.3s;
  @media (max-width: 1440px) {
    height: 100px;
  }
  @media (max-width: 1024px) {
    height: 80px;
  }
  @media (max-width: 768px) {
    height: 70px;
  }
  @media (max-width: 390px) {
    height: 60px;
  }
`;

const SectionPageLink = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.3s;
  @media (max-width: 1023px) {
    display: none;
  }
`;

const SectionMobilePageLink = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

  @media (max-width: 1440px) {
    width: 240px;
    height: 60px;
  }
  @media (max-width: 1024px) {
    width: 240px;
    height: 55px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 160px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 120px;
    height: 30px;
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

  @media (max-width: 1600px) {
    margin-right: 30px;
  }
  @media (max-width: 1440px) {
    height: 45px;
    margin-right: 20px;
  }
  @media (max-width: 1024px) {
    height: 40px;
  }
`;

const LinkMobileEach = styled(Box)`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0px 35px;
  box-sizing: border-box;
  align-items: center;
  background-color: ${({ active }: any) => (active ? "#003D28" : "unset")};
  color: ${({ active }: any) => (active ? "white" : "#003D28")};
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  line-height: 3.4em;
  margin-bottom: 16px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: white;
  }
`;

const SectionMobileButton = styled(Box)`
  display: none;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  color: #003d28;
  font-size: 7em;
  &:active {
    color: white;
  }

  @media (max-width: 1023px) {
    display: flex;
  }
`;

export default Layout;
