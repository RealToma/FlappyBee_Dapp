import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { textModalPlayToEarn } from "../../data/PlayToEarn";
import { RiCloseCircleFill } from "react-icons/ri";

const ModalPlayToEarn = ({ flagModalP2E, setFlagModalP2E }: any) => {
  const handleClose = () => setFlagModalP2E(false);

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
    // <StyledComponent>
    //   <SectionBoard>123</SectionBoard>
    // </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 10000 !important;
  flex-direction: column;
`;

const SectionBoard = styled(Box)`
  display: flex;
  width: 650px;
  background: #fff;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(255, 153, 0, 1), rgba(216, 32, 5, 1))
      border-box;
  border-radius: 20px;
  border: 12px solid transparent;
  margin-top: 30px;

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 600px;
    margin-top: 20px;
  }
  @media (max-width: 1440px) {
    width: 550px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    width: 500px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 390px) {
    width: 320px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

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

const ButtonClose = styled(Box)`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: #511900;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    font-size: 35px;
  }
  @media (max-width: 500px) {
    top: 12px;
    right: 12px;
    font-size: 30px;
  }
`;

export default ModalPlayToEarn;
