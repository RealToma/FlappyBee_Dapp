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
import {
  covertEthToWei,
  getAllBalance,
  shortFloat,
} from "../../libs/Functions";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { actionAddUser } from "../../actions/auth";

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
    setDatauser,
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

        actionAddUser(account).then((res) => {
          if (
            res.flagSuccess === "existed_user" ||
            res.flagSuceess === "new_user"
          ) {
            setDatauser(res.dataUser);
          }
        });
        NotificationManager.success(
          `Staked ${amountStake} BEET (+${shortFloat(
            amountStake / 300,
            1
          )} P2E Seesion Available). Please check your wallet.`,
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
        }, 2000);
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
                  {shortFloat(Number(dataValidator.sizePool), 2)} $BEET
                </TextCardValue>
                <IconLock>
                  <RiLock2Line />
                </IconLock>
              </SectionCardDown>
            </SectionEachCard>
            <SectionEachCard>
              <TextCardTitle>Esstimated Rewards</TextCardTitle>
              <SectionCardDown>
                <TextCardValue>
                  {shortFloat((12 / 100) * (100 - dataValidator.commission), 2)}{" "}
                  %
                </TextCardValue>
              </SectionCardDown>
            </SectionEachCard>
          </SectionValidatorInfo>
          <SectionStakeInfo>
            <TextStakeTitle text={"My BEET Staking"} />
            <SectionValidatorInfo>
              <SectionEachCard>
                <TextCardTitle>Total Staked</TextCardTitle>
                <SectionCardDown>
                  <TextCardValue>
                    {shortFloat(balanceBEETStaked, 2)} $BEET
                  </TextCardValue>
                </SectionCardDown>
              </SectionEachCard>
              <SectionEachCard>
                <TextCardTitle>Available in Wallet</TextCardTitle>
                <SectionCardDown>
                  <TextCardValue>
                    {shortFloat(balanceBEET, 2)} $BEET
                  </TextCardValue>
                </SectionCardDown>
              </SectionEachCard>
            </SectionValidatorInfo>
            <SectionValidatorInfo01>
              <SectionEachCard>
                <TextCardTitle>Staked With {dataValidator.name}</TextCardTitle>
                <SectionCardDown01>
                  <TextCardValue>
                    {shortFloat(Number(dataValidator.sizePool), 2)} $BEET ={" "}
                    {shortFloat(
                      Number(dataValidator.sizePool) *
                        (process.env.REACT_APP_PRICE_BEET_USD as any),
                      3
                    )}{" "}
                    USD
                  </TextCardValue>
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
                  <TextCardTitle>
                    Available : {shortFloat(balanceBEET, 2)} $BEET
                  </TextCardTitle>
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

  @media (max-width: 1600px) {
    width: 800px;
    height: 700px;
    padding: 55px 30px 50px 50px;
  }

  @media (max-width: 1440px) {
    width: 700px;
    height: 700px;
    padding: 40px 25px 40px 40px;
  }

  @media (max-width: 1024px) {
    width: 600px;
    height: 650px;
    padding: 40px 20px 30px 30px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 600px;
    padding: 35px 15px 30px 20px;
  }

  @media (max-width: 600px) {
    width: 400px;
    height: 550px;
    padding: 30px 10px 25px 15px;
  }

  @media (max-width: 430px) {
    width: 350px;
    height: 550px;
    padding: 30px 6px 20px 10px;
  }
  @media (max-width: 370px) {
    width: 300px;
    height: 550px;
  }
`;

const TextCommission = styled(Box)`
  color: #a9d100;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  margin-top: 5px;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1280px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const SectionValidatorInfo = styled(Box)`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    margin-top: 20px;
  }
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
  height: 100%;
  border-radius: 16px;
  border: 1px solid #117754;
  background: #003624;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 10px;
  }
  @media (max-width: 430px) {
    border-radius: 10px;
    padding: 7px;
  }
`;

const TextCardTitle = styled(Box)`
  color: #7cc2aa;
  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1280px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

const TextCardValue = styled(Box)`
  color: #fff;
  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1440px) {
    font-size: 25px;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
  }
  @media (max-width: 390px) {
    font-size: 15px;
  }
`;

const InputAmountStake = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
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

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1440px) {
    font-size: 25px;
  }
  @media (max-width: 1024px) {
    margin-right: 40px;
    font-size: 22px;
  }
  @media (max-width: 768px) {
    margin-right: 30px;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    margin-right: 20px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
    margin-right: 10px;
  }
  @media (max-width: 390px) {
    font-size: 15px;
  }
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

  @media (max-width: 1024px) {
    justify-content: space-between;
    /* flex-direction: column; */
    /* align-items: flex-start; */
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media (max-width: 1440px) {
    right: 18px;
    top: 10px;
    font-size: 28px;
  }
  @media (max-width: 1024px) {
    right: 15px;
    top: 10px;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    right: 10px;
    top: 5px;
    font-size: 23px;
  }
  @media (max-width: 430px) {
    right: 5px;
    top: 7px;
    font-size: 21px;
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

  @media (max-width: 1440px) {
    margin-top: 50px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
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

  @media (max-width: 1440px) {
    margin-left: 50px;
    font-size: 17px;
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 15px;
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
  @media (max-width: 1024px) {
    padding: 0px 15px 0px 0px;
  }
  @media (max-width: 768px) {
    padding: 0px 10px 0px 0px;
  }
  @media (max-width: 430px) {
    padding: 0px 8px 0px 0px;
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
  @media (max-width: 768px) {
    height: 25px;
    font-size: 16px;
    margin-right: 8px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    height: 23px;
    margin-right: 5px;
  }
`;

const ButtonStake = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
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

  @media (max-width: 1440px) {
    height: 58px;
    min-height: 58px;
  }
  @media (max-width: 768px) {
    height: 55px;
    min-height: 55px;
  }
  @media (max-width: 430px) {
    height: 50px;
    min-height: 50px;
  }
`;

const TextStakeButton = styled(Box)`
  color: #003624;

  text-align: center;
  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1280px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionProgressStake = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionCircleProgress = styled(Box)`
  display: flex;
  margin-left: 10px;
  width: 25px;

  @media (max-width: 768px) {
    width: 22px;
  }
  @media (max-width: 500px) {
    width: 20px;
  }
`;

export default ModalStake;
