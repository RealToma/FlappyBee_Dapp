import { Box } from "@mui/material";
import styled from "styled-components";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./Game/Game";
import Layout from "./pages/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Rewards from "./pages/Rewards/Rewards";
import Stake from "./pages/Stake/Stake";
import Settings from "./pages/Settings/Settings";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary as any}>
      <BrowserRouter>
        <StyledComponent>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/play" element={<Home />} />
              <Route path="/stake" element={<Stake />} />
              <Route path="/game" element={<Game />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            limit={1}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </StyledComponent>
      </BrowserRouter>
    </Web3ReactProvider>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
