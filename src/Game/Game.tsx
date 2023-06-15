import { Scene, Score, Bird } from "./Components";
import { Container } from "./Components/Container";
import createObstacle from "./Components/Obstacle/createObstacle";
import { useGameSystem } from "./Context";
import { GAME_WIDTH } from "./Global";
import "../style.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import imgButtonSmall from "../assets/images/buttons/HomeSmall.png";
import { FaPause } from "react-icons/fa";

const Game = () => {
  const { gameHasStarted } = useGameSystem();

  let increment = GAME_WIDTH / 2;

  const Obstacle1 = createObstacle({ increment: increment / 2 });
  const Obstacle2 = createObstacle({ increment: increment * 2 });
  const Obstacle3 = createObstacle({ increment: increment * 2 });

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
      </Scene>
    </Container>
  );
};


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
  top: 65px;
  right: 65px;
  color: #511900;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
  z-index: 9000;
`;

export default Game;
