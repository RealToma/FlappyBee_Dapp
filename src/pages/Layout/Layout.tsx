import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/background/BGHome.png";
import imgBackFooter from "../../assets/images/background/floor.png";
import { dataTopNavigation } from "../../data/Link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Slide } from "@mui/material";
import { MdClose } from "react-icons/md";
import imgMetamask from "../../assets/images/wallet/metamask.png";
import imgWalletConnect from "../../assets/images/wallet/walletConnect.svg";
import imgBinance from "../../assets/images/wallet/binance.png";
import imgTrust from "../../assets/images/wallet/trust.png";
import { useWeb3React } from "@web3-react/core";
import {
  DESKTOP_CONNECTORS,
  chainId,
  NETWORK_NAME,
} from "../../utils/connectors";
import { shortAddress } from "../../libs/Functions";

const Layout = ({ children }: any) => {
  const navigate = useNavigate();
  const [flagLink, setFlagLink] = useState(1);
  const [flagClickedMenu, setFlagClickedMenu] = useState(false);

  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const { account, active, activate, deactivate } = useWeb3React();

  const walletConnectors: any = DESKTOP_CONNECTORS;
  const handleSwitch = async () => {
    try {
      if (window.ethereum.networkVersion !== chainId) {
        await window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
          })
          .then(() => {
            //   setConnected(true);
          });
        console.log("You have successfully switched to Correct Network");
      }
    } catch (ex) {
      //   setConnected(false);
      // NotificationManager.error(
      //   "Failed to switch to " + NETWORK_NAME + " network.",
      //   "ERROR",
      //   3000
      // );
    }
  };

  const handleConnect = async (currentConnector: any) => {
    await activate(walletConnectors[currentConnector]);
    // set_wConnect(walletConnectors[currentConnector]);
    window.localStorage.setItem("CurrentWalletConnect", currentConnector);
    handleSwitch();
    // setConnected(true);
    handleClose();
  };

  useEffect(() => {
    const currentWalletState = window.localStorage.getItem(
      "CurrentWalletConnect"
    );
    currentWalletState && activate(walletConnectors[currentWalletState]);
  }, []);
  return (
    <StyledComponent>
      <SectionHeader>
        <SectionPageLink>
          {dataTopNavigation?.map((each: any, index: any) => {
            const _key = index;
            if (each.flagNavigate) {
              return (
                <a
                  href={each.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={_key}
                  style={{ textDecoration: "none" }}
                >
                  <LinkEach
                    active={flagLink === index ? 1 : 0}
                    onClick={() => {
                      // setFlagLink(index);
                      // navigate(each.link);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    {each.name}
                  </LinkEach>
                </a>
              );
            } else {
              return (
                <LinkEach
                  key={_key}
                  active={flagLink === index ? 1 : 0}
                  onClick={() => {
                    setFlagLink(index);
                    navigate(each.link);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {each.name}
                </LinkEach>
              );
            }
          })}
        </SectionPageLink>
        <SectionMobileButton
          onClick={() => {
            setFlagClickedMenu(true);
          }}
        >
          <HiMenu />
        </SectionMobileButton>
        <SectionWalletConnect
          onClick={() => {
            setOpen(true);
          }}
        >
          {active ? shortAddress(account) : "Connect Wallet"}
        </SectionWalletConnect>
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
              const _key = index;
              if (each.flagNavigate) {
                return (
                  <a
                    href={each.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={_key}
                    style={{ textDecoration: "none" }}
                  >
                    <LinkMobileEach
                      onClick={() => {
                        setFlagClickedMenu(false);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {each.name}
                    </LinkMobileEach>
                  </a>
                );
              } else {
                return (
                  <LinkMobileEach
                    key={_key}
                    active={flagLink === index ? 1 : 0}
                    onClick={() => {
                      setFlagLink(index);
                      navigate(each.link);
                      setFlagClickedMenu(false);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    {each.name}
                  </LinkMobileEach>
                );
              }
            })}
          </SectionMobilePageLink>
        </SectionMobileMenu>
      </Slide>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={backdropstyled}
      >
        <ModalBox>
          <UpText>Select Wallet</UpText>
          <DownText>
            Connect to the site below with one of our available wallet
            providers.
          </DownText>
          <ConnectPart>
            <ConnectWallet
              onClick={() => {
                handleConnect("MetaMask");
              }}
            >
              <Box display={"flex"} marginLeft={"5%"}>
                Metamask
              </Box>
              <Box display={"flex"} marginRight={"5%"}>
                <img src={imgMetamask} width={"24px"} height={"24px"} alt="" />
              </Box>
            </ConnectWallet>
            <ConnectWallet
              onClick={() => {
                handleConnect("BinanceWallet");
              }}
            >
              <Box display={"flex"} marginLeft={"5%"}>
                BinanceWallet
              </Box>
              <Box display={"flex"} marginRight={"5%"}>
                <img src={imgBinance} width={"24px"} height={"24px"} alt="" />
              </Box>
            </ConnectWallet>
            <ConnectWallet
              onClick={() => {
                handleConnect("WalletConnect");
              }}
            >
              <Box display={"flex"} marginLeft={"5%"}>
                WalletConnect
              </Box>
              <Box display={"flex"} marginRight={"5%"}>
                <img
                  src={imgWalletConnect}
                  width={"24px"}
                  height={"24px"}
                  alt=""
                />
              </Box>
            </ConnectWallet>
            <ConnectWallet
              onClick={() => {
                handleConnect("TrustWallet");
              }}
            >
              <Box display={"flex"} marginLeft={"5%"}>
                TrustWallet
              </Box>
              <Box display={"flex"} marginRight={"5%"}>
                <img src={imgTrust} width={"24px"} height={"24px"} alt="" />
              </Box>
            </ConnectWallet>
          </ConnectPart>
        </ModalBox>
      </Modal>
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
  z-index: 100000;
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
  min-height: 120px;
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
    min-height: 100px;
  }
  @media (max-width: 390px) {
    height: 90px;
    min-height: 90px;
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

const ConnectWallet = styled(Box)`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
  font-size: 1.3em;
  line-height: 1.25;
  font-weight: 400;
  /* text-shadow: 1px 1px 6px #000; */
  justify-content: space-between;
  align-items: center;
  background: white;
  font-size: 18px;
  color: #412518;
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: #a9d100;
  }
`;

const ConnectPart = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  margin-top: 20px;
`;

const UpText = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 1px 1px 6px #000;
  color: white;
`;
const DownText = styled(Box)`
  display: flex;
  flex: 1;
  align-items: flex-start;
  font-family: Lato;
  font-size: 14px;
  text-shadow: 1px 1px 6px #000;
  color: white;
  margin-top: 10px;
`;

const ModalBox = styled(Box)`
  display: flex;
  width: 350px;
  flex-direction: column;
  background-color: white;
  border: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 0 #000;
  border-radius: 20px;
  background: #003d28;
  padding: 30px;
  box-sizing: border-box;
  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 370px) {
    width: 300px;
  }
`;
export const backdropstyled = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.8;
`;

export default Layout;
