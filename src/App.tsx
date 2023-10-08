import { Box } from "@mui/material";
import styled from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./Game/Game";
import Layout from "./pages/Layout/Layout";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Rewards from "./pages/Rewards/Rewards";
import Stake from "./pages/Stake/Stake";
import Settings from "./pages/Settings/Settings";
// import Airdrop from "./pages/Airdrop/Airdop";
import "./actions/baseURL";
import "./index.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useEffect, useState } from "react";
import NFT from "./pages/NFT/NFT";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import imgButtonSmall from "./assets/images/buttons/HomeSmall.png";
import FreeMint from "./pages/FreeMint/FreeMint";
import Claim from "./pages/Claim/Claim";

const App = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playMusicBack, setPlayMusicBack] = useState(false);
  const [palyMusicGame, setPlayMusicGame] = useState(false);

  const musicFiles = [
    "/assets/music/home01.mp3",
    "/assets/music/home02.mp3",
    "/assets/music/home03.mp3",
  ];
  const playNextTrack = () => {
    if (currentTrackIndex < musicFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };
  const handlePlayMusic = () => {
    setPlayMusicBack(!playMusicBack);
  };

  const [isLoading, setLoading] = useState(true);

  const someRequest = () => {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) =>
      setTimeout(() => resolve(HashRouter), 1000)
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".content_ring");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  return (
    <HashRouter>
      <StyledComponent>
        <Layout setPlayMusicGame={setPlayMusicGame}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Home />} />
            <Route path="/free_mint" element={<FreeMint />} />
            <Route path="/claim" element={<Claim />} />
            {/* <Route path="/airdrop" element={<Airdrop />} /> */}
            <Route path="/stake" element={<Stake />} />
            <Route path="/nft" element={<NFT />} />
            <Route
              path="/game"
              element={<Game setPlayMusicGame={setPlayMusicGame} />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
        <ButtonPlayMusic onClick={() => handlePlayMusic()}>
          {playMusicBack ? <MdMusicOff /> : <MdMusicNote />}
          {playMusicBack && (
            <audio
              src={
                !palyMusicGame
                  ? musicFiles[currentTrackIndex]
                  : "/assets/music/play01.mp3"
              }
              autoPlay
              onEnded={playNextTrack}
            />
          )}
        </ButtonPlayMusic>
      </StyledComponent>
      <NotificationContainer />
      {/* <audio
        ref={(el: any) => audioRefs.current.push(el)}
        src="/assets/music/home01.mp3"
        loop
        autoPlay
      />
      <audio
        ref={(el: any) => audioRefs.current.push(el)}
        src="/assets/music/home02.mp3"
        loop
        autoPlay
      />
      <audio
        ref={(el: any) => audioRefs.current.push(el)}
        src="/assets/music/home03.mp3"
        loop
        autoPlay
      /> */}
    </HashRouter>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;

  .Toastify__toast {
    font-size: 35px !important;
  }
`;

const ButtonPlayMusic = styled(Box)`
  display: flex;
  position: fixed;
  width: 100px;
  aspect-ratio: 1;
  right: 50px;
  bottom: 50px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #511900;
  font-size: 6rem;
  z-index: 19998;
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
    right: 30px;
    bottom: 30px;
    width: 70px;
  }
  @media (max-width: 500px) {
    width: 55px;
    right: 20px;
    bottom: 20px;
  }
`;

export default App;
