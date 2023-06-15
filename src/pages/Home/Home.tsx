import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/background/BGHome.png";
import imgButtonSmall from "../../assets/images/buttons/HomeSmall.png";
import imgButtonWide from "../../assets/images/buttons/HomeWide.png";
import imgLogoBee from "../../assets/images/Bee.png";
import { FaInfo, FaShareAlt, FaTrophy } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const toastId: any = useRef(null);
  const naviate = useNavigate();

  const handleAlert = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.info("🐝 Coming soon.");
    }
  };

  return (
    <StyledComponent>
      <ButtonAbout
        onClick={() => {
          handleAlert();
        }}
      >
        <FaInfo />
      </ButtonAbout>
      <ButtonLeaderboard
        onClick={() => {
          handleAlert();
        }}
      >
        <FaTrophy />
      </ButtonLeaderboard>
      <ButtonShare
        onClick={() => {
          handleAlert();
        }}
      >
        <FaShareAlt />
      </ButtonShare>
      <ButtonRate
        onClick={() => {
          handleAlert();
        }}
      >
        <AiFillLike />
      </ButtonRate>
      <TextTitle>FLAPPY BEE</TextTitle>
      <SectionContent>
        <SectionImageLogo>
          <img src={imgLogoBee} width={"100%"} height={"100%"} alt="" />
        </SectionImageLogo>
        <SectionButtonGroup>
          <ButtonWide
            onClick={() => {
              naviate("/game");
            }}
          >
            Play
          </ButtonWide>
          <ButtonWide
            onClick={() => {
              handleAlert();
            }}
          >
            Rewards
          </ButtonWide>
          <ButtonWide
            onClick={() => {
              handleAlert();
            }}
          >
            Settings
          </ButtonWide>
        </SectionButtonGroup>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  height: 100vh;
  background-image: url(${imgBackHome});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

const ButtonAbout = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 65px;
  left: 65px;
  color: #511900;
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ButtonLeaderboard = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 65px;
  right: 65px;
  color: #511900;
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ButtonShare = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: 65px;
  left: 65px;
  color: #511900;
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ButtonRate = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: 65px;
  right: 65px;
  color: #511900;
  font-size: 3.5rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const TextTitle = styled(Box)`
  position: fixed;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cherry Bomb One";
  font-style: normal;
  font-weight: 400;
  font-size: 5em;
  line-height: 100px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: #511900;
`;

const SectionContent = styled(Box)`
  display: flex;
  position: absolute;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionImageLogo = styled(Box)`
  display: flex;
  width: 400px;
`;

const SectionButtonGroup = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  margin-left: 300px;
  justify-content: space-between;
`;

const ButtonWide = styled(Box)`
  display: flex;
  width: 400px;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonWide});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  line-height: 90px;
  /* identical to box height, or 129% */

  text-align: center;

  color: #511900;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default Home;
