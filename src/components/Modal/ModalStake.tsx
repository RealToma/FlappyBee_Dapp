import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";
import { RiLock2Line } from "react-icons/ri";
import { RefContext } from "../../libs/RefContext";
import { TextStakeTitle } from "../Text/TextStakeTitle";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { CONTRACTS } from "../../utils/constants";
import { ABI_BEET_STAKING, ABI_BEET_TOKEN } from "../../utils/abi";
import { covertEthToWei, getAllBalance } from "../../libs/Functions";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const ModalStake = () => {
  const navigate = useNavigate();
  const { account, active, library } = useWeb3React();
  const {
    balanceBNB,
    balanceBEET,
    balanceBEETStaked,
    flagModalDelegate,
    setFlagModalDelegate,
    dataValidator,
    setBalanceBNB,
    setBalanceBEET,
    setBalanceBEETStaked,
  }: any = useContext(RefContext);

  const [amountStake, setAmountStake] = useState(0);
  const [flagClickedStake, setFlagClickedStake] = useState(false);

  const handleCloseModal = () => {
    setAmountStake(0);
    setFlagModalDelegate(false);
    setFlagClickedStake(false);
  };

  const handleStake = async () => {
    if (account === undefined || account === null) {
      return NotificationManager.warning("Connect your wallet.", "", 3000);
    }

    if (amountStake < 300) {
      return NotificationManager.error(
        "Staking amount is greater than 300.",
        "",
        3000
      );
    }

    if (amountStake > balanceBEET) {
      return NotificationManager.error(
        "Staking amount is greater than max amount.",
        "",
        3000
      );
    }

    if (balanceBNB <= 0) {
      return NotificationManager.error(
        "You don't have enough BNB to process transaction.",
        "",
        3000
      );
    }

    setFlagClickedStake(true);
    if (flagClickedStake) {
      return;
    }

    const provider: any = new Web3Provider(library.provider);
    const signer: any = provider.getSigner();

    const contractBEETToken: any = new ethers.Contract(
      CONTRACTS.BEETToken as any,
      ABI_BEET_TOKEN,
      signer
    );

    const contractBEETStaking: any = new ethers.Contract(
      CONTRACTS.BEETStaking as any,
      ABI_BEET_STAKING,
      signer
    );
    try {
      if (active) {
        const resApprove = await contractBEETToken.approve(
          process.env.REACT_APP_NETWORK === "mainnet"
            ? process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING_MAIN
            : process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING_TEST,
          covertEthToWei(amountStake)
        );
        await resApprove.wait();
        const resStake = await contractBEETStaking.stake(
          covertEthToWei(amountStake)
          // "0x" + (amountStake * Math.pow(10, 18)).toString(16)
        );
        await resStake.wait();
        NotificationManager.success(
          `Staked ${amountStake}BEET. Please check your dashboard.`,
          "Success!",
          3000
        );

        const balanceALl: any = await getAllBalance(account);
        setBalanceBNB(balanceALl.balanceBNB);
        setBalanceBEET(balanceALl.balanceBEET);
        setBalanceBEETStaked(balanceALl.balanceBEETStaked);
        setTimeout(() => {
          setFlagClickedStake(false);
          handleCloseModal();
          navigate("/dashboard");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }, 3000);
      }
    } catch (error: any) {
      setFlagClickedStake(false);
      console.log("staking error:", error);
      NotificationManager.error("Failed. Try it again.", "", 3000);
      // return NotificationManager.error(`${error}`, "", 3000);
    }
  };

  const handleSetMaxStake = async () => {
    setAmountStake(balanceBEET);
  };

  return (
    <Modal
      open={flagModalDelegate}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // BackdropComponent={backdropstyled}
    >
      <ModalBox>
        <ModalBoxInsideScroll>
          <TextStakeTitle text={dataValidator.name} />
          <TextCommission>
            Commission : {dataValidator.commission}%
          </TextCommission>
          <SectionValidatorInfo>
            <SectionEachCard>
              <TextCardTitle>{dataValidator.name} Total Staked</TextCardTitle>
              <SectionCardDown>
                <TextCardValue>
                  $
                  {dataValidator.sizePool *
                    (process.env.REACT_APP_PRICE_BEET_USD as any)}
                </TextCardValue>
                <IconLock>
                  <RiLock2Line />
                </IconLock>
              </SectionCardDown>
            </SectionEachCard>
            <SectionEachCard>
              <TextCardTitle>Esstimated Rewards</TextCardTitle>
              <SectionCardDown>
                <TextCardValue>11.87 %</TextCardValue>
              </SectionCardDown>
            </SectionEachCard>
          </SectionValidatorInfo>
          <SectionStakeInfo>
            <TextStakeTitle text={"My BEET Staking"} />
            <SectionValidatorInfo>
              <SectionEachCard>
                <TextCardTitle>Total Staked</TextCardTitle>
                <SectionCardDown>
                  <TextCardValue>{balanceBEETStaked}</TextCardValue>
                </SectionCardDown>
              </SectionEachCard>
              <SectionEachCard>
                <TextCardTitle>Available in Wallet</TextCardTitle>
                <SectionCardDown>
                  <TextCardValue>{balanceBEET}</TextCardValue>
                </SectionCardDown>
              </SectionEachCard>
            </SectionValidatorInfo>
            <SectionValidatorInfo01>
              <SectionEachCard>
                <TextCardTitle>Staked With {dataValidator.name}</TextCardTitle>
                <SectionCardDown01>
                  <TextCardValue>{dataValidator.sizePool}</TextCardValue>
                  <TextRedelegate
                    onClick={() => {
                      handleCloseModal();
                    }}
                  >
                    Redelegate / Change Validator
                  </TextRedelegate>
                </SectionCardDown01>
              </SectionEachCard>
            </SectionValidatorInfo01>
          </SectionStakeInfo>

          <SectionStakeInfo>
            <TextStakeTitle text={"Stake"} />
            <SectionValidatorInfo01>
              <SectionEachCard>
                <SectionEachCardUp>
                  <TextCardTitle>Amount</TextCardTitle>
                  <TextCardTitle>Available : {balanceBEET} $BEET</TextCardTitle>
                </SectionEachCardUp>

                <SectionCardDown>
                  <InputAmountStake
                    component="input"
                    value={amountStake}
                    onChange={(e: any) => {
                      if (isNaN(e.target.value)) {
                        return NotificationManager.error(
                          "You should input number.",
                          "",
                          3000
                        );
                      }
                      setAmountStake(e.target.value);
                    }}
                  ></InputAmountStake>
                  <SectionStakeMax>
                    <ButtonMax onClick={() => handleSetMaxStake()}>
                      Max
                    </ButtonMax>
                    <TextCardValue>$BEET</TextCardValue>
                  </SectionStakeMax>
                </SectionCardDown>
              </SectionEachCard>
            </SectionValidatorInfo01>
          </SectionStakeInfo>
          <ButtonStake
            onClick={() => handleStake()}
            active={flagClickedStake ? true : false}
          >
            {!flagClickedStake ? (
              <TextStakeButton>Stake</TextStakeButton>
            ) : (
              <SectionProgressStake>
                <TextStakeButton>Processing</TextStakeButton>
                <SectionCircleProgress>
                  <Hourglass
                    colors={["#003624", "#003624"]}
                    width="100%"
                    height="100%"
                    radius="1"
                  />
                </SectionCircleProgress>
              </SectionProgressStake>
            )}
          </ButtonStake>
          <ButtonClose>
            <MdClose onClick={() => handleCloseModal()} />
          </ButtonClose>
        </ModalBoxInsideScroll>
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled(Box)`
  display: flex;
  width: 900px;
  height: 800px;
  flex-direction: column;
  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100000;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: #003d28;
  box-shadow: 0 0 10px #117754;
  padding: 60px 30px 60px 60px;
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

const TextCommission = styled(Box)`
  color: #a9d100;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  margin-top: 5px;
`;

const SectionValidatorInfo = styled(Box)`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 30px;
`;

const SectionValidatorInfo01 = styled(Box)`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr;
  margin-top: 30px;
`;

const SectionEachCard = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 16px;
  border: 1px solid #117754;
  background: #003624;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`;

const TextCardTitle = styled(Box)`
  color: #7cc2aa;
  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;

const TextCardValue = styled(Box)`
  color: #fff;
  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const InputAmountStake = styled(Box)`
  display: flex;
  flex: 1;
  margin-right: 50px;
  align-items: center;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const SectionCardDown = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const SectionCardDown01 = styled(Box)`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;

const ButtonClose = styled(Box)`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  color: #a9d100;

  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  &:hover {
    transform: rotate(90deg);
    /* color: #646464; */
  }

  &:active {
    transform: scale(0.8);
  }
`;

const IconLock = styled(Box)`
  display: flex;
  font-size: 40px;
  color: #a9d100;
`;

const SectionStakeInfo = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
`;

const TextRedelegate = styled(Box)`
  display: flex;
  margin-left: 60px;
  color: #a9d100;

  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-decoration-line: underline;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 4px #a9d100;
  }
`;

const ModalBoxInsideScroll = styled(Box)`
  display: flex;
  width: 100%;
  overflow-y: auto;
  flex-direction: column;
  padding: 0px 20px 0px 0px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: #dddddd;
    cursor: pointer;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00583a;
    border-radius: 3px;
  }
`;

const SectionEachCardUp = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionStakeMax = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonMax = styled(Box)`
  display: flex;
  width: fit-content;
  padding: 0px 8px;
  box-sizing: border-box;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #117754;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  color: #003624;

  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 60px;

  border-radius: 8px;
  border: 1px solid #117754;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  cursor: ${({ active }: any) => (active ? "not-allowed" : "pointer")};
  user-select: none;
  transition: 0.2s;
  &:hover {
    background-color: ${({ active }: any) => (active ? "none" : "white")};
    color: ${({ active }: any) => (active ? "none" : "#a9d100")};
  }
  &:active {
    transform: ${({ active }: any) => (active ? "none" : "scale(0.95)")};
  }
`;

const TextStakeButton = styled(Box)`
  color: #003624;

  text-align: center;
  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;

const SectionProgressStake = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionCircleProgress = styled(Box)`
  display: flex;
  margin-left: 10px;
  width: 25px;
`;

export default ModalStake;
