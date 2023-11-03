import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";
import imgButtonHome from "../../assets/images/buttons/GreenWide.svg";
import TableLeaderboard from "../../components/TableLeaderboard";
// import { dataAllTime } from "../../data/Leaderboard";
import {
  shortAddress,
  sort24hScores,
  sortAllTimeScores,
} from "../../libs/Functions";
import imgLeaderboardStas from "../../assets/images/background/leaderboardStats.svg";
import { actionGetAllScores } from "../../actions/score";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";
import LoadingEffectMain from "../../components/Loading/LoadingEffectMain";

const Leaderboard = () => {
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const [dataAllScores, setDataAllScores] = useState([]);
  const [dataMyScores, setDataMyScores]: any = useState({
    average: 0,
    best: 0,
    record: 0,
    rank: 0,
  });

  const [dataAllTimeScores, setDataAllTimeScores]: any = useState({
    averageScore: 0,
    bestScore: 0,
    recordTotal: 0,
    bestPlayer: "",
  });

  const [flagFetchLoading, setFlagFetchLoading] = useState(false);

  const isFloat = (value: any) => {
    return Number(value) === value && value % 1 !== 0;
  };

  const handleConnectWallet = () => {
    if (account === undefined) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    }
  };
  useEffect(() => {
    actionGetAllScores().then((res) => {
      setFlagFetchLoading(true);
      if (res.flagSuccess) {
        let tempDataAllScores: any = [];
        let tempDataMyScores: any = [];
        for (var i = 0; i < res.dataScores.length; i++) {
          tempDataAllScores.push(res.dataScores[i]);

          if (account !== undefined) {
            if (res.dataScores[i].addressWallet === account) {
              tempDataMyScores.push(res.dataScores[i]);
            }
          }
        }

        setDataAllScores(tempDataAllScores);

        // handle all record
        let averageAll, bestScoreAll, recordAll, bestPlayerAll;
        let totalScoreAll = 0;
        for (var k = 0; k < tempDataAllScores.length; k++) {
          totalScoreAll += tempDataAllScores[k].score;
        }
        averageAll = isFloat(totalScoreAll / tempDataAllScores.length)
          ? (totalScoreAll / tempDataAllScores.length).toFixed(3)
          : totalScoreAll / tempDataAllScores.length;
        let tempSortDataAllScores: any = [];
        tempSortDataAllScores = tempDataAllScores.sort(
          (a: any, b: any) => b.score - a.score
        );
        bestScoreAll = tempSortDataAllScores[0]?.score;
        bestPlayerAll = tempSortDataAllScores[0]?.addressWallet;

        recordAll = tempDataAllScores.length;

        let objectDataAllScores = {
          averageScore: averageAll,
          bestScore: bestScoreAll,
          recordTotal: recordAll,
          bestPlayer: bestPlayerAll,
        };
        setDataAllTimeScores(objectDataAllScores);

        // handle my record
        let averageMy, bestMy, recordMy, rankMy;
        let totalScoreMy = 0;
        for (var j = 0; j < tempDataMyScores.length; j++) {
          totalScoreMy += tempDataMyScores[j].score;
        }
        averageMy = isFloat(totalScoreMy / tempDataMyScores.length)
          ? (totalScoreMy / tempDataMyScores.length).toFixed(3)
          : totalScoreMy / tempDataMyScores.length;

        let tempSortDataMyAllScores: any = [];
        tempSortDataMyAllScores = tempDataMyScores.sort(
          (a: any, b: any) => b.score - a.score
        );
        bestMy = tempSortDataMyAllScores[0]?.score;
        recordMy = tempDataMyScores.length;
        // rankMy =
        let objectDataMyScores = {
          average: averageMy,
          best: bestMy,
          record: recordMy,
          rank: 0,
        };
        setDataMyScores(objectDataMyScores);
      } else {
        return NotificationManager.error(res.msgError, "", 5000);
      }
    });
  }, [account]);

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
          <a
            href="https://flappybee.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ButtonHome>Home</ButtonHome>
          </a>

          <ButtonPlay
            onClick={() => {
              navigate("/play");
            }}
          >
            Play
          </ButtonPlay>
        </SectionButtonGroup>
      </SectionTop>

      <SectionContent>
        <SectionLeaderboard>
          <SectionEachContent>
            <TextContentTitle>All-Time Leaderboard</TextContentTitle>
            <SectionTable>
              <TableLeaderboard data={sortAllTimeScores(dataAllScores)} />
            </SectionTable>
          </SectionEachContent>
          <SectionEachContent>
            <TextContentTitle>24-Hour Leaderboard</TextContentTitle>
            <SectionTable>
              <TableLeaderboard data={sort24hScores(dataAllScores)} />
            </SectionTable>
          </SectionEachContent>
        </SectionLeaderboard>
        <TextStatsTitle>Your Stats</TextStatsTitle>
        <SectionLeaderStats>
          <SectionEachStats>
            <TextEachStatsTitle>Avarage Score</TextEachStatsTitle>
            {account !== undefined ? (
              <TextEachStatsContent>
                {dataMyScores["average"]}
              </TextEachStatsContent>
            ) : (
              <TextEachStatesConnectWallet
                onClick={() => handleConnectWallet()}
              >
                Connect Wallet
              </TextEachStatesConnectWallet>
            )}
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Score</TextEachStatsTitle>
            {account !== undefined ? (
              <TextEachStatsContent>
                {dataMyScores["best"]}
              </TextEachStatsContent>
            ) : (
              <TextEachStatesConnectWallet
                onClick={() => handleConnectWallet()}
              >
                Connect Wallet
              </TextEachStatesConnectWallet>
            )}
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Your Record</TextEachStatsTitle>
            {account !== undefined ? (
              <TextEachStatsContent>
                {dataMyScores["record"]}
              </TextEachStatsContent>
            ) : (
              <TextEachStatesConnectWallet
                onClick={() => handleConnectWallet()}
              >
                Connect Wallet
              </TextEachStatesConnectWallet>
            )}
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Your Rank</TextEachStatsTitle>
            {account !== undefined ? (
              <TextEachStatsContent>
                {dataMyScores["rank"]}
              </TextEachStatsContent>
            ) : (
              <TextEachStatesConnectWallet
                onClick={() => handleConnectWallet()}
              >
                Connect Wallet
              </TextEachStatesConnectWallet>
            )}
          </SectionEachStats>
        </SectionLeaderStats>

        <TextStatsTitle>All-Time Leaderboard</TextStatsTitle>
        <SectionLeaderStats>
          <SectionEachStats>
            <TextEachStatsTitle>Avarage Score</TextEachStatsTitle>
            <TextEachStatsContent>
              {dataAllTimeScores["averageScore"]}
            </TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Score</TextEachStatsTitle>
            <TextEachStatsContent>
              {dataAllTimeScores["bestScore"]}
            </TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Total Record</TextEachStatsTitle>
            <TextEachStatsContent>
              {dataAllTimeScores["recordTotal"]}
            </TextEachStatsContent>
          </SectionEachStats>
          <SectionEachStats>
            <TextEachStatsTitle>Best Player</TextEachStatsTitle>
            <TextEachStatsContent>
              {shortAddress(dataAllTimeScores["bestPlayer"])}
            </TextEachStatsContent>
          </SectionEachStats>
        </SectionLeaderStats>
      </SectionContent>
      {!flagFetchLoading ? <LoadingEffectMain text="Loading" /> : <></>}
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
  justify-content: center;
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
    padding: 30px 65px;
  }
  @media (max-width: 600px) {
    padding: 25px 50px;
  }
  @media (max-width: 500px) {
    padding: 20px 30px;
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
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
    line-height: 30px;
  }
`;

const TextEachStatesConnectWallet = styled(Box)`
  color: rgb(217, 255, 0);
  font-size: 2.5rem;
  font-family: Lato;
  font-weight: 600;
  line-height: 46px;
  transition: 0.3s;
  @media (max-width: 500px) {
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
    text-shadow: 0px 0px 12px white;
  }

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
  margin-right: 20px;

  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: white;
    text-shadow: 0px 0px 12px white;
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
  @media (max-width: 500px) {
    margin-right: unset;
    margin-bottom: 20px;
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
  @media (max-width: 500px) {
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
