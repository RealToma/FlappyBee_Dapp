import React from "react";
import { IChildren } from "../Types/utils";
import { useBird } from "./Bird.context";
import { useObstacle } from "./Obstacle.context";
import { useScore } from "./Score.context";

interface IGameSystemContext {
  gameHasStarted: number; // 0: first, 1: start, 2: pause, 3: over
  restartGame: () => void;
  startGame: () => void;
  pauseGame: () => void;
  overGame: () => void;
}

const GameSystemContext = React.createContext<IGameSystemContext>({
  gameHasStarted: 0,
  restartGame: () => {},
  startGame: () => {},
  pauseGame: () => {},
  overGame: () => {},
});

export const GameSystemProvider = ({ children }: IChildren) => {
  const [gameHasStarted, setGameHasStarted] = React.useState<number>(0);

  function restartGame() {
    setGameHasStarted(0);
  }

  function startGame() {
    setGameHasStarted(1);
  }
  function pauseGame() {
    setGameHasStarted(2);
  }

  function overGame() {
    setGameHasStarted(3);
  }

  return (
    <GameSystemContext.Provider
      value={{ gameHasStarted, restartGame, startGame, pauseGame, overGame }}
    >
      {children}
    </GameSystemContext.Provider>
  );
};

export const useGameSystem = () => React.useContext(GameSystemContext);
