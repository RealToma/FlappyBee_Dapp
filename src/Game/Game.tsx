import { Scene, Score, Bird } from "./Components";
import { Container } from "./Components/Container";
import createObstacle from "./Components/Obstacle/createObstacle";
import { useGameSystem } from "./Context";
import { GAME_WIDTH } from "./Global";
import "../style.css";
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
      </Scene>
    </Container>
  );
};

export default Game;
