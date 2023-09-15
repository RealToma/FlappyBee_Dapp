import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GameSystemProvider } from "./Game/Context/GameSystem.context";
import { BirdProvider } from "./Game/Context/Bird.context";
// import { ObstacleProvider } from "./Game/Context/Obstacle.context";
import { ScoreProvider } from "./Game/Context/Score.context";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary as any}>
      <GameSystemProvider>
        <ScoreProvider>
          <BirdProvider>
            <App />
          </BirdProvider>
        </ScoreProvider>
      </GameSystemProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();