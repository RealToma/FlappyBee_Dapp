import { Box } from "@mui/material";
import styled from "styled-components";
import imgUser02 from "../../assets/images/icons/user02.png";
import { shortAddress } from "../../libs/Functions";
import { useContext } from "react";
import { RefContext } from "../../libs/RefContext";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";

const CardFeaturedValidator = ({ data }: any) => {
  const { account } = useWeb3React();
  const { setFlagModalDelegate, setDataValidator }: any =
    useContext(RefContext);
  const handleDelegate = () => {
    if (account === undefined || account === null) {
      return NotificationManager.warning("Connect your wallet.", "", 3000);
    }
    setDataValidator(data);
    setFlagModalDelegate(true);
  };

  return (
    <StyledComponent>
      <SectionUp>
        <SectionUserDetail>
          <IconUser>
            <img src={imgUser02} width={"100%"} alt="user" />
          </IconUser>
          <SectionUserInfo>
            <TextUsername>{data.name}</TextUsername>
            <TextAddressWallet>
              {shortAddress(data.addressWallet)}
            </TextAddressWallet>
          </SectionUserInfo>
        </SectionUserDetail>
        <TextCommission>{data.commission}% commission</TextCommission>
      </SectionUp>
      <SectionDown>
        <SectionPoolSize>
          <TextPoolTitle>Validator Pool size</TextPoolTitle>
          <TextPoolValue>{data.sizePool}</TextPoolValue>
        </SectionPoolSize>
        <ButtonDelegate
          onClick={() => {
            handleDelegate();
          }}
        >
          Delegate
        </ButtonDelegate>
      </SectionDown>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #117754;
  background: #003624;
  padding: 30px;
  box-sizing: border-box;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5));
  }

  @media (max-width: 1440px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    border-radius: 12px;
  }
  @media (max-width: 430px) {
    padding: 15px;
    border-radius: 10px;
  }
`;

const SectionUp = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionUserDetail = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextCommission = styled(Box)`
  color: #7cc2aa;
  text-align: right;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 1440px) {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const IconUser = styled(Box)`
  display: flex;
  width: 80px;
  aspect-ratio: 1;

  @media (max-width: 1440px) {
    width: 75px;
  }
  @media (max-width: 1280px) {
    width: 70px;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 430px) {
    width: 50px;
  }
  @media (max-width: 390px) {
    width: 40px;
  }
`;

const SectionUserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  @media (max-width: 1280px) {
    margin-left: 10px;
  }
  @media (max-width: 390px) {
    margin-left: 5px;
  }
`;

const TextUsername = styled(Box)`
  color: #fff;
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
`;

const TextAddressWallet = styled(Box)`
  color: #7cc2aa;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  margin-top: 5px;

  @media (max-width: 1440px) {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const SectionDown = styled(Box)`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1440px) {
    margin-top: 35px;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

const SectionPoolSize = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextPoolTitle = styled(Box)`
  display: flex;
  color: #fff;
  font-family: Rowdies;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;

  margin-bottom: 5px;

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

const TextPoolValue = styled(Box)`
  display: flex;
  color: #7cc2aa;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
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

const ButtonDelegate = styled(Box)`
  display: flex;
  width: 125px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #117754;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  color: #003624;

  text-align: center;
  font-family: Rowdies;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

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

  @media (max-width: 1440px) {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    width: 110px;
    height: 43px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    width: 100px;
    height: 40px;
  }
`;

export default CardFeaturedValidator;
