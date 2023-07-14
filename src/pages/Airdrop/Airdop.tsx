import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackClaim from "../../assets/images/background/bgAirdrop.png";
import imgButtonStart from "../../assets/images/buttons/HomeWide.png";

const Airdrop = () => {
  return (
    <StyledComponent>
      <SectionClaim>
        <TextAirdrop>Flappy Bee Airdrop</TextAirdrop>
        <ButtonStart onClick={() => {}}>Claim $BEET</ButtonStart>
      </SectionClaim>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SectionClaim = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-image: url(${imgBackClaim});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 125px 0px;
  box-sizing: border-box;

  box-shadow: inset 0px 0px 30px 10px #666666;

  transition: 0.3s;
  @media (max-width: 1200px) {
    padding: 80px 0px;
  }
  @media (max-width: 768px) {
    padding: 60px 0px;
    box-shadow: inset 0px 0px 20px 8px #666666;
  }
  @media (max-width: 390px) {
    padding: 40px 0px;
    box-shadow: inset 0px 0px 10px 6px #666666;
  }
`;

const TextAirdrop = styled(Box)`
  color: #38150a;
  text-align: center;
  font-family: "Wendy One";
  font-size: 12em;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  -webkit-text-stroke: 3px white;

  transition: 0.3s;
  @media (max-width: 390px) {
    -webkit-text-stroke: 2px white;
  }
`;

const ButtonStart = styled(Box)`
  display: flex;
  width: 600px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonStart});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 400;
  font-size: 6em;
  margin-top: 125px;

  /* identical to box height, or 129% */

  text-align: center;

  color: #511900;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 500px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
    width: 400px;
    height: 93px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    width: 370px;
    height: 85px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 66px;
    margin-top: 40px;
  }
  @media (max-width: 390px) {
    width: 260px;
    height: 66px;
  }
`;

export default Airdrop;
