import { Box } from "@mui/material";
import styled from "styled-components";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./Game/Game";

const App = () => {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </StyledComponent>
    </BrowserRouter>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
