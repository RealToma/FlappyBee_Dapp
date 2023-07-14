import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import imgCoinStake from "../../assets/images/icons/coinReward.png";

const CardStakingOption = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const handleModalClose = () => setOpen(false);
  const handleModalOpen = () => setOpen(true);
  const [flagStake, setFlagStake] = useState(false);
  const [valueStake, setValueStake] = useState(0);

  const handleStake = () => {
    handleModalOpen();
    setFlagStake(false);
  };

  const handleUnStake = () => {
    handleModalOpen();
    setFlagStake(true);
  };

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
          <ButtonStatke
            onClick={() => {
              handleStake();
            }}
          >
            Stake
          </ButtonStatke>
          <ButtonStatke
            onClick={() => {
              handleUnStake();
            }}
          >
            Unstake
          </ButtonStatke>
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

      <Modal
        open={open}
        // onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={backdropstyled}
      >
        <ModalBox>
          <ButtonClose onClick={() => handleModalClose()}>
            <MdClose />
          </ButtonClose>
          <SectionDays>
            <TextNumberDay>0</TextNumberDay>
            <TextDays>BEET</TextDays>
          </SectionDays>
          <TextLockDuration>Amount Staked</TextLockDuration>
          <SectionBalance>
            <IconPoint></IconPoint>
            <TextBalanceBEET>Balance: 2803 BEET</TextBalanceBEET>
          </SectionBalance>
          <TextStakeDescription>
            Amount to {!flagStake ? "Stake" : "Unstake"}
          </TextStakeDescription>
          <SectionInputValue>
            <ImageCoin>
              <img src={imgCoinStake} width={"100%"} alt="" />
            </ImageCoin>
            <InputStake
              component="input"
              value={valueStake}
              onChange={(e: any) => {
                setValueStake(e.target.value);
              }}
            ></InputStake>
            <ButtonMax
              onClick={() => {
                setValueStake(100000);
              }}
            >
              Max
            </ButtonMax>
          </SectionInputValue>
          <ButtonConfirm>Confirm</ButtonConfirm>
        </ModalBox>
      </Modal>
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

const ModalBox = styled(Box)`
  display: flex;
  width: 420px;
  flex-direction: column;
  align-items: center;
  border: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: 1px solid #117754;
  background: #003624;
  box-shadow: 0 0 20px #117754;
  padding: 40px;
  box-sizing: border-box;
  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  /* @media (max-width: 600px) {
    transition: 0.5s !important;
    width: 300px;
  }*/
  @media (max-width: 450px) {
    width: 300px;
    padding: 20px 15px;
  }
`;

const ButtonClose = styled(Box)`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  color: white;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    transform: rotate(90deg);
    /* color: #646464; */
  }

  &:active {
    transform: scale(0.8);
  }
`;

const SectionBalance = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`;

const TextBalanceBEET = styled(Box)`
  color: #fff;
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

const TextStakeDescription = styled(Box)`
  display: flex;
  width: 100%;
  color: #7cc2aa;
  font-family: Lato;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-top: 5px;
`;

const SectionInputValue = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 185px;
  border-radius: 10px;
  border: 2px solid #117754;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;
`;

const ImageCoin = styled(Box)`
  display: flex;
  width: 36px;
  > img {
    width: 100%;
    aspect-ratio: 1;
  }
  margin-right: 12px;
`;

const ButtonMax = styled(Box)`
  display: flex;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #117754;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const InputStake = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 12px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-family: Lato;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

const ButtonConfirm = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #117754;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2.4em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const backdropstyled = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.8;
`;

export default CardStakingOption;
