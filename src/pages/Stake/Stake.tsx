import { Box } from "@mui/material";
import styled from "styled-components";
import { TextStakeTitle } from "../../components/Text/TextStakeTitle";
import CardFeaturedValidator from "../../components/Card/CardFeaturedValidator";
import { dataValidators } from "../../data/Validators";
import { FaSearch } from "react-icons/fa";
import { shortAddress } from "../../libs/Functions";
import ModalStake from "../../components/Modal/ModalStake";
import { useContext } from "react";
import { RefContext } from "../../libs/RefContext";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";

const Stake = () => {
  const { account } = useWeb3React();
  const { setFlagModalDelegate, setDataValidator }: any =
    useContext(RefContext);
  const handleDelegate = (each: any) => {
    if (account === undefined || account === null) {
      return NotificationManager.warning("Connect your wallet.", "", 3000);
    }
    setDataValidator(each);
    setFlagModalDelegate(true);
  };

  return (
    <StyledComponent>
      <SectionStakeType>
        <ButtonSelectType mr="30px">1. Select a Validator</ButtonSelectType>
        <ButtonSelectType>2. Stake / Delegate</ButtonSelectType>
      </SectionStakeType>
      <SectionTotalAssets>
        <TextStakeTitle text="Featured Validators" />
        <SecitonFeatureValidators>
          {dataValidators.map((each, index) => {
            if (each.flagFeatured) {
              return <CardFeaturedValidator key={index} data={each} />;
            } else {
              return <Box style={{ display: "none" }} key={index}></Box>;
            }
          })}
        </SecitonFeatureValidators>
      </SectionTotalAssets>
      <SectionTotalAssets>
        <SectionSearchTx>
          <TextStakeTitle text="All Validators" />
          <InputSearchTx>
            <IconSearch>
              <FaSearch />
            </IconSearch>
            <InputSearch
              component="input"
              placeholder="Search ..."
            ></InputSearch>
          </InputSearchTx>
        </SectionSearchTx>

        <SectionAssetsDetails>
          <TableRowAssetsHead>
            <TableRowNo></TableRowNo>
            <TableRowEachHead flex="1">Validator Name</TableRowEachHead>
            <TableRowEachHead flex="1">Address</TableRowEachHead>
            <TableRowEachHead flex="1">Pool Size</TableRowEachHead>
            <TableRowEachHead flex="1">Commision %</TableRowEachHead>
            <TableRowEachHead flex="0.5"></TableRowEachHead>
          </TableRowAssetsHead>
          {dataValidators.map((each, index) => {
            return (
              <TableRowAssets
                key={index}
                borderBottom={
                  index !== dataValidators.length - 1
                    ? "1px solid #117754"
                    : "unset"
                }
                borderRadius={
                  index !== dataValidators.length - 1
                    ? "unset"
                    : "0px 0px 16px 16px"
                }
              >
                <TableRowNo>{index + 1}</TableRowNo>
                <TableRowEachContent flex={"1"}>
                  {each.name}
                </TableRowEachContent>
                <TableRowEachContent flex={"1"}>
                  {shortAddress(each.addressWallet)}
                </TableRowEachContent>
                <TableRowEachContent flex={"1"}>
                  {each.sizePool}
                </TableRowEachContent>
                <TableRowEachContent flex={"1"}>
                  {each.commission}
                </TableRowEachContent>
                <TableRowEachContent flex={"0.5"}>
                  <ButtonDelegate
                    onClick={() => {
                      handleDelegate(each);
                    }}
                  >
                    Delegate
                  </ButtonDelegate>
                </TableRowEachContent>
              </TableRowAssets>
            );
          })}
        </SectionAssetsDetails>
      </SectionTotalAssets>
      <ModalStake />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionStakeType = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ButtonSelectType = styled(Box)`
  display: flex;
  width: fit-content;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #117754;
  padding: 0px 30px;
  box-sizing: border-box;
  background: #a9d100;
  color: #003d28;
  text-align: center;
  font-family: Rowdies;
  font-size: 2.2em;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 500px) {
    height: 40px;
  }
`;

const SectionTotalAssets = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
`;

const SecitonFeatureValidators = styled(Box)`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
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
  flex: 0.1;
  color: #7cc2aa;
  padding-left: 20px;
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

const ButtonDelegate = styled(Box)`
  display: flex;
  width: 125px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #117754;
  background: #a9d100;
  justify-content: center;
  align-items: center;
  color: #003624;

  text-align: center;
  font-family: Rowdies;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #a9d100;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default Stake;
