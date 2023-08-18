import React from "react";
import { useRef } from "react";
import { IChildren } from "../Types/utils";
import { useBird } from "./Bird.context";
import { useObstacle } from "./Obstacle.context";
import { useScore } from "./Score.context";
import { actionSetScore } from "../../actions/score.js";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";

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
  const toastId: any = useRef(null);
  const [gameHasStarted, setGameHasStarted] = React.useState<number>(0);
  const { score, bestScore } = useScore();
  const { account } = useWeb3React();

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
    // if (account === undefined || account === null) {
    //   if (!toast.isActive(toastId.current)) {
    //     toastId.current = toast.info("Please connect to your wallet first.");
    //   }
    //   return;
    // }
    // actionSetScore(account, score, bestScore);
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
