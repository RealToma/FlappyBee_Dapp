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
import Airdrop from "./pages/Airdrop/Airdop";
import "./actions/baseURL";
import "./index.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useEffect, useState } from "react";
import NFT from "./pages/NFT/NFT";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Home />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/nft" element={<NFT />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </StyledComponent>
      <NotificationContainer />
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

export default App;
