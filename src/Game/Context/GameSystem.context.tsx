import React from "react"
import { IChildren } from "../Types/utils"
import { useBird } from "./Bird.context"
import { useObstacle } from "./Obstacle.context"
import { useScore } from "./Score.context"

interface IGameSystemContext {
  gameHasStarted: boolean
  restartGame: () => void
  startGame: () => void
}

const GameSystemContext = React.createContext<IGameSystemContext>({
  gameHasStarted: false,
  restartGame: () => { },
  startGame: () => { }
})

export const GameSystemProvider = ({ children }: IChildren) => {
  const [gameHasStarted, setGameHasStarted] = React.useState<boolean>(false)


  function restartGame() {
    setGameHasStarted(false)
  }

  function startGame() {
    setGameHasStarted(true)
  }

  return <GameSystemContext.Provider value={{ gameHasStarted, restartGame, startGame }}>
    {children}
  </GameSystemContext.Provider>
}

export const useGameSystem = () => React.useContext(GameSystemContext)
