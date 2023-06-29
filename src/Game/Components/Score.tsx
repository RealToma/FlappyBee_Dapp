import styled from "@emotion/styled";
import { useScore } from "../Context/Score.context";
import { Box } from "@mui/material";
import imgButtonSmall from "../../assets/images/buttons/HomeSmall.png";

const Score = () => {
  const { score, bestScore } = useScore();
  return (
    <ScoreElement>
      {score}
      {/* <H1>{score}</H1>
      <H2>{bestScore}</H2> */}
    </ScoreElement>
  );
};

const ScoreElement = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 150px;
  left: 65px;
  color: #511900;
  font-size: 5em;
  cursor: pointer;
  user-select: non e;
  transition: 0.2s;
  /* &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  } */
  z-index: 9000;

  transition: 0.3s;
  @media (max-width: 1440px) {
    left: 50px;
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 130px;
    left: 30px;
  }
  @media (max-width: 390px) {
    width: 50px;
    height: 50px;
    top: 110px;
    left: 20px;
  }
`;

const H1 = styled.h1`
  font-size: 40px;
`;

const H2 = styled.h2`
  font-size: 20px;
  line-height: 2rem;
`;

export default Score;
