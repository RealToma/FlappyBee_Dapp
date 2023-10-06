import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackClaim from "../../assets/images/background/bgAirdrop.png";
import { textFreeMintRules } from "../../data/FreeMint";

const FreeMint = () => {
  return (
    <StyledComponent>
      <SectionClaim>
        <TextAirdrop>Free Mint Event</TextAirdrop>
      </SectionClaim>
      <SectionDescription>
        <TextHead data-aos="fade-up" data-aos-duration="2000">
          You can earn free $BEET by playing FlappyBee game during FREE MINT
          event!
          <br />
          <br />
          Before proceeding, please ensure you have completed the required
          procedure at: {"\u00a0"}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgIPmSSBnBAmXdjkygjtzCOmxS2hTummJg85YkZz-KC-CRTA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            https://docs.google.com/forms/d/e/1FAIpQLSdgIPmSSBnBAmXdjkygjtzCOmxS2hTummJg85YkZz-KC-CRTA/viewform
          </a>
          {"\u00a0"}
          for full participation.
        </TextHead>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          Kindly review the following rules carefully to earn FREE $BEET:
        </TextHeadGuide>
        <SectionGuide data-aos="fade-up" data-aos-duration="2000">
          <TextEachGuide>
            1. Visit{" "}
            <a
              href="https://flappybee.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              flappybee.com
            </a>
            <br />
            2. Connect your wallet.
            <br />
            3. Ensure you have selected the Goerli network (for instructions on
            switching to Goerli, please refer to :{"\u00a0"}
            <a
              href="https://flappybee.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              https://medium.com/@gezimosmanii/a-simple-guide-to-adding-goerli-testnet-to-your-metamask-wallet-2023-step-by-step-guide-ce34b70e3125
            </a>
            )
            <br />
            4. Play the game and record your score on Goerli network.
            <br />
            5. Your score multiplied by 10%will determine your reward on the
            mainnet. For instance, if you score 100 $BEET on the testnet, you
            will be eligible to claim 10 $BEET on the mainnet.
            <br />
            6. Tokens will be claimable on mainnet once the FREE MINT session
            concludes.
          </TextEachGuide>
        </SectionGuide>

        <TextHead>
          Thank you for participating in our event, and good luck!
        </TextHead>
        <br />
        <br />
        <br />
        <br />
        <br />
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
  padding: 230px 0px;
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

  margin-top: 80px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 50px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    line-height: 35px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
    line-height: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 20px;
    line-height: 25px;
  }
`;

const TextHeadGuide = styled(Box)`
  color: #fff;
  text-align: center;
  font-family: Rowdies;
  font-size: 4em;
  font-style: normal;
  font-weight: 400;
  line-height: 75px;

  margin-top: 120px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 100px;
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    line-height: 60px;
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
    line-height: 50px;
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
  font-size: 3em;
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

export default FreeMint;
