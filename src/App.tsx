import { Box } from "@mui/material";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Home />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </StyledComponent>
      <NotificationContainer />
    </BrowserRouter>
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
