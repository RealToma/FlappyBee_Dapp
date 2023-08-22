import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";
import imgButtonHome from "../../assets/images/buttons/GreenWide.svg";
import TableLeaderboard from "../../components/TableLeaderboard";
import { dataAllTime } from "../../data/Leaderboard";
import { shortAddress } from "../../libs/Functions";
import imgLeaderboardStas from "../../assets/images/background/leaderboardStats.svg";
import { dataStakingOptions } from "../../data/Staking";
import CardStakingOption from "../../components/Card/CardStakingOption";

const Stake = () => {
  return (
    <StyledComponent>
      <SectionTop>
        <TextTitle>Staking</TextTitle>
        <TextDescription>
          Through staking, players can lock up their BEET tokens to receive
          newly issued BEET tokens as rewards for their long term alignment.
        </TextDescription>
        <SectionButtonGroup>
          <ButtonPlay>Buy BEET</ButtonPlay>
          <ButtonHome>Stake</ButtonHome>
        </SectionButtonGroup>
      </SectionTop>
      <SectionContent>
        <SectionStakingState>
          <SectionEachState>
            <TextHeadState>My BEET Staking</TextHeadState>
            <SectionGroupValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "white" }}>
                  --
                </TextUpValueState>
                <TextDownValueState>Total Staked</TextDownValueState>
              </SectionEachValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "white" }}>
                  2803
                </TextUpValueState>
                <TextDownValueState>Available in Wallet</TextDownValueState>
              </SectionEachValue>
            </SectionGroupValue>
          </SectionEachState>

          <SectionEachState>
            <TextHeadState>Early Unstake Penalty</TextHeadState>
            <SectionGroupValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "#00FF19" }}>
                  5%
                </TextUpValueState>
                <TextDownValueState>7 days</TextDownValueState>
              </SectionEachValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "#d9ff00" }}>
                  7%
                </TextUpValueState>
                <TextDownValueState>30 days</TextDownValueState>
              </SectionEachValue>

              <SectionEachValue>
                <TextUpValueState style={{ color: "#FFC700" }}>
                  15%
                </TextUpValueState>
                <TextDownValueState>180 days</TextDownValueState>
              </SectionEachValue>

              <SectionEachValue>
                <TextUpValueState style={{ color: "#F00" }}>
                  30%
                </TextUpValueState>
                <TextDownValueState>364 days</TextDownValueState>
              </SectionEachValue>
            </SectionGroupValue>
          </SectionEachState>

          <SectionEachState>
            <TextHeadState>Global Metrics</TextHeadState>
            <SectionGroupValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "white" }}>
                  17093
                </TextUpValueState>
                <TextDownValueState>Total Staked</TextDownValueState>
              </SectionEachValue>
              <SectionEachValue>
                <TextUpValueState style={{ color: "white" }}>
                  --
                </TextUpValueState>
                <TextDownValueState>Total Rewards</TextDownValueState>
              </SectionEachValue>
            </SectionGroupValue>
          </SectionEachState>
        </SectionStakingState>
        <SectionStakingOptions>
          <TextSatkingOptions>Staking Options</TextSatkingOptions>
          <SectionOptions>
            {dataStakingOptions.map((each, index) => {
              return <CardStakingOption data={each} key={index} />;
            })}
          </SectionOptions>
        </SectionStakingOptions>
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

  padding: 0px 360px;
  box-sizing: border-box;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 0px 180px;
  }
  @media (max-width: 1024px) {
    padding: 0px 150px;
  }
  @media (max-width: 768px) {
    padding: 0px 120px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
  @media (max-width: 390px) {
    padding: 0px 20px;
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
    /* flex-direction: column; */
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
    height: 60px;
  }

  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
  }
  @media (max-width: 500px) {
    width: 135px;
    height: 40px;
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
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
  }
  @media (max-width: 500px) {
    width: 135px;
    height: 40px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 80px 60px 150px 60px;
  box-sizing: border-box;
  flex-direction: column;

  transition: all 0.3s;
  @media (max-width: 1600px) {
    padding: 80px 60px 150px 60px;
  }
  @media (max-width: 1440px) {
    padding: 60px 30px 100px 30px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px 70px 20px;
  }
  @media (max-width: 390px) {
    padding: 30px 10px 50px 10px;
  }
`;

const SectionStakingState = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;

  transition: all 0.3s;
  @media (max-width: 1600px) {
    grid-column-gap: 50px;
  }
  @media (max-width: 1440px) {
    grid-column-gap: 45px;
  }
  @media (max-width: 1439px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media (max-width: 1200px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 768px) {
    padding: 20px 20px 50px 20px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 1px 10px 40px 10px;
  }
  @media (max-width: 390px) {
    padding: 0px 10px 30px 10px;
  }
`;

const SectionEachState = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #117754;
  background: #003624;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 12px white;
  }

  transition: all 0.3s;
  @media (max-width: 1600px) {
    padding: 35px;
  }
  @media (max-width: 1440px) {
    padding: 30px;
  }
  @media (max-width: 1024px) {
    padding: 26px;
  }
  @media (max-width: 768px) {
    padding: 24px;
  }
  @media (max-width: 390px) {
  }
`;

const TextHeadState = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 4em;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
`;

const SectionGroupValue = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 80px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    margin-top: 10px;
  }
`;

const SectionEachValue = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const TextUpValueState = styled(Box)`
  font-family: Rowdies;
  font-size: 4em;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
`;

const TextDownValueState = styled(Box)`
  color: #7cc2aa;
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const SectionStakingOptions = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
`;

const TextSatkingOptions = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 5em;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
`;

const SectionOptions = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  margin-top: 60px;
`;

export default Stake;
