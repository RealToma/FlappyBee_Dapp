import styled from "styled-components";
import { Box } from "@mui/material";
import imgBackSky from "../../assets/images/background/backSky.png";
import imgBee from "../../assets/images/bee/Bee01.png";

const AboutUs = () => {
  return (
    <StyledComponent>
      <SectionLeft data-aos="fade-right" data-aos-duration="2000">
        <TextAboutUs>About us</TextAboutUs>
        <TextDescriptionEach>
          FlappyBee combines the game charm of "Flappy Bird" with cutting-edge
          Web3 blockchain tech. Join Flappy, the heroic bee, on a daring mission
          to save the queen. As a player, you're the wind beneath Flappy's
          wings.
        </TextDescriptionEach>
        <TextDescriptionEach>
          Our gameplay mechanics and storyline promise great adventures. Flap
          through obstacles, collect NFTs, tokens, and customize your journey
          with the NFT. Compete on leaderboards but remember, the queen trusts
          you to protect her.
        </TextDescriptionEach>
        <TextDescriptionEach>
          Blockchain integration ensures transparency and security. BEET tokens
          fuel your journey, making transactions, rewards, and staking a
          seamless. NFTs let you showcase your achievements and for more
          optimise customisation.
        </TextDescriptionEach>

        <TextDescriptionEach>
          FlappyBee is more than a game; it's also an extra layer of economic
          opportunity. Your playing skills translate into success. Join a
          vibrant community of blockchain gaming enthusiasts.
        </TextDescriptionEach>

        <TextDescriptionEach>
          It's time to Embrace this exciting journey with Flappy. Help Flappy
          rescue the queen and discover the world of FlappyBee. The future of
          gaming is here. Let's fly together!
        </TextDescriptionEach>
      </SectionLeft>
      <SectionRight data-aos="fade-left" data-aos-duration="2000">
        <SectionImageBee>
          <ImageBee>
            <img src={imgBee} width={"100%"} alt="" />
          </ImageBee>
        </SectionImageBee>
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 100px 120px;
  box-sizing: border-box;
  background: rgba(0, 61, 40, 1);

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 80px 90px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 70px 70px;
  }
  @media (max-width: 1024px) {
    padding: 60px 60px;
  }
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
  @media (max-width: 500px) {
    padding: 40px 30px;
  }
  @media (max-width: 390px) {
    /* padding: 30px 20px; */
  }
  @media (max-width: 350px) {
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-right: 120px;

  transition: 0.3s;
  @media (max-width: 1600px) {
    margin-right: 100px;
  }
  @media (max-width: 1440px) {
    margin-right: 60px;
  }
  @media (max-width: 1024px) {
    margin-right: unset;
  }
  @media (max-width: 768px) {
    /* margin-right: 40px; */
  }
  @media (max-width: 700px) {
  }
`;

const TextAboutUs = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 8em;
  font-family: Rowdies;
  /* line-height: 110px; */
`;

const TextDescriptionEach = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 2.5em;
  font-family: Lato;
  line-height: 40px;
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    line-height: 20px;
  }
  @media (max-width: 390px) {
    margin-top: 16px;
    line-height: 20px;
    font-size: 14px;
  }
`;

// const TextDescriptionAddress = styled(Box)`
//   display: flex;
//   width: 100%;
//   color: #fff;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;
//   margin-top: 40px;
//   word-break: break-all;

//   transition: 0.3s;
//   @media (max-width: 1440px) {
//     margin-top: 30px;
//   }
//   @media (max-width: 768px) {
//     margin-top: 20px;
//     line-height: 20px;
//   }
//   @media (max-width: 390px) {
//     margin-top: 10px;
//     line-height: 10px;
//   }
// `;

const SectionRight = styled(Box)`
  display: flex;
  width: 600px;
  min-width: 600px;

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 550px;
    min-width: 550px;
  }
  @media (max-width: 1440px) {
    width: 460px;
    min-width: 460px;
  }
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    width: 400px;
    min-width: 400px;
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    width: 260px;
    min-width: 260px;
  }
  @media (max-width: 700px) {
  }
`;

const SectionImageBee = styled(Box)`
  display: flex;
  width: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-image: url(${imgBackSky});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageBee = styled(Box)`
  /* width: 304px; */
  width: 70%;
`;

export default AboutUs;
