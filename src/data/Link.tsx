interface Link {
  name: string;
  link: string;
  flagNavigate: boolean;
  flagSubLink: boolean;
  sublink?: any;
}

export const dataTopNavigation: Link[] = [
  {
    name: "Home",
    link: "https://flappybee.com/",
    // link: "http://127.0.0.1:3001",
    flagNavigate: true,
    flagSubLink: false,
  },
  {
    name: "Play",
    link: "/play",
    flagNavigate: false,
    flagSubLink: false,
  },
  // {
  //   name: "Free Mint",
  //   link: "/free_mint",
  //   flagNavigate: false,
  //   flagSubLink: false,
  // },
  {
    name: "Free Mint",
    link: "/free_mint",
    flagNavigate: false,
    flagSubLink: true,
    sublink: [
      {
        name: "Rules",
        link: "/mint_rules",
      },
      {
        name: "Claim Rewards",
        link: "/claim_rewards",
      },
    ],
  },
  // {
  //   name: "Airdrop",
  //   link: "/airdrop",
  //   flagNavigate: false,
  // },
  {
    name: "Stake",
    link: "/stake",
    flagNavigate: false,
    flagSubLink: true,
    sublink: [
      {
        name: "Dashboard",
        link: "/dashboard",
      },
      {
        name: "Stake",
        link: "/stake",
      },
      {
        name: "Validator",
        link: "/validator",
      },
    ],
  },
  {
    name: "Marketplace",
    link: "/nft",
    flagNavigate: false,
    flagSubLink: false,
  },
  // {
  //   name: "Leaderboard",
  //   link: "/leaderboard",
  //   flagNavigate: false,
  //   flagSubLink: false,
  // },
  {
    name: "Leaderboard",
    link: "/leaderboard",
    flagNavigate: false,
    flagSubLink: true,
    sublink: [
      {
        name: "Premium",
        link: "/leaderboard_premium",
      },
      {
        name: "Free",
        link: "/leaderboard_free",
      },
    ],
  },
  {
    name: "Rewards",
    link: "/rewards",
    flagNavigate: false,
    flagSubLink: false,
  },
  // {
  //   name: "Settings",
  //   link: "/settings",
  //   flagNavigate: false,
  //   flagSubLink: false,
  // },
];
