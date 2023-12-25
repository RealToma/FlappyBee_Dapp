import { Box } from "@mui/material";
import styled from "styled-components";
// import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { dataTxHistory } from "../../data/Transactions";
import { TextStakeTitle } from "../../components/Text/TextStakeTitle";

const TxHistory = () => {
  return (
    <StyledComponent>
      <SectionSearchTx>
      <TextStakeTitle text="All Transactions" />
        <InputSearchTx>
          <IconSearch>
            <FaSearch />
          </IconSearch>
          <InputSearch component="input" placeholder="Search ..."></InputSearch>
        </InputSearchTx>
      </SectionSearchTx>
      <SectionAssetsDetails>
        <TableRowAssetsHead>
          <TableRowNo></TableRowNo>
          <TableRowEachHead flex="1.5">Tx ID</TableRowEachHead>
          <TableRowEachHead flex="1">Date</TableRowEachHead>
          <TableRowEachHead flex="1">Type</TableRowEachHead>
          <TableRowEachHead flex="1.5">Comment</TableRowEachHead>
        </TableRowAssetsHead>
        {dataTxHistory.map((each, index) => {
          return (
            <TableRowAssets
              key={index}
              borderBottom={
                index !== dataTxHistory.length - 1
                  ? "1px solid #117754"
                  : "unset"
              }
              borderRadius={
                index !== dataTxHistory.length - 1
                  ? "unset"
                  : "0px 0px 16px 16px"
              }
            >
              <TableRowNo>{index + 1}</TableRowNo>
              <TableRowEachContent flex={"1.5"}>
                {each.TxID}
              </TableRowEachContent>
              <TableRowEachContent flex={"1"}>{each.date}</TableRowEachContent>
              <TableRowEachContent flex={"1"}>{each.type}</TableRowEachContent>
              <TableRowEachContent flex={"1.5"}>
                {each.comment}
              </TableRowEachContent>
            </TableRowAssets>
          );
        })}
      </SectionAssetsDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionSearchTx = styled(Box)`
  display: flex;
  align-items: center;
`;

const InputSearchTx = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  border: 2px solid white;
  height: 64px;
  margin-left: 20px;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #117754;
  background: #003d28;
  padding: 0px 22px;
  box-sizing: border-box;
`;

const IconSearch = styled(Box)`
  display: flex;
  color: #7cc2aa;
  font-size: 25px;
  margin-right: 10px;
`;

const InputSearch = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #7cc2aa;

  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  ::placeholder {
    color: #7cc2aa;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

const SectionAssetsDetails = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
  border: 1px solid #117754;
  border-radius: 16px;
`;

const TableRowAssetsHead = styled(Box)`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  background: #a9d100;
  border-bottom: 1px solid white;
  /* box-shadow: 0px -1px 0px 0px #edf2f7 inset; */
`;

const TableRowAssets = styled(Box)`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  background: #003624;
  /* border-bottom: 1px solid #117754; */
  /* box-shadow: 0px -1px 0px 0px #117754 inset; */
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #117754;
  }
`;

const TableRowNo = styled(Box)`
  display: flex;
  flex: 0.2;
  color: #7cc2aa;
  padding: 0px 15px;
  font-family: Lato;
  font-size: 2em;
  font-weight: 500;
  font-style: normal;
`;

const TableRowEachHead = styled(Box)`
  display: flex;
  color: #003d28;
  font-family: Rowdies;
  font-size: 2em;
  font-weight: 400;
`;

const TableRowEachContent = styled(Box)`
  display: flex;
  color: #7cc2aa;
  font-family: Lato;
  font-size: 2em;
  font-weight: 500;
  font-style: normal;
`;

export default TxHistory;
