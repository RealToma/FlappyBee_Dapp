import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackHome from "../../assets/images/background/BGHome.png";
import imgButtonSmall from "../../assets/images/buttons/HomeSmall.png";
import imgButtonStart from "../../assets/images/buttons/HomeWide.png";
import imgLogoBee from "../../assets/images/Bee.png";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { checkWhiteList } from "../../actions/auth";
import { actionGetFreeMintCount } from "../../actions/freeMint";
// import useProgressiveImg from "../../components/Image/ImageLoadEffect";

const Home = () => {
  const navigate = useNavigate();
  const { account } = useWeb3React();

  // const [srcBackHome, { blur }] = useProgressiveImg(imgBackHome, imgBackHome);
  // console.log("blur:", blur);

  const handleStart = () => {
    if (account === undefined || account === null) {
      return NotificationManager.warning(
        "Please connect your wallet.",
        "",
        3000
      );
    }

    checkWhiteList(account).then((res) => {
      if (res.flagSuccess) {
        actionGetFreeMintCount(account).then((res1) => {
          if (res1.flagSuccess) {
            if (res1.count >= 3) {
              return NotificationManager.warning(
                "You can't play anymore. Your fee mint event has expired.",
                "",
                5000
              );
            } else {
              navigate("/game");
            }
          } else {
            return NotificationManager.warning(res1.msgError, "", 5000);
          }
        });
        // window.open("https://app.flappybee.com/#/game", "_self");
        return;
      } else {
        return NotificationManager.warning(
          "Oops....  it seems this address is not whitelisted. Please make sure to connect with a whitelisted address",
          // "You are not whitelisted!",
          "",
          5000
        );
      }
    });
  };
  // const handleAlert = () => {
  // if (!toast.isActive(toastId.current)) {
  //   toastId.current = toast.info("🐝 Coming soon.");
  // }
  // };

  return (
    <StyledComponent
    // srcBackHome={srcBackHome ? srcBackHome : srcBackHome}
    // style={{
    //   filter: !blur ? "blur(20px)" : "none",
    //   transition: !blur ? "none" : "filter 0.5s ease-out",
    //   backgroundImage: srcBackHome,
    // }}
    >
      <SectionTitle>
        <SectionTextTitle>
          <TextTitle>Flappy Bee</TextTitle>
        </SectionTextTitle>
        <SectionImageLogo>
          <img src={imgLogoBee} width={"100%"} height={"100%"} alt="" />
        </SectionImageLogo>
      </SectionTitle>
      <SectionButtonGroup>
        <ButtonStart
          onClick={() => {
            handleStart();
          }}
        >
          Start
        </ButtonStart>
        {/* <ButtonStart
          onClick={() => {
            handleStart();
          }}
        >
          Free Mint
        </ButtonStart> */}
      </SectionButtonGroup>

      <SectionSocialButton>
        <ButtonSocial>
          <FaShareAlt />
        </ButtonSocial>
        <ButtonSocial>
          <AiFillLike />
        </ButtonSocial>
      </SectionSocialButton>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  /* position: relative; */
  /* height: 100vh; */
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  background-image: url(${imgBackHome});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

const SectionTitle = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.3s;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ButtonSocial = styled(Box)`
  display: flex;
  width: 100px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #511900;
  font-size: 5rem;
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
    width: 90px;
  }
  @media (max-width: 1024px) {
    width: 80px;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
  @media (max-width: 390px) {
    width: 55px;
  }
`;

const SectionTextTitle = styled(Box)`
  display: flex;

  margin-right: 100px;

  filter: drop-shadow(7px 5px 0px #003d28);
  transition: 0.3s;
  @media (max-width: 1440px) {
    filter: drop-shadow(7px 5px 0px #003d28);
    margin-right: 70px;
  }
  @media (max-width: 1024px) {
    filter: drop-shadow(6px 4px 0px #003d28);
    margin-right: 50px;
  }
  @media (max-width: 768px) {
    filter: drop-shadow(5px 3px 0px #003d28);
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    margin-right: unset;
    margin-bottom: 25px;
  }
  @media (max-width: 500px) {
    filter: drop-shadow(3px 1px 0px #003d28);
  }
`;

const TextTitle = styled(Box)`
  font-size: 13em;
  font-family: Rowdies;
  /* identical to box height, or 100% */

  text-align: center;

  background: -webkit-linear-gradient(
    rgba(225, 255, 202, 1),
    rgba(169, 209, 0, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px #003d28;

  transition: 0.3s;
  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #003d28;
  }
`;

const SectionImageLogo = styled(Box)`
  display: flex;
  width: 200px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 170px;
  }
  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    width: 90px;
  }
  @media (max-width: 390px) {
    width: 90px;
  }
`;

const ButtonStart = styled(Box)`
  display: flex;
  width: 460px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonStart});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 7em;
  line-height: 90px;
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
    width: 400px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    width: 350px;
    height: 93px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 85px;
  }
  @media (max-width: 390px) {
    width: 235px;
    height: 66px;
  }
`;

const SectionSocialButton = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
`;

export default Home;
