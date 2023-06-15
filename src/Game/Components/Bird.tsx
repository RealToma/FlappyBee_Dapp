import styled from "@emotion/styled"
import { BIRD_SIZE, GAME_WIDTH } from "../Global"
import { useBird } from "../Context/Bird.context"
import { useGameSystem } from "../Context/GameSystem.context"
import { Bird_img } from "../../assets/Vector"
import React from "react"

const Bird = () => {

  const { birdPosition, birdAngle } = useBird()
  const { gameHasStarted } = useGameSystem()
  const [birdFrame, setBirdFrame] = React.useState<number>(1)
  React.useEffect(() => {
    if (gameHasStarted) {
      const intervalID = setInterval(() => {
        setBirdFrame(prev => prev == 1 ? 2 : prev == 2 ? 3 : 1)

      }, 280)
      return () => clearInterval(intervalID)
    }
  }, [gameHasStarted])
  return (
    <BirdElement
      gameHasStarted={gameHasStarted}
      size={BIRD_SIZE}
      top={birdPosition}
      left={(GAME_WIDTH / 2) - (BIRD_SIZE / 2)}
      angle={birdAngle}
    >
      <Bird_img variant={birdFrame} />
    </BirdElement>)
}

export default Bird



interface IBirdStyled {
  top: number
  left: number
  size: number
  gameHasStarted: boolean
  angle: number
}

const BirdElement = styled.div < IBirdStyled>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: ${props => `rotate(${props.angle}deg) `};
  transition: all 80ms linear;
  overflow: hidden;
`
