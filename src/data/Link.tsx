interface Link {
  name: string;
  link: string;
  flagNavigate: boolean;
}

export const dataTopNavigation: Link[] = [
  {
    name: "Home",
    link: "https://flappybee-website.netlify.app/",
    flagNavigate: true,
  },
  {
    name: "Play",
    link: "/play",
    flagNavigate: false,
  },
  {
    name: "Stake",
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
