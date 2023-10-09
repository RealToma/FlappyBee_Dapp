import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackClaim from "../../assets/images/background/bgAirdrop.png";
import imgAirdropBee from "../../assets/images/bee/airdrop.png";
// import { textFreeMintRules } from "../../data/FreeMint";

const ClaimRewards = () => {
  return (
    <StyledComponent>
      <SectionClaim>
        <TextAirdrop>Claim Rewards</TextAirdrop>
      </SectionClaim>
      <SectionDescription>
        <SectionImageGroup>
          <ImageLeft>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageLeft>
          <ImageRight>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageRight>
          <img src={imgAirdropBee} width={"100%"} alt="" />
        </SectionImageGroup>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          0.345 BEET
        </TextHeadGuide>
        <TextHead data-aos="fade-up" data-aos-duration="2000">
          You are eligible to claim up to:
        </TextHead>
      </SectionDescription>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 61, 40, 1);
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
  padding: 150px 0px;
  box-sizing: border-box;

  /* box-shadow: inset 0px 0px 20px 0px #666666; */

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 200px 0px;
  }
  @media (max-width: 1200px) {
    padding: 150px 0px;
  }
  @media (max-width: 1200px) {
    padding: 120px 0px;
  }
  @media (max-width: 768px) {
    padding: 100px 0px;
  }
  @media (max-width: 500px) {
    padding: 70px 0px;
  }
  @media (max-width: 390px) {
    padding: 50px 0px;
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

const SectionDescription = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  padding: 50px 330px;
  box-sizing: border-box;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 50px 180px;
  }
  @media (max-width: 1024px) {
    padding: 40px 120px;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding: 30px 60px;
    margin-bottom: 70px;
  }
  @media (max-width: 500px) {
    padding: 25px 40px;
    margin-bottom: 50px;
  }
  @media (max-width: 390px) {
    padding: 20px 30px;
    margin-bottom: 30px;
  }
`;

const TextHead = styled(Box)`
  /* display: flex; */
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 3em;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  text-align: center;
  word-break: break-word;

  margin-top: 30px;
  transition: 0.3s;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
    margin-top: 25px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    line-height: 35px;
  }
  @media (max-width: 500px) {
    line-height: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 10px;
    line-height: 25px;
  }
`;

const TextHeadGuide = styled(Box)`
  color: #fff;
  text-align: center;
  font-family: Rowdies;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;

  margin-top: 70px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    line-height: 35px;
    margin-top: 50px;
  }
  @media (max-width: 500px) {
    margin-top: 40px;
    line-height: 30px;
  }
`;

const SectionGuide = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 20px;
  }
`;

const TextEachGuide = styled(Box)`
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 2.5em;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 60px;

  margin-top: 20px;

  transition: 0.3s;
  @media (max-width: 768px) {
    margin-top: 16px;
    line-height: 50px;
  }
  @media (max-width: 390px) {
    margin-top: 12px;
    line-height: 30px;
  }
`;

const SectionImageGroup = styled(Box)`
  display: flex;
  position: relative;
  width: 250px;
  aspect-ratio: 1;
  margin-top: 30px;
  > img {
    filter: drop-shadow(0px 0px 12px black);
  }
  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
    width: 192px;
  }
  @media (max-width: 500px) {
    width: 150px;
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    width: 120px;
  }

  > img {
    z-index: 100;
  }
`;

const ImageLeft = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  right: 180px;
  transform: translateY(-50%);
  width: 250px;
  aspect-ratio: 1;
  > img {
    z-index: 99;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
    right: 160px;
  }
  @media (max-width: 768px) {
    width: 192px;
    right: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
    right: 120px;
  }
  @media (max-width: 390px) {
    width: 120px;
    right: 90px;
  }
`;

const ImageRight = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 180px;
  transform: translateY(-50%);
  width: 250px;
  aspect-ratio: 1;
  > img {
    z-index: 98;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
    left: 160px;
  }
  @media (max-width: 768px) {
    width: 192px;
    left: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
    left: 120px;
  }
  @media (max-width: 390px) {
    width: 120px;
    left: 90px;
  }
`;

export default ClaimRewards;
