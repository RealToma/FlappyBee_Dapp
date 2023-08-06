import { Scene, Score, Bird } from "./Components";
import { Container } from "./Components/Container";
import createObstacle from "./Components/Obstacle/createObstacle";
import { useBird, useGameSystem, useObstacle, useScore } from "./Context";
import { GAME_WIDTH } from "./Global";
import "../style.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import imgButtonSmall from "../assets/images/buttons/HomeSmall.png";
import { FaMedal, FaPause, FaShareAlt } from "react-icons/fa";
import imgGameOver from "../assets/images/background/game over.png";
import imgCoin from "../assets/images/icons/coinReward.png";
import imgButtonStart from "../assets/images/buttons/HomeWide.png";
import imgCursorStart from "../assets/images/icons/cursorClickon.png";

const Game = () => {
  const { gameHasStarted, startGame } = useGameSystem();
  const { score, bestScore } = useScore();

  let increment = GAME_WIDTH / 2;

  const Obstacle1 = createObstacle({ increment: increment / 2 });
  const Obstacle2 = createObstacle({ increment: increment * 2 });
  const Obstacle3 = createObstacle({ increment: increment * 2 });

  const obstacles = [Obstacle1, Obstacle2];

  const handleReply = () => {
    startGame();
  };

  return (
    <Container>
      <Scene>
        <Score />
        {obstacles.map((Item, index) => (
          <Item key={index} />
        ))}

        <Bird />
        <ButtonPause>
          <FaPause />
        </ButtonPause>

        {gameHasStarted === 0 ? (
          <SectionGameStart
            onClick={() => {
              startGame();
            }}
          >
            <TextGetReady>GET READY !</TextGetReady>
            <ImgCursorStart>
              <img src={imgCursorStart} width={"100%"} alt="" />
            </ImgCursorStart>
            <TextTapPlay>Tap to Play</TextTapPlay>
          </SectionGameStart>
        ) : gameHasStarted === 1 ? (
          <></>
        ) : gameHasStarted === 2 ? (
          <></>
        ) : (
          <SectionGameOver>
            <ImgGameOver>
              <img src={imgGameOver} width={"100%"} height={"100%"} alt="" />
            </ImgGameOver>
            <SectionBoard>
              <SectionInsideBoard>
                <SectionBoardReward>
                  <TextReward>Rewards</TextReward>
                  <SectionRewardCoin>
                    <img src={imgCoin} width={"90%"} alt="" />
                  </SectionRewardCoin>
                  <SectionValue>{10}</SectionValue>
                </SectionBoardReward>
                <SectionBoardScore>
                  <SectionScore>
                    <TextScoreDescription>SCORE</TextScoreDescription>
                    <SectionDropScore>
                      <TextScore>{score}</TextScore>
                    </SectionDropScore>
                  </SectionScore>
                  <SectionBestScore>
                    <SectionBestMark>
                      <MarkNew>NEW</MarkNew>
                      <TextScoreDescription>BEST</TextScoreDescription>
                    </SectionBestMark>
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
              <ButtonReply onClick={() => handleReply()}>Reply</ButtonReply>
              <ButtonSocial>
                <FaMedal />
              </ButtonSocial>
            </ButtonGroup>
          </SectionGameOver>
        )}
      </Scene>
    </Container>
  );
};

const ImgCursorStart = styled(Box)`
  display: flex;
  width: 110px;
  margin-top: 45px;
  margin-bottom: 30px;
`;

const TextTapPlay = styled(Box)`
  display: flex;
  background-color: rgba(255, 12, 12, 1);
  text-align: center;
  font-family: Rowdies;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
`;

const TextGetReady = styled(Box)`
  display: flex;
  background-color: #5a0800;
  text-align: center;
  font-family: Rowdies;
  font-size: 10rem;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px white;
`;

const ButtonReply = styled(Box)`
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
  }
  @media (max-width: 390px) {
    width: 170px;
    height: 50px;
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
  @media (max-width: 390px) {
    width: 55px;
  }
`;

const ButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 40px;
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
`;

const SectionBestMark = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextScoreDescription = styled(Box)`
  text-align: right;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  background: var(--color-1, linear-gradient(180deg, #f90 0%, #d82005 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextScore = styled(Box)`
  text-align: right;
  font-family: Rowdies;
  font-size: 9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 80px; /* 88.889% */
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
  font-size: 3em;
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
`;

const TextReward = styled(Box)`
  color: #511900;
  font-family: Rowdies;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
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
  padding: 40px;
  box-sizing: border-box;
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
  margin-top: 50px;
`;

const SectionGameStart = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  user-select: none;
  cursor: pointer;
  flex-direction: column;
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
  width: 560px;
`;

const ButtonPause = styled(Box)`
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
  top: 150px;
  right: 65px;
  color: #511900;
  font-size: 5em;
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
    right: 50px;
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 130px;
    right: 30px;
  }
  @media (max-width: 390px) {
    width: 50px;
    height: 50px;
    top: 110px;
    right: 20px;
  }
  z-index: 9000;
`;

const SectionGameOver = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 910000;
  flex-direction: column;
`;

export default Game;
