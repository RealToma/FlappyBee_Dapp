import { Scene, Score, Bird } from "./Components";
import { Container } from "./Components/Container";
import createObstacle from "./Components/Obstacle/createObstacle";
import { useGameSystem, useScore } from "./Context";
import { GAME_WIDTH } from "./Global";
import "../index.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import imgButtonSmall from "../assets/images/buttons/HomeSmall.png";
import { FaPause } from "react-icons/fa";

import imgCursorStart from "../assets/images/icons/cursorClickon.png";
import GameOver from "./Components/Modal/GameOver";

const Game = () => {
  const { gameHasStarted, startGame, restartGame } = useGameSystem();

  let increment = GAME_WIDTH / 2;

  const Obstacle1 = createObstacle({ increment: increment / 2 });
  const Obstacle2 = createObstacle({ increment: increment * 2 });
  // const Obstacle3 = createObstacle({ increment: increment * 2 });

  const obstacles = [Obstacle1, Obstacle2];

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
            <TextGetReady>GET READY!</TextGetReady>
            <ImgCursorStart>
              <img src={imgCursorStart} width={"100%"} alt="" />
            </ImgCursorStart>
            <TextTapPlay>Play</TextTapPlay>
          </SectionGameStart>
        ) : gameHasStarted === 1 ? (
          <></>
        ) : gameHasStarted === 2 ? (
          <></>
        ) : (
          <GameOver />
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

const SectionGameStart = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 3999;
  user-select: none;
  cursor: pointer;
  flex-direction: column;
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
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    top: 110px;
    right: 20px;
  }
  z-index: 9000;
`;

export default Game;
