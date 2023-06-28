import { Box } from "@mui/material";
import styled from "styled-components";
import imgCoin from "../../assets/images/icons/coinReward.png";

const Rewards = () => {
  const claimed = 4;

  return (
    <StyledComponent>
      <TextTitle>DAILY REWARDS</TextTitle>
      <TextDescription>
        Play everyday to get 50 Flappy bee tokens on day 7
      </TextDescription>
      <SectionSelectRewards>
        <SectionEachReward>
          <TextDay>Day 1</TextDay>
          <ImageCoin>
            <img src={imgCoin} width={"100%"} alt="" />
          </ImageCoin>
        </SectionEachReward>
      </SectionSelectRewards>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #003d28;
  align-items: center;
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 100px;

  margin-top: 70px;
`;

const TextDescription = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-family: Lato;
  font-weight: 500;
  line-height: 50px;
`;

const SectionSelectRewards = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 150px;
  box-sizing: border-box;
  margin-top: 120px;
  align-items: center;
`;

const SectionEachReward = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 30px 45px;
  box-sizing: border-box;
  background: #fff;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, rgba(255, 153, 0, 1), rgba(216, 32, 5, 1))
      border-box;
  border-radius: 10px;
  border: 4px solid transparent;

  cursor: pointer;
  user-select: none;
`;

const TextDay = styled(Box)`
  color: #511900;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  line-height: 50px;
`;

const ImageCoin = styled(Box)`
  width: 120px;
`;

export default Rewards;
