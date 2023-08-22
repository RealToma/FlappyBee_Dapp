import { Box } from "@mui/material";
import styled from "styled-components";
import { shortAddress } from "../libs/Functions";
import imgLeaderboardTop from "../assets/images/background/leaderboardTop.svg";
import imgLeaderboardNormal from "../assets/images/background/leaderboardNormal.svg";

const TableLeaderboard = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionTableHead>
        <TextHeadCell flex="1" justifyContent="center">
          #
        </TextHeadCell>
        <TextHeadCell flex="4">Wallet</TextHeadCell>
        <TextHeadCell flex="2">Score</TextHeadCell>
      </SectionTableHead>
      {data?.map((each: any, index: any) => {
        return (
          <RowEach key={index} active={index === 0 ? 1 : 0}>
            <TextRowCell
              flex="1"
              justifyContent="center"
              active={index === 0 ? 1 : 0}
            >
              {index + 1}
            </TextRowCell>
            <TextRowCell flex="4" active={index === 0 ? 1 : 0}>
              {shortAddress(each.addressWallet)}
            </TextRowCell>
            <TextRowCell flex="2" active={index === 0 ? 1 : 0}>
              {each.score}
            </TextRowCell>
          </RowEach>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionTableHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TextHeadCell = styled(Box)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 4em;
  font-family: Rowdies;
  font-weight: 700;
  line-height: 60px;
`;

const TextRowCell = styled(Box)<any>`
  display: flex;
  align-items: center;
  font-size: 3.6em;
  font-family: Lato;
  font-weight: 700;
  line-height: 46px;
  color: ${({ active }: any) => (active ? "#003D28" : "#FFF")};
`;

const RowEach = styled(Box)<any>`
  display: flex;
  width: 100%;
  height: 100px;
  background-image: ${({ active }: any) =>
    active ? `url(${imgLeaderboardTop})` : `url(${imgLeaderboardNormal})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  align-items: center;
  /* background-color: ${({ active }: any) =>
    active ? "#A9D100" : "#00583A"}; */
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(6px 6px 6px rgba(255, 255, 255, 0.3));
  }
  transition: 0.3s;

  @media (max-width: 1440px) {
    height: 90px;
    margin-top: 18px;
  }
  @media (max-width: 1024px) {
    height: 70px;
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    height: 50px;
    margin-top: 12px;
  }
`;

export default TableLeaderboard;
