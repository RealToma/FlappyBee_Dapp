import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";
import imgButtonHome from "../../assets/images/buttons/GreenWide.svg";
import TableLeaderboard from "../../components/TableLeaderboard";
import { dataAllTime } from "../../data/Leaderboard";
import { shortAddress } from "../../libs/Functions";
import imgLeaderboardStas from "../../assets/images/background/leaderboardStats.svg";

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
          <SectionEachContent>
            <TextContentTitle>24-Hour Leaderboard</TextContentTitle>
            <SectionTable>
              <TableLeaderboard data={dataAllTime} />
            </SectionTable>
          </SectionEachContent>
        </SectionLeaderboard>
        <TextStatsTitle>Leaderboard Stats</TextStatsTitle>
        <SectionLeaderStats>
          <SectionEachStats>
            <TextEachStatsTitle>Avarage Score</TextEachStatsTitle>
            <TextEachStatsContent>68.7</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Your Record</TextEachStatsTitle>
            <TextEachStatsContent>41</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Score</TextEachStatsTitle>
            <TextEachStatsContent>2345</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Player </TextEachStatsTitle>
            <TextEachStatsContent>
              {shortAddress("0x04830c9a998e6229fF518630608dd9De0BA79CCa ")}
            </TextEachStatsContent>
          </SectionEachStats>
        </SectionLeaderStats>

        <TextStatsTitle>All-Time Leaderboard</TextStatsTitle>
        <SectionLeaderStats>
          <SectionEachStats>
            <TextEachStatsTitle>Avarage Score</TextEachStatsTitle>
            <TextEachStatsContent>68.7</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Score</TextEachStatsTitle>
            <TextEachStatsContent>2345</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Your Record</TextEachStatsTitle>
            <TextEachStatsContent>41</TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Your Rank</TextEachStatsTitle>
            <TextEachStatsContent>1478</TextEachStatsContent>
          </SectionEachStats>
        </SectionLeaderStats>
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

const SectionEachStats = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 30px 50px;
  box-sizing: border-box;
  background-image: url(${imgLeaderboardStas});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background: #00583a; */

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 30px 50px;
  }
  @media (max-width: 1024px) {
    padding: 20px 35px;
  }
  @media (max-width: 768px) {
    padding: 30px 70px;
  }
  @media (max-width: 390px) {
    padding: 10px 20px;
  }

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(6px 6px 6px rgba(255, 255, 255, 0.3));
  }
`;

const TextEachStatsTitle = styled(Box)`
  color: #fff;
  font-size: 3em;
  font-family: Lato;
  line-height: 46px;
  transition: 0.3s;
  @media (max-width: 390px) {
    line-height: 30px;
  }
`;

const TextEachStatsContent = styled(Box)`
  color: #fff;
  font-size: 3.6em;
  font-family: Lato;
  font-weight: 700;
  line-height: 46px;
  transition: 0.3s;
  @media (max-width: 390px) {
    line-height: 30px;
  }
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 100px;

  margin-top: 70px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    line-height: unset;
  }
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

  transition: 0.3s;
  @media (max-width: 500px) {
    flex-direction: column;
  }
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
  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 300px;
    height: 85px;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 55px;
  }

  @media (max-width: 500px) {
    margin-right: unset;
    margin-bottom: 20px;
  }
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

  transition: all 0.2s;
  @media (max-width: 1440px) {
    width: 300px;
    height: 85px;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 55px;
  }
`;

const SectionLeaderboard = styled(Box)`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 126px;

  transition: all 0.2s;
  @media (max-width: 1600px) {
    grid-column-gap: 120px;
  }
  @media (max-width: 1440px) {
    grid-column-gap: 100px;
  }
  @media (max-width: 1024px) {
    grid-column-gap: 80px;
  }
  @media (max-width: 768px) {
    grid-column-gap: 50px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 86px 178px 150px 178px;
  box-sizing: border-box;
  flex-direction: column;

  transition: all 0.2s;
  @media (max-width: 1600px) {
    padding: 0px 120px 140px 120px;
  }
  @media (max-width: 1440px) {
    padding: 0px 80px 130px 80px;
  }
  @media (max-width: 1024px) {
    padding: 0px 50px 120px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px 100px 30px;
  }
`;

const SectionEachContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const TextContentTitle = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 700;
  line-height: 50px;
  margin-top: 80px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 700px) {
    margin-top: 80px;
  }
  @media (max-width: 500px) {
    margin-top: 60px;
  }
`;

const TextStatsTitle = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 60px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const SectionLeaderStats = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 80px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    grid-column-gap: 40px;
  }
  transition: 0.3s;
  @media (max-width: 1024px) {
    grid-column-gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
`;

const SectionTable = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 110px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;

export default Leaderboard;
