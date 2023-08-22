import styled from "@emotion/styled";
import { OBSTACLE_WIDTH, GAME_HEIGHT, UNIT } from "../../Global";
import { useObstacle } from "../../Context/Obstacle.context";
import pipe from "../../../assets/images/background/pipe.png";
import imgFloor from "../../../assets/images/background/floor.png";
import { useBird, useGameSystem } from "../../Context";
import React from "react";
import { Box } from "@mui/material";
import imgTopFlower from "../../../assets/images/background/TopFlowers.png";

const Obstacle = () => {
  const { gameHasStarted } = useGameSystem();
  const { birdPosition } = useBird();
  const { obstaclePosition } = useObstacle();
  const [bgPosition, setBgPosition] = React.useState<number>(0);

  React.useEffect(() => {
    setBgPosition((prev) => (prev -= UNIT * 3));
  }, [birdPosition]);

  React.useEffect(() => {
    if (gameHasStarted === 0) {
      setBgPosition(0);
    }
  }, [gameHasStarted]);

  return (
    <>
      <Obstacles />

      <SectionFloor
        style={{
          backgroundPosition: `${bgPosition}px 0px`,
        }}
      ></SectionFloor>
      {/* {/* <SectionTopFlower
        style={{
          backgroundPosition: `${bgPosition}px 0px`,
        }}
      ></SectionTopFlower> */}
    </>
  );
};
const Obstacles = () => {
  const {
    obstacleHeight,
    obstaclePosition,
    obstacleBottomHeight,
    startPosition,
  } = useObstacle();

  return (
    <div style={{ height: "100%", position: "absolute" }}>
      <ObstacleElement
        top={0}
        bg={pipe}
        width={OBSTACLE_WIDTH}
        height={obstacleHeight}
        invert
        left={obstaclePosition}
      />
      <ObstacleElement
        top={GAME_HEIGHT - (obstacleHeight + obstacleBottomHeight)}
        bg={pipe}
        width={OBSTACLE_WIDTH}
        height={obstacleBottomHeight}
        left={obstaclePosition}
      ></ObstacleElement>
    </div>
  );
};

export default Obstacle;

interface IObstacleStyled {
  top: number;
  left: number;
  width: number;
  height: number;
  bg: any;
  invert?: boolean;
}

const ObstacleElement = styled.div<IObstacleStyled>`
  position: relative;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.bg})`};
  background-repeat: no-repeat;
  transform: ${(props) => (props.invert ? "rotate(180deg)" : "rotate(0deg)")};
  background-size: 100% auto;
  z-index: 2000;
  transition: none;
`;

const SectionFloor = styled.div`
  position: absolute;
  bottom: 0%;
  height: 64px;
  width: 100%;
  background-image: url(${imgFloor});
  background-size: 100% 100%;
  z-index: 3000;

  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 390px) {
    height: 40px;
  }
`;

const SectionTopFlower = styled(Box)`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 130px;
  background-image: url(${imgTopFlower});
  background-size: 100% 100%;
  z-index: 3001;
`;
