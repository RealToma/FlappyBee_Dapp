import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameSystemProvider } from "./Game/Context/GameSystem.context";
import { BirdProvider } from "./Game/Context/Bird.context";
import { ObstacleProvider } from "./Game/Context/Obstacle.context";
import { ScoreProvider } from "./Game/Context/Score.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GameSystemProvider>
      <ScoreProvider>
        <BirdProvider>
          <App />
        </BirdProvider>
      </ScoreProvider>
    </GameSystemProvider>
  </React.StrictMode>
);
