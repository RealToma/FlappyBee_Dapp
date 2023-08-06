import React from "react";
import { IChildren } from "../Types/utils";
import {
  GAME_HEIGHT,
  OBSTACLE_GAP,
  GAME_WIDTH,
  OBSTACLE_WIDTH,
  UNIT,
  BIRD_SIZE,
} from "../Global";
import { useGameSystem } from "./GameSystem.context";
import { useScore } from "./Score.context";
import { useBird } from "./Bird.context";

interface IObstacleContext {
  obstacleHeight: number;
  obstaclePosition: number;
  restartObstacle: () => void;
  newObstacle: () => void;
  obstacleBottomHeight: number;
  startPosition: number;
}

const ObstacleContext = React.createContext<IObstacleContext>({
  obstacleHeight: 0,
  obstaclePosition: 0,
  restartObstacle: () => {},
  newObstacle: () => {},
  obstacleBottomHeight: 0,
  startPosition: 0,
});

interface IObstacleProvider extends IChildren {
  startPosition: number;
}

export const ObstacleProvider = ({
  children,
  startPosition,
}: IObstacleProvider) => {
  const [obstacleHeight, setObstacleHeight] = React.useState<number>(0);
  const [obstacleBottomHeight, setObstacleBottomHeight] =
    React.useState<number>(0);
  const [obstaclePosition, setObstaclePosition] = React.useState<number>(0);

  const [firstObstaclePassed, setFirstObstaclePassed] =
    React.useState<boolean>(false);

  const { gameHasStarted, restartGame, overGame } = useGameSystem();
  const { incrementScore, restartScore } = useScore();
  const { birdPosition, restartBird, stop } = useBird();

  const [stopObstacle, setStopObstacle] = React.useState<boolean>(false);

  function height() {
    return Math.random() * (GAME_HEIGHT - OBSTACLE_GAP);
  }
  function newObstacle() {
    let newHeight = height();

    if (newHeight < GAME_HEIGHT - OBSTACLE_GAP - 100 && newHeight > 100) {
      setObstacleHeight(newHeight);
      setObstacleBottomHeight(GAME_HEIGHT - newHeight - OBSTACLE_GAP);
    } else {
      newObstacle();
    }

    setObstaclePosition(GAME_WIDTH + startPosition);
    if (!firstObstaclePassed) {
      setFirstObstaclePassed(true);
    }
  }

  function restartObstacle() {
    setFirstObstaclePassed(false);

    restartBird();

    setObstacleHeight(0);
    setObstacleBottomHeight(0);
    setObstaclePosition(GAME_WIDTH + startPosition);
  }

  React.useEffect(() => {
    let obstacleID: any;
    if (gameHasStarted === 1 && obstaclePosition >= -OBSTACLE_WIDTH / 2) {
      obstacleID = setInterval(() => {
        setObstaclePosition((prev) => (prev -= UNIT * 3));
      }, 24);

      return () => clearInterval(obstacleID);
    } else {
      newObstacle();
      if (gameHasStarted === 1 && firstObstaclePassed) {
        incrementScore();
      }
    }
  }, [gameHasStarted, obstaclePosition]);

  React.useEffect(() => {
    let hasCollideWithTopObstacle =
      birdPosition >= 0 && birdPosition < obstacleHeight + BIRD_SIZE / 1.5;
    let hasCollideWithBottomObstacle =
      birdPosition <= GAME_HEIGHT &&
      birdPosition >= GAME_HEIGHT - obstacleBottomHeight;
    let birdDistanteToLeft = GAME_WIDTH / 5;
    if (
      obstaclePosition <= birdDistanteToLeft &&
      obstaclePosition >= GAME_WIDTH / 5 - OBSTACLE_WIDTH &&
      (hasCollideWithTopObstacle || hasCollideWithBottomObstacle)
    ) {
      overGame();
      restartObstacle();
    }
  }, [birdPosition]);

  return (
    <ObstacleContext.Provider
      value={{
        startPosition,
        obstacleHeight,
        obstaclePosition,
        restartObstacle,
        newObstacle,
        obstacleBottomHeight,
      }}
    >
      {children}
    </ObstacleContext.Provider>
  );
};

export const useObstacle = () => React.useContext(ObstacleContext);
