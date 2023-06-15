import styled from "@emotion/styled";
import { GAME_HEIGHT, GAME_WIDTH, UNIT } from "../Global";
import { ReactNode } from "react";
import { useBird } from "../Context/Bird.context";
import bg from "../../assets/images/background/BGHome.png";
import React from "react";
import { useGameSystem } from "../Context";

interface IScene {
  children: ReactNode;
}
const Scene = ({ children }: IScene) => {
  const { jump, birdPosition } = useBird();
  const { gameHasStarted } = useGameSystem();
  const [bgPosition, setBgPosition] = React.useState<number>(0);
  React.useEffect(() => {
    if (!gameHasStarted) {
      let intervalID = setInterval(() => {
        setBgPosition((prev) => (prev += UNIT / 10));
      }, 30);

      return () => clearInterval(intervalID);
    }
  }, [gameHasStarted]);

  return (
    <GameBox
      moveBG={-bgPosition}
      bg={bg}
      onClick={() => jump()}
      height={GAME_HEIGHT}
      width={GAME_WIDTH}
    >
      {children}
    </GameBox>
  );
};

export default Scene;

interface IGameBoxStyled {
  height: number;
  width: number;
  bg: any;
  moveBG: number;
}

const GameBox = styled.div<IGameBoxStyled>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: #03a9f4;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: auto 100%;
  background-position: ${(props) => props.moveBG}%;
  position: relative;
  overflow: hidden;
`;

