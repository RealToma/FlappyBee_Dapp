interface Link {
  name: string;
  link: string;
  flagNavigate: boolean;
}

export const dataTopNavigation: Link[] = [
  {
    name: "Home",
    link: "https://flappybee.com/",
    // link: "http://127.0.0.1:3001",
    flagNavigate: true,
  },
  {
    name: "Play",
    link: "/play",
    flagNavigate: false,
  },
  {
    name: "Airdrop",
    link: "/airdrop",
    flagNavigate: false,
  },
  {
    name: "Stake",
    link: "/stake",
    flagNavigate: false,
  },
  {
    name: "NFT",
    link: "/stake",
    flagNavigate: false,
  },
  {
    name: "Leaderboard",
    link: "/leaderboard",
    flagNavigate: false,
  },

  {
    name: "Rewards",
    link: "/rewards",
    flagNavigate: false,
  },
  {
    name: "Settings",
    link: "/settings",
    flagNavigate: false,
  },
];
