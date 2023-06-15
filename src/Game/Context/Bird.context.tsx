import React from "react"
import { IChildren } from "../Types/utils"
import { BIRD_SIZE, GAME_HEIGHT, GRAVITY, JUMP_SIZE } from "../Global"
import { useGameSystem } from "./GameSystem.context"
import { useScore } from "./Score.context"


interface IBirdContext {
  birdPosition: number
  restartBird: () => void
  jump: () => void
  birdAngle: number
  stop: () => void
}

const BirdContext = React.createContext<IBirdContext>({
  birdPosition: GAME_HEIGHT / 2,
  restartBird: () => { },
  jump: () => { },
  birdAngle: 0,
  stop: () => { }
})

export const BirdProvider = ({ children }: IChildren) => {
  const [birdPosition, setBirdPosition] = React.useState<number>(GAME_HEIGHT / 2)
  const { gameHasStarted, restartGame, startGame } = useGameSystem()
  const [birdAngle, setBirdAngle] = React.useState<number>(0)
  const { restartScore } = useScore()
  function stop() {
  }

  React.useEffect(() => {
    let intervalID: number | undefined;
    if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      intervalID = setInterval(() => {
        setBirdPosition(prev => {
          return prev + GRAVITY
        })
      }, 24)
    } else {
      restartGame()
      restartBird()
    }
    return () => {
      clearInterval(intervalID)
    }
  }, [birdPosition, gameHasStarted])

  function restartBird() {
    setBirdPosition(GAME_HEIGHT / 2)
    setBirdAngle(0)
    restartScore()
    restartGame()
  }

  function jump() {
    let newBirdPosition = birdPosition - JUMP_SIZE
    if (!gameHasStarted) {
      startGame()
    }
    if (newBirdPosition + BIRD_SIZE < 0) {
      setBirdPosition(0)
    } else {
      setBirdPosition(newBirdPosition)
    }
  }


  return <BirdContext.Provider value={{ stop, birdPosition, restartBird, jump, birdAngle }}>
    {children}
  </BirdContext.Provider>
}


export const useBird = () => React.useContext(BirdContext)