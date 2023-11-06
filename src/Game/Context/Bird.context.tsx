import React, { useRef } from "react";
import { IChildren } from "../Types/utils";
import { BIRD_SIZE, GAME_HEIGHT, GRAVITY, JUMP_SIZE } from "../Global";
import { useGameSystem } from "./GameSystem.context";
import { useScore } from "./Score.context";
import { useWeb3React } from "@web3-react/core";
import { actionSetScore } from "../../actions/score";
import { NotificationManager } from "react-notifications";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const { gameHasStarted, restartGame, startGame, pauseGame, overGame } =
    useGameSystem();
  const [birdAngle, setBirdAngle] = React.useState<number>(0);
  const { score, restartScore } = useScore();
  const toastId: any = useRef(null);
  const { account } = useWeb3React();
  function stop() {}

  React.useEffect(() => {
    let intervalID: any;
    let speed =
      window.innerWidth > 900 ? 24 : window.innerWidth > 500 ? 30 : 40;
    if (gameHasStarted === 0) {
      restartScore();
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
      }, speed);
    }
    if (
      gameHasStarted === 1 &&
      birdPosition > GAME_HEIGHT - BIRD_SIZE - 125 - 28
    ) {
      console.log("dead!");
      overGame();
      if (account === undefined || account === null) {
        return NotificationManager.warning(
          "Please connect your wallet.",
          "",
          3000
        );
      } else {
        console.log("score:", score);
        actionSetScore(account, score, location.state.typeGame);
      }
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [birdPosition, gameHasStarted, location]);

  function restartBird() {
    setBirdPosition(GAME_HEIGHT / 2);
    setBirdAngle(0);
    // restartScore();
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
