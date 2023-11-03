import { Box } from "@mui/material";
import styled from "styled-components";
import imgBee from "../../assets/images/bee/flaying/Bee-01.png";
// import imgCoin from "../../assets/images/icons/coinReward.png";
import imgChecked from "../../assets/images/icons/checkReward.png";
import imgButtonHome from "../../assets/images/buttons/GreenWide.svg";

const Rewards = () => {
  const claimed = 2;

  return (
    <StyledComponent>
      <TextTitle>DAILY REWARDS</TextTitle>
      <TextDescription>
        Play everyday to get 50 Flappy Bee tokens on day 7
      </TextDescription>
      <SectionSelectRewards>
        <SectionScroll>
          {new Array(7).fill(0).map((each: any, index: any) => {
            const _key = index;
            if (index < claimed) {
              // console.log("index:", index);
              return (
                <SectionEachClaimedReward
                  key={_key}
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <TextClaimedDay>Day {index + 1}</TextClaimedDay>
                  <ImageCoin>
                    <img src={imgBee} width={"60%"} alt="" />
                    <ImageChecked>
                      <img src={imgChecked} width={"100%"} alt="" />
                    </ImageChecked>
                  </ImageCoin>
                  <SectionValue>{10 * (index + 1)} BEET</SectionValue>
                </SectionEachClaimedReward>
              );
            } else if (index === claimed) {
              // console.log("index:", index);
              return (
                <SectionEachReward
                  key={_key}
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <TextDay>Day {index + 1}</TextDay>
                  <ImageCoin>
                    <img src={imgBee} width={"60%"} alt="" />
                  </ImageCoin>
                  <SectionValue>{10 * (index + 1)} BEET</SectionValue>
                </SectionEachReward>
              );
            } else {
              // console.log("index:", index);
              return (
                <SectionEachReward
                  key={_key}
                  style={{ opacity: "0.4", cursor: "not-allowed" }}
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <TextDay>Day {index + 1}</TextDay>
                  <ImageCoin>
                    <img src={imgBee} width={"60%"} alt="" />
                  </ImageCoin>
                  <SectionValue>{10 * (index + 1)} BEET</SectionValue>
                </SectionEachReward>
              );
            }
          })}
        </SectionScroll>
      </SectionSelectRewards>
      <ButtonClaim>Claim</ButtonClaim>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #003d28;
  align-items: center;
  padding: 0px 150px;
  box-sizing: border-box;

  transition: 0.3s;
  @media (max-width: 1600px) {
    padding: 0px 100px;
  }
  @media (max-width: 1440px) {
    padding: 0px 60px;
  }
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 390px) {
    padding: 0px 15px;
  }
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 100px;

  margin-top: 70px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    line-height: unset;
    margin-top: 50px;
  }
`;

const TextDescription = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-family: Lato;
  font-weight: 500;
  line-height: 50px;

  @media (max-width: 768px) {
    line-height: unset;
    margin-top: 30px;
  }
`;

const SectionSelectRewards = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 120px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 390px) {
    margin-top: 60px;
  }
`;

const SectionScroll = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 25px;
  align-items: center;
  padding-bottom: 30px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 15px !important;
    height: 15px !important;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 6px !important;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #511900; // #ec8424
    border-radius: 4px !important;
  }
`;

const SectionEachReward = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 30px 45px;
  box-sizing: border-box;
  background: #fff;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(255, 153, 0, 1), rgba(216, 32, 5, 1))
      border-box;
  border-radius: 10px;
  border: 8px solid transparent;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 20px 30px;
  }
  @media (max-width: 768px) {
    border: 6px solid transparent;
    padding: 15px 20px;
  }
  @media (max-width: 390px) {
    padding: 10px 15px;
    border: 4px solid transparent;
  }
`;

const TextDay = styled(Box)`
  color: #511900;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  line-height: 50px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 40px;
  }
  @media (max-width: 768px) {
    line-height: 20px;
  }
  @media (max-width: 390px) {
    line-height: 10px;
  }
`;

const SectionEachClaimedReward = styled(Box)`
  display: flex;
  flex: 1;
  /* width: 250px; */
  flex-direction: column;
  align-items: center;
  padding: 30px 45px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 8px solid #fff;
  background: var(--color-1, linear-gradient(180deg, #f90 0%, #d82005 100%));

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 20px 30px;
  }
  @media (max-width: 768px) {
    border: 6px solid #fff;
    padding: 15px 20px;
  }
  @media (max-width: 390px) {
    padding: 10px 15px;
    border: 4px solid #fff;
  }
`;

const TextClaimedDay = styled(Box)`
  color: white;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  line-height: 50px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 40px;
  }
  @media (max-width: 768px) {
    line-height: 20px;
  }
  @media (max-width: 390px) {
    line-height: 10px;
  }
`;

const ImageCoin = styled(Box)`
  display: flex;
  position: relative;
  width: 120px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #fdc400;
  margin-top: 30px;
  margin-bottom: 20px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 15px;
    width: 80px;
  }
  @media (max-width: 390px) {
    width: 60px;
  }
`;

const ImageChecked = styled(Box)`
  display: flex;
  position: absolute;
  width: 80px;
  left: 50%;
  bottom: 10%;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
    width: 50px;
  }
  @media (max-width: 390px) {
    width: 40px;
  }
`;

const SectionValue = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  border-radius: 99px;
  background: #511900;
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-family: Rowdies;
  line-height: 40px;
  margin-top: 10px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 130px;
    height: 40px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    margin-top: 5px;
  }
  @media (max-width: 390px) {
    width: 80px;
    height: 25px;
  }
`;

const ButtonClaim = styled(Box)`
  display: flex;
  width: 470px;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #511900;
  text-align: center;
  font-size: 5em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 65px;

  background-image: url(${imgButtonHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: white;
    text-shadow: 0px 0px 12px white;
  }
  margin: 100px 0px;

  transition: all 0.2s;
  @media (max-width: 1440px) {
    width: 420px;
    height: 85px;
    margin: 80px 0px;
  }
  @media (max-width: 1024px) {
    width: 370px;
    height: 70px;
    margin: 60px 0px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 60px;
  }
`;

export default Rewards;
