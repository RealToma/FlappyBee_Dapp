import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { textModalPlayToEarn } from "../../data/PlayToEarn";
import { RiCloseCircleFill } from "react-icons/ri";
import {
  MdOutlineRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { useState } from "react";
import imgButtonPlay from "../../assets/images/buttons/HomeWide.png";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";
import { actionGetCountP2EAvailable } from "../../actions/auth";
// import { actionGetFreeMintCount } from "../../actions/freeMint";
import { useNavigate } from "react-router-dom";

const ModalPlayToEarn = ({ flagModalP2E, setFlagModalP2E }: any) => {
  const navigate = useNavigate();
  const { account } = useWeb3React();

  const handleClose = () => setFlagModalP2E(false);
  const [flagAcknowledge, setFlagAcknowledge] = useState(false);

  const handleCheckStakedBEET = () => {};

  const handleStart = () => {
    if (!flagAcknowledge) {
      return;
    }
    if (account === undefined || account === null) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    }

    actionGetCountP2EAvailable(account).then((res1) => {
      if (res1.flagSuccess) {
        if (Math.floor(res1.count) < 1) {
          return NotificationManager.warning(
            `You need to stake ${process.env.REACT_APP_AMOUNT_STAKE_DEFAULT} BEET to play games.`,
            "",
            5000
          );
        } else {
          navigate("/game", {
            state: { flagAcknowledge: flagAcknowledge, typeGame: "p2e" },
          });
        }
      } else {
        return NotificationManager.warning(res1.msgError, "", 5000);
      }
    });
    // checkWhiteList(account).then((res) => {
    //   if (res.flagSuccess) {
    //     actionGetFreeMintCount(account).then((res1) => {
    //       if (res1.flagSuccess) {
    //         if (res1.count >= 3) {
    //           return NotificationManager.warning(
    //             "You can't play anymore. Your free mint event has expired.",
    //             "",
    //             5000
    //           );
    //         } else {
    //           navigate("/game", {
    //             state: { flagAcknowledge: flagAcknowledge, typeGame: "p2e" },
    //           });
    //         }
    //       } else {
    //         return NotificationManager.warning(res1.msgError, "", 5000);
    //       }
    //     });
    //     // window.open("https://app.flappybee.com/#/game", "_self");
    //     return;
    //   } else {
    //     return NotificationManager.warning(
    //       "Oops....  it seems this address is not whitelisted. Please make sure to connect with a whitelisted address",
    //       // "You are not whitelisted!",
    //       "",
    //       5000
    //     );
    //   }
    // });
  };

  return (
    <Modal
      open={flagModalP2E}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // BackdropComponent={backdropstyled}
    >
      <ModalBox>
        <SectionInsideBoard>
          <TextTitle>Play to earn</TextTitle>
          {textModalPlayToEarn.map((each, index) => {
            return (
              <SectionEachContent key={index}>
                <TextHead>{each.textHead}</TextHead>
                {each.textBody.map((each) => {
                  return <TextBody>{each}</TextBody>;
                })}
              </SectionEachContent>
            );
          })}
          <SectionAcknowledge
            onClick={() => {
              setFlagAcknowledge(!flagAcknowledge);
            }}
          >
            <ButtonCheck>
              {!flagAcknowledge ? (
                <MdOutlineRadioButtonUnchecked />
              ) : (
                <MdRadioButtonChecked />
              )}
            </ButtonCheck>
            <TextAcknowledge>
              I acknowledge & accept Requirements, Rules & Rewards Calculation
            </TextAcknowledge>
          </SectionAcknowledge>
          <ButtonPlay
            active={flagAcknowledge ? 1 : 0}
            onClick={() => handleStart()}
          >
            Start
          </ButtonPlay>
        </SectionInsideBoard>

        <ButtonClose
          onClick={() => {
            handleClose();
          }}
        >
          <RiCloseCircleFill />
        </ButtonClose>
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled(Box)`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  background: #fff;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(255, 153, 0, 1), rgba(216, 32, 5, 1))
      border-box;
  border-radius: 20px;
  border: 12px solid transparent;

  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  z-index: 9999 !important;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 1600px) {
    width: 650px;
  }
  @media (max-width: 1440px) {
    width: 580px;
  }
  @media (max-width: 768px) {
    width: 520px;
  }
  @media (max-width: 600px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 360px;
  }
  @media (max-width: 390px) {
    width: 330px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

const SectionInsideBoard = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 8px;
  border: 5px solid #511900;
  background: linear-gradient(150deg, #fff6d7 9.83%, #fbdf8b 97.33%);

  /* background: radial-gradient(50% 50% at 50% 50%, #fce9d5 0%, #fad6b0 100%); */
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 25px;
    border: 4px solid #511900;
  }
  @media (max-width: 768px) {
    padding: 20px;
    border: 4px solid #511900;
  }
  @media (max-width: 500px) {
    padding: 15px;
    border: 3px solid #511900;
  }
`;

const TextTitle = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #511900;
  font-family: Rowdies;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;

  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const SectionEachContent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 35px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 25px;
  }
`;

const SectionAcknowledge = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 35px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 25px;
  }
`;

const TextHead = styled(Box)`
  color: #511900;
  font-family: Rowdies;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;

  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextBody = styled(Box)`
  color: #511900;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-top: 8px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TextAcknowledge = styled(Box)`
  display: flex;
  color: #511900;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ButtonClose = styled(Box)`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 35px;
  color: #511900;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    font-size: 30px;
  }
  @media (max-width: 500px) {
    top: 12px;
    right: 12px;
    font-size: 25px;
  }
`;

const ButtonCheck = styled(Box)`
  display: flex;
  margin-right: 5px;
  /* width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 2px solid #511900; */
  font-size: 20px;
  color: #511900;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonPlay = styled(Box)`
  display: flex;
  width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: #511900;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 65px;
  opacity: ${({ active }: any) => (active ? "1" : "0.6")};

  background-image: url(${imgButtonPlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: ${({ active }: any) => (active ? "pointer" : "not-allowed")};
  user-select: none;
  transition: 0.3s;
  &:active {
    transform: ${({ active }: any) => (active ? "scale(0.9)" : "unset")};
  }
  &:hover {
    color: ${({ active }: any) => (active ? "white" : "#511900")};
    text-shadow: ${({ active }: any) =>
      active ? "0px 0px 12px white" : "unset"};
  }

  margin-top: 40px;
  margin-bottom: 10px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 190px;
    height: 55px;
    margin-top: 35px;
  }
  @media (max-width: 1024px) {
    width: 180px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 45px;
    margin-top: 30px;
  }

  @media (max-width: 500px) {
    width: 120px;
    height: 40px;
    margin-top: 25px;
  }
`;

export default ModalPlayToEarn;
