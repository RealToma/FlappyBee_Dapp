import React from "react"
import { IChildren } from "../Types/utils"


interface IScoreContext {
  score: number
  incrementScore: () => void
  restartScore: () => void
  bestScore: number
}

const ScoreContext = React.createContext<IScoreContext>({
  score: 0,
  incrementScore: () => { },
  restartScore: () => { },
  bestScore: 0,
})

export const ScoreProvider = ({ children }: IChildren) => {
  const [score, setScore] = React.useState<number>(0)
  const [bestScore, setBestScore] = React.useState<number>(0)

  function incrementScore() {
    setScore(prev => prev += 1)
  }

  function restartScore() {
    if (score > bestScore) {
      setBestScore(score)
    }
    setScore(0)
  }
  return <ScoreContext.Provider value={{ score, bestScore, incrementScore, restartScore }}>
    {children}
  </ScoreContext.Provider>
}

export const useScore = () => React.useContext(ScoreContext)