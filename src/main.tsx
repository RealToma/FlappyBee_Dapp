import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameSystemProvider } from "./Game/Context/GameSystem.context";
import { BirdProvider } from "./Game/Context/Bird.context";
import { ObstacleProvider } from "./Game/Context/Obstacle.context";
import { ScoreProvider } from "./Game/Context/Score.context";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
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
