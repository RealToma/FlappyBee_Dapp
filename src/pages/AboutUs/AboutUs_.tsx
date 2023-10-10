import { Box } from "@mui/material";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <StyledComponent>
      <SectionLeft>
        <TextTitle>About us</TextTitle>
        <TextContent>
          FlappyBee combines the game charm of "Flappy Bird" with cutting-edge
          Web3 blockchain tech. Join Flappy, the heroic bee, on a daring mission
          to save the queen. As a player, you're the wind beneath Flappy's
          wings.
          <br />
          <br />
          Our gameplay mechanics and storyline promise great adventures. Flap
          through obstacles, collect NFTs, tokens, and customize your journey
          with the NFT. Compete on leaderboards but remember, the queen trusts
          you to protect her.
          <br />
          <br />
          Blockchain integration ensures transparency and security. BEET tokens
          fuel your journey, making transactions, rewards, and staking a
          seamless. NFTs let you showcase your achievements and for more
          optimize customization.
          <br />
          <br />
          FlappyBee is more than a game; it's also an extra layer of economic
          opportunity. Your playing skills translate into success. Join a
          vibrant community of blockchain gaming enthusiasts.
          <br />
          <br />
          It's time to Embrace this exciting journey with Flappy. Help Flappy
          rescue the queen and discover the world of FlappyBee. The future of
          gaming is here. Let's fly together!
        </TextContent>
      </SectionLeft>

      <SectionRight></SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 61, 40, 1);
  padding: 100px 150px;
  box-sizing: border-box;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 80px 120px;
  }
  @media (max-width: 1024px) {
    padding: 60px 100px;
  }
  @media (max-width: 768px) {
    padding: 50px 80px;
  }
  @media (max-width: 390px) {
    padding: 40px 60px;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 150px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-right: 120px;
  }
  @media (max-width: 1024px) {
    margin-right: 100px;
  }
  @media (max-width: 768px) {
    margin-right: 100px;
  }
  @media (max-width: 390px) {
    margin-right: 100px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  flex: 1;
`;

const TextTitle = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6rem;
  transition: 0.3s;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 390px) {
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 56px;
`;

const TextContent = styled(Box)`
  color: #fff;
  font-family: Lato;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.4rem;
  margin-top: 30px;

  transition: 0.3s;
  @media (max-width: 390px) {
    font-size: 12px;
  }
`;

const TextFooter = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4rem;
  margin-bottom: 60px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    margin-bottom: 25px;
  }
  @media (max-width: 390px) {
    margin-bottom: 20px;
  }
`;

export default AboutUs;
