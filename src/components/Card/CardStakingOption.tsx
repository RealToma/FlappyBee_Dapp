import { Box } from "@mui/material";
import styled from "styled-components";

const CardStakingOption = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionDays>
        <TextNumberDay>{data.days}</TextNumberDay>
        <TextDays>Days</TextDays>
      </SectionDays>
      <TextLockDuration>Lockup Duration</TextLockDuration>
      <SectionStakingState>
        <SectionEachState>
          <IconPoint></IconPoint>
          <TextStateEachValue style={{ color: "white" }}>
            APR: {data.apr}%
          </TextStateEachValue>
        </SectionEachState>
        <SectionEachState>
          <IconPoint></IconPoint>
          <TextStateEachValue style={{ color: "white" }}>
            TVL: {data.tvl} BEET
          </TextStateEachValue>
        </SectionEachState>
        <SectionEachState>
          <IconPoint></IconPoint>
          <TextStateEachValue style={{ color: "white" }}>
            Stake: {data.stake} BEET
          </TextStateEachValue>
        </SectionEachState>
        <SectionEachState>
          <IconPoint></IconPoint>
          <TextStateEachValue style={{ color: "#00FF19" }}>
            Penalty: {data.penalty}%
          </TextStateEachValue>
        </SectionEachState>
        <ButtonGroupStake>
          <ButtonStatke>Stake</ButtonStatke>
          <ButtonStatke>Unstake</ButtonStatke>
        </ButtonGroupStake>
        <SectionEachState>
          <IconPoint></IconPoint>
          <TextStateEachValue style={{ color: "white" }}>
            Yield: {data.yield} BEET
          </TextStateEachValue>
        </SectionEachState>
      </SectionStakingState>
      <ButtonGroupWithdraw>
        <ButtonWithdraw>Withdraw</ButtonWithdraw>
        <ButtonWithdraw>Restake</ButtonWithdraw>
      </ButtonGroupWithdraw>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #117754;
  background: #003624;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px 30px 30px;
  box-sizing: border-box;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 12px white;
  }
`;

const SectionDays = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const TextNumberDay = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 6em;
  font-style: normal;
  font-weight: 400;
  line-height: 70px;
`;

const TextDays = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 4em;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-left: 10px;
`;

const TextLockDuration = styled(Box)`
  color: #7cc2aa;
  text-align: center;
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-top: 8px;
`;

const SectionStakingState = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const SectionEachState = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const IconPoint = styled(Box)`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #00ff19;
  margin-right: 20px;
`;

const TextStateEachValue = styled(Box)`
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const ButtonGroupStake = styled(Box)`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin: 40px 0px 20px 0px;
  padding-bottom: 20px;
  border-bottom: 2px solid #117754;
`;

const ButtonStatke = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #117754;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Rowdies;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: #117754;
    background-color: white;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ButtonGroupWithdraw = styled(Box)`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 30px;
`;

const ButtonWithdraw = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #117754;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  color: #003d28;
  font-family: Rowdies;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: #a9d100;
    background-color: white;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default CardStakingOption;
