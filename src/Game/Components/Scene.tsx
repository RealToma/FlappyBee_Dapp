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
  const { jump } = useBird();
  const { gameHasStarted } = useGameSystem();
  const [bgPosition, setBgPosition] = React.useState<number>(0);

  React.useEffect(() => {
    let speed =
      window.innerWidth > 900 ? 24 : window.innerWidth > 500 ? 40 : 60;
    if (gameHasStarted === 1) {
      let intervalID = setInterval(() => {
        setBgPosition((prev) => (prev += UNIT / 10));
      }, speed);

      return () => clearInterval(intervalID);
    }
  }, [gameHasStarted]);

  return (
    <GameBox
      onClick={() => jump()}
      moveBG={-bgPosition}
      bg={bg}
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
  display: flex;
  height: calc(100vh - 120px);
  /* height: ${(props) => props.height}px; */
  width: ${(props) => props.width}px;
  background-color: #03a9f4;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: auto 100%;
  background-position: ${(props) => props.moveBG}%;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  transition: 0.3s;

  @media (max-width: 768px) {
    height: calc(100vh - 100px);
  }
  @media (max-width: 390px) {
    height: calc(100vh - 90px);
  }
`;
