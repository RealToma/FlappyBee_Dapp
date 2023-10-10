import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackClaim from "../../assets/images/background/bgAirdrop.png";
// import imgAirdropBee from "../../assets/images/bee/airdrop.png";
import imgCoinsRewards from "../../assets/images/icons/coins.png";
import Snowfall from "react-snowfall";
import imgButtonStart from "../../assets/images/buttons/HomeWide.png";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";
import { actionGetUserClaimScore } from "../../actions/score";
// import { textFreeMintRules } from "../../data/FreeMint";

const ClaimRewards = () => {
  const imgParachute01 = document.createElement("img");
  imgParachute01.src = "/assets/images/icons/parachutes01.png";
  const imagesParachute: any = [imgParachute01];
  const { account } = useWeb3React();
  const [amountClaim, setAmountClaim] = useState(0);

  useEffect(() => {
    if (account === undefined || account === null) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    }
    actionGetUserClaimScore(account).then((res) => {
      if (res.flagSuccess) {
        setAmountClaim(res.dataClaimScore.totalScore);
      } else {
        return NotificationManager.error(res.msgError, "", 5000);
      }
    });
  }, [account]);

  return (
    <StyledComponent>
      {/* <SectionClaim>
        <TextAirdrop>Claim Rewards</TextAirdrop>
        <SectionDropEffect>
          <Snowfall
            snowflakeCount={window.innerWidth < 768 ? 10 : 20}
            images={imagesParachute}
            wind={[-0.5, 0.5]}
            rotationSpeed={[-0.2, 0.2]}
            radius={window.innerWidth < 768 ? [40, 100] : [60, 150]}
          />
        </SectionDropEffect>
      </SectionClaim> */}
      <SectionDescription>
        <SectionImageGroup data-aos="fade-down" data-aos-duration="1000">
          {/* <ImageLeft>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageLeft>
          <ImageRight>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageRight> */}
          <img src={imgCoinsRewards} width={"100%"} alt="" />
        </SectionImageGroup>
        <TextHead data-aos="zoom-in" data-aos-duration="1000">
          You are eligible to claim up to:
        </TextHead>
        <TextHeadGuide data-aos="fade-up" data-aos-duration="2000">
          {amountClaim * (process.env.REACT_APP_CLAIM_RATE as any)} BEET
        </TextHeadGuide>

        <ButtonStart
          onClick={() => {}}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Claim $BEET
        </ButtonStart>
        <TextSmall data-aos="fade-up" data-aos-duration="2000">
          🥳 BEET will soon be claimable🥳
        </TextSmall>
        <SectionNotify data-aos="fade-up" data-aos-duration="2000">
          <TextHead>Notify me when $BEET goes mainnet:</TextHead>
          <SectionInputEmail>
            <InputEmail
              component="input"
              placeholder="example@gmail.com"
            ></InputEmail>
          </SectionInputEmail>
          <ButtonSubmit>Submit</ButtonSubmit>
        </SectionNotify>
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
  position: relative;
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
  z-index: 100;
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

  margin-top: 70px;
  transition: 0.3s;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    line-height: 35px;
  }
  @media (max-width: 500px) {
    margin-top: 40px;
    line-height: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 30px;
    line-height: 25px;
  }
`;

const TextSmall = styled(Box)`
  /* display: flex; */
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 2.6em;
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

  margin-top: 20px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    line-height: 35px;
  }
  @media (max-width: 500px) {
    margin-top: 10px;
    line-height: 30px;
  }
`;

// const SectionGuide = styled(Box)`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   margin-top: 40px;

//   transition: 0.3s;
//   @media (max-width: 768px) {
//     margin-top: 30px;
//   }
//   @media (max-width: 390px) {
//     margin-top: 20px;
//   }
// `;

// const TextEachGuide = styled(Box)`
//   width: 100%;
//   color: #fff;
//   font-family: Lato;
//   font-size: 2.5em;
//   font-style: normal;
//   font-weight: 500;
//   word-wrap: break-word;
//   line-height: 60px;

//   margin-top: 20px;

//   transition: 0.3s;
//   @media (max-width: 768px) {
//     margin-top: 16px;
//     line-height: 50px;
//   }
//   @media (max-width: 390px) {
//     margin-top: 12px;
//     line-height: 30px;
//   }
// `;

const SectionImageGroup = styled(Box)`
  display: flex;
  position: relative;
  width: 300px;
  /* aspect-ratio: 1; */
  margin-top: 30px;
  > img {
    filter: drop-shadow(0px 0px 12px black);
  }
  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 280px;
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
    width: 220px;
  }
  @media (max-width: 500px) {
    width: 200px;
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    width: 180px;
  }

  > img {
    z-index: 100;
  }
`;

// const ImageLeft = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 50%;
//   right: 180px;
//   transform: translateY(-50%);
//   width: 250px;
//   aspect-ratio: 1;
//   > img {
//     z-index: 99;
//   }

//   transition: 0.3s;
//   @media (max-width: 1440px) {
//     width: 250px;
//   }
//   @media (max-width: 1024px) {
//     width: 220px;
//     right: 160px;
//   }
//   @media (max-width: 768px) {
//     width: 192px;
//     right: 150px;
//   }
//   @media (max-width: 500px) {
//     width: 130px;
//     right: 100px;
//   }
//   @media (max-width: 390px) {
//     width: 120px;
//     right: 90px;
//   }
// `;

// const ImageRight = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 50%;
//   left: 180px;
//   transform: translateY(-50%);
//   width: 250px;
//   aspect-ratio: 1;
//   > img {
//     z-index: 98;
//   }

//   transition: 0.3s;
//   @media (max-width: 1440px) {
//     width: 250px;
//   }
//   @media (max-width: 1024px) {
//     width: 220px;
//     left: 160px;
//   }
//   @media (max-width: 768px) {
//     width: 192px;
//     left: 150px;
//   }
//   @media (max-width: 500px) {
//     width: 130px;
//     left: 100px;
//   }
//   @media (max-width: 390px) {
//     width: 120px;
//     left: 90px;
//   }
// `;

const SectionDropEffect = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonStart = styled(Box)`
  display: flex;
  width: 500px;
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
  cursor: not-allowed;
  user-select: none;
  transition: 0.2s;

  filter: opacity(0.3);
  /* &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  } */

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 450px;
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

const SectionNotify = styled(Box)`
  display: flex;
  width: 500px;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 60px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    width: 400px;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    width: 350px;
    margin-bottom: 40px;
  }
  @media (max-width: 500px) {
    width: 300px;
    margin-bottom: 30px;
  }
`;

const SectionInputEmail = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #ffffff60;

  transition: 0.3s;
  @media (max-width: 1024px) {
    padding: 0px 25px;
    height: 55px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 40px;
    padding: 0px 15px;
  }
`;

const InputEmail = styled(Box)`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  color: #fff;
  font-family: Lato;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

const ButtonSubmit = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 12px;
  border-radius: 12px;
  border: 1px solid #a9d100;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  user-select: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background-color: white;
    border: 1px solid white;
  }

  &:active {
    transform: scale(0.93);
    background-color: white;
    border: 1px solid white;
  }

  transition: 0.3s;
  @media (max-width: 1024px) {
    height: 55px;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 40px;
    font-size: 2.2rem !important;
  }
`;

export default ClaimRewards;
