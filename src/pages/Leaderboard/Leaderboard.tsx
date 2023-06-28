import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";
import imgButtonHome from "../../assets/images/buttons/GreenWide.svg";
import TableLeaderboard from "../../components/TableLeaderboard";
import { dataAllTime } from "../../data/Leaderboard";

const Leaderboard = () => {
  return (
    <StyledComponent>
      <SectionTop>
        <TextTitle>Leaderboard</TextTitle>
        <TextDescription>
          This is the world leaderboard of the game Flappy Bee.
          <br />
          Want to your name on the leaderboard? Play the game now!
        </TextDescription>
        <SectionButtonGroup>
          <ButtonPlay>Play</ButtonPlay>
          <ButtonHome>Home</ButtonHome>
        </SectionButtonGroup>
      </SectionTop>

      <SectionContent>
        <SectionLeaderboard>
          <SectionEachContent>
            <TextContentTitle>All-Time Leaderboard</TextContentTitle>
            <SectionTable>
              <TableLeaderboard data={dataAllTime} />
            </SectionTable>
          </SectionEachContent>
          <SectionEachContent></SectionEachContent>
        </SectionLeaderboard>
        <SectionLeaderStats></SectionLeaderStats>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #003d28;
`;

const SectionTop = styled(Box)`
  display: flex;
  background: #00583a;
  flex-direction: column;
  align-items: center;
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 100px;

  margin-top: 70px;
`;

const TextDescription = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 3.6em;
  font-family: Lato;
  font-weight: 500;
  line-height: 50px;
  margin-top: 22px;
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 45px;
`;

const ButtonPlay = styled(Box)`
  display: flex;
  width: 350px;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #511900;
  text-align: center;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 65px;

  background-image: url(${imgButtonPlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: white;
  }

  margin-right: 20px;
`;

const ButtonHome = styled(Box)`
  display: flex;
  width: 350px;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #511900;
  text-align: center;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 65px;

  background-image: url(${imgButtonHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: white;
  }
`;

const SectionLeaderboard = styled(Box)`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 126px;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 80px 178px 150px 178px;
  box-sizing: border-box;
  flex-direction: column;
`;

const SectionEachContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const TextContentTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 700;
  line-height: 50px;
`;

const SectionLeaderStats = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 65px;
`;

const SectionTable = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 110px;
`;

export default Leaderboard;
