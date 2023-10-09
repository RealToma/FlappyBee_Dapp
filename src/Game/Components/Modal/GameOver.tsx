import { Box } from "@mui/material";
import { FaMedal, FaShareAlt } from "react-icons/fa";
import styled from "styled-components";
import { useGameSystem, useScore } from "../../Context";
import imgGameOver from "../../../assets/images/background/game over.png";
// import imgCoin from "../../../assets/images/icons/coinReward.png";
import imgBee from "../../../assets/images/bee/flaying/Bee-01.png";
import imgButtonStart from "../../../assets/images/buttons/HomeWide.png";
import imgButtonSmall from "../../../assets/images/buttons/HomeSmall.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  actionGetFreeMintCount,
  actionSetFreeMintCount,
} from "../../../actions/freeMint";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";

const GameOver = () => {
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const { score, bestScore } = useScore();
  const { restartGame } = useGameSystem();
  const [countFreeMint, setCountFreeMint] = useState();

  const handleReplay = () => {
    if (account === undefined || account === null) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    }
    actionGetFreeMintCount(account).then((res) => {
      if (res.flagSuccess) {
        if (res.count >= 3) {
          navigate("/play");
          return NotificationManager.warning(
            "You can't play anymore. Your fee mint event has expired.",
            "",
            5000
          );
        } else {
          restartGame();
          return;
        }
      } else {
        return NotificationManager.warning(res.msgError, "", 5000);
      }
    });
  };

  useEffect(() => {
    if (account === undefined || account === null) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    } else {
      actionSetFreeMintCount(account).then((res) => {
        if (res.flagSuccess) {
          console.log(res);
          setCountFreeMint(res.count);
        } else {
          return NotificationManager.warning(res.msgError, "", 5000);
        }
      });
    }
  }, []);

  return (
    <SectionGameOver>
      <TextGameOverBack>
        <TextGameOverFront>GAME OVER ({countFreeMint}/3)</TextGameOverFront>
      </TextGameOverBack>
      {/* <ImgGameOver>
        <img src={imgGameOver} width={"100%"} height={"100%"} alt="" />
      </ImgGameOver> */}
      <SectionBoard>
        <SectionInsideBoard>
          <SectionBoardReward>
            <TextReward>Rewards</TextReward>
            <SectionRewardCoin>
              <img src={imgBee} width={"60%"} alt="" />
            </SectionRewardCoin>
            <SectionValue>
              {score * (process.env.REACT_APP_CLAIM_RATE as any)} BEET
            </SectionValue>
          </SectionBoardReward>
          <SectionBoardScore>
            <SectionScore>
              <SectionBestMark>
                {score > bestScore ? <MarkNew>NEW</MarkNew> : <></>}
                <TextScoreDescription>SCORE</TextScoreDescription>
              </SectionBestMark>
              <SectionDropScore>
                <TextScore>{score}</TextScore>
              </SectionDropScore>
            </SectionScore>
            <SectionBestScore>
              <TextScoreDescription>BEST</TextScoreDescription>
              <SectionDropScore>
                <TextScore>{bestScore}</TextScore>
              </SectionDropScore>
            </SectionBestScore>
          </SectionBoardScore>
        </SectionInsideBoard>
      </SectionBoard>
      <ButtonGroup>
        <ButtonSocial>
          <FaShareAlt />
        </ButtonSocial>
        <ButtonReplay onClick={() => handleReplay()}>Replay</ButtonReplay>
        <ButtonSocial onClick={() => {}}>
          <FaMedal />
        </ButtonSocial>
      </ButtonGroup>
    </SectionGameOver>
  );
};

const SectionGameOver = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 9100;
  flex-direction: column;
`;

const ButtonReplay = styled(Box)`
  display: flex;
  width: 320px;
  height: 100px;
  margin: 0px 30px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonStart});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 5em;
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

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 300px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    width: 280px;
    height: 90px;
  }
  @media (max-width: 768px) {
    width: 255px;
    height: 75px;
    margin: 0px 20px;
  }
  @media (max-width: 500px) {
    width: 170px;
    height: 50px;
    margin: 0px 15px;
  }
`;

const ButtonSocial = styled(Box)`
  display: flex;
  width: 100px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #511900;
  font-size: 5rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 90px;
  }
  @media (max-width: 1024px) {
    width: 80px;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
  @media (max-width: 500px) {
    width: 55px;
  }
`;

const ButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 30px;
  transition: 0.3s;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
  }
`;

const SectionDropScore = styled(Box)`
  display: flex;
  filter: drop-shadow(2px 2px 0px rgba(235, 87, 38, 1));
`;

const MarkNew = styled(Box)`
  display: flex;
  width: 92px;
  height: 42px;
  background: #ff3517;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: Lato;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  margin-right: 20px;

  transition: 0.3s;
  @media (max-width: 768px) {
    width: 62px;
    height: 34px;
    margin-right: 15px;
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 26px;
    margin-right: 10px;
  }
  @media (max-width: 390px) {
    width: 41px;
    height: 21px;
  }

  animation: animationNewMark 0.7s infinite;

  @keyframes animationNewMark {
    0% {
      /* background: #ff3517; */
      color: #fff;
    }
    50% {
      /* background: #fff; */
      color: #511900;
    }
    100% {
      /* background: #ff3517; */
      color: #fff;
    }
  }
`;

const SectionBestMark = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextScoreDescription = styled(Box)`
  text-align: right;
  font-family: Lato;
  font-size: 3.3rem;
  font-style: normal;
  font-weight: 700;
  background: var(--color-1, linear-gradient(180deg, #f90 0%, #d82005 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextScore = styled(Box)`
  text-align: right;
  font-family: Rowdies;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  color: #511900;
`;

const SectionScore = styled(Box)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const SectionBestScore = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 35px;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  @media (max-width: 390px) {
    margin-top: 20px;
  }
`;

const SectionValue = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  border-radius: 99px;
  background: #511900;
  color: #fff;
  text-align: center;
  font-size: 2.5em;
  font-family: Rowdies;
  line-height: 40px;
  margin-top: 10px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 130px;
    height: 40px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    margin-top: 5px;
  }
  @media (max-width: 390px) {
    width: 80px;
    height: 25px;
  }
`;

const SectionRewardCoin = styled(Box)`
  display: flex;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: linear-gradient(rgba(255, 153, 0, 1), rgba(216, 32, 5, 1));
  margin-top: 15px;
  margin-bottom: 30px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 768px) {
    width: 87px;
    height: 87px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    width: 67px;
    height: 67px;
  }
  @media (max-width: 390px) {
    width: 57px;
    height: 57px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const TextReward = styled(Box)`
  color: #511900;
  font-family: Rowdies;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
`;

const SectionBoardScore = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const SectionBoardReward = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionInsideBoard = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 5px solid #511900;
  background: radial-gradient(50% 50% at 50% 50%, #fce9d5 0%, #fad6b0 100%);
  padding: 30px;
  box-sizing: border-box;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 25px;
    border: 4px solid #511900;
  }
  @media (max-width: 768px) {
    padding: 20px;
    border: 4px solid #511900;
  }
  @media (max-width: 500px) {
    padding: 20px 20px;
    border: 3px solid #511900;
  }
`;

const SectionBoard = styled(Box)`
  display: flex;
  width: 650px;
  background: #fff;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(255, 153, 0, 1), rgba(216, 32, 5, 1))
      border-box;
  border-radius: 20px;
  border: 12px solid transparent;
  margin-top: 30px;

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 600px;
    margin-top: 20px;
  }
  @media (max-width: 1440px) {
    width: 550px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    width: 500px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 390px) {
    width: 320px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

const SectionGamePause = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9100;
  flex-direction: column;
`;

const ImgGameOver = styled(Box)`
  display: flex;
  width: 500px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 260px;
  }
  @media (max-width: 350px) {
    width: 230px;
  }
`;

const TextGameOverFront = styled(Box)`
  /* display: flex; */
  /* left: -3px; */
  /* top: -3px; */
  text-align: center;
  font-family: Rowdies;
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 700;
  background: -webkit-linear-gradient(#ff9900, #d82005);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 3px #511900;

  transition: 0.3s;
  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #511900;
  }
`;

const TextGameOverBack = styled(Box)`
  display: flex;
  filter: drop-shadow(3px 3px 0px #fff);

  transition: 0.3s;
  @media (max-width: 1024px) {
    filter: drop-shadow(2px 2px 0px #fff);
  }
  @media (max-width: 500px) {
    filter: drop-shadow(1px 1px 0px #fff);
  }
`;

export default GameOver;
