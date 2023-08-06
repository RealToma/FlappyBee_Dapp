import React from "react";
import { IChildren } from "../Types/utils";
import { BIRD_SIZE, GAME_HEIGHT, GRAVITY, JUMP_SIZE } from "../Global";
import { useGameSystem } from "./GameSystem.context";
import { useScore } from "./Score.context";

interface IBirdContext {
  birdPosition: number;
  restartBird: () => void;
  jump: () => void;
  birdAngle: number;
  stop: () => void;
}

const BirdContext = React.createContext<IBirdContext>({
  birdPosition: GAME_HEIGHT / 2,
  restartBird: () => {},
  jump: () => {},
  birdAngle: 0,
  stop: () => {},
});

export const BirdProvider = ({ children }: IChildren) => {
  const [birdPosition, setBirdPosition] = React.useState<number>(
    GAME_HEIGHT / 2
  );
  const { gameHasStarted, restartGame, startGame, pauseGame, overGame } =
    useGameSystem();
  const [birdAngle, setBirdAngle] = React.useState<number>(0);
  const { restartScore } = useScore();
  function stop() {}

  React.useEffect(() => {
    let intervalID: any;

    console.log(birdPosition);
    if (gameHasStarted === 0) {
      restartBird();
    }
    if (
      gameHasStarted === 1 &&
      birdPosition < GAME_HEIGHT - BIRD_SIZE - 125 - 28
    ) {
      intervalID = setInterval(() => {
        setBirdPosition((prev) => {
          return prev + GRAVITY;
        });
      }, 24);
    } else {
      restartBird();
    }
    if (
      gameHasStarted === 1 &&
      birdPosition > GAME_HEIGHT - BIRD_SIZE - 125 - 28
    ) {
      overGame();
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [birdPosition, gameHasStarted]);

  function restartBird() {
    setBirdPosition(GAME_HEIGHT / 2);
    setBirdAngle(0);
    restartScore();
    // restartGame();
  }

  function jump() {
    let newBirdPosition = birdPosition - JUMP_SIZE;
    if (gameHasStarted === 0) {
      startGame();
    }
    if (newBirdPosition + BIRD_SIZE < 0) {
      setBirdPosition(0);
    } else {
      if (gameHasStarted === 1) {
        setBirdPosition(newBirdPosition);
      } else {
        return;
      }
    }
  }

  return (
    <BirdContext.Provider
      value={{ stop, birdPosition, restartBird, jump, birdAngle }}
    >
      {children}
    </BirdContext.Provider>
  );
};

export const useBird = () => React.useContext(BirdContext);
