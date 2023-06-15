import styled from "@emotion/styled"
import { useScore } from "../Context/Score.context"

const Score = () => {
  const { score, bestScore } = useScore()
  return (
    <ScoreElement>
      <H1>
        {score}
      </H1>
      <H2>
        {bestScore}
      </H2>
    </ScoreElement>
  )
}

export default Score


const ScoreElement = styled.div`
  font-size: 40px;
  font-weight: 800;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #fafafa;

  `


const H1 = styled.h1`
  font-size: 40px;
  `


const H2 = styled.h2`
  font-size: 20px;
  line-height: 2rem;
  `