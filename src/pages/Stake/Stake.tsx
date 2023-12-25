import { Box } from "@mui/material";
import styled from "styled-components";
import { TextStakeTitle } from "../../components/Text/TextStakeTitle";
import CardFeaturedValidator from "../../components/Card/CardFeaturedValidator";
import { dataValidators } from "../../data/Validators";

const Stake = () => {
  return (
    <StyledComponent>
      <SectionStakeType>
        <ButtonSelectType mr="30px">Select a Validator</ButtonSelectType>
        <ButtonSelectType>Stake / Delegate</ButtonSelectType>
      </SectionStakeType>
      <SectionTotalAssets>
        <TextStakeTitle text="Featured Validators" />
        <SecitonFeatureValidators>
          {dataValidators.map((each, index) => {
            if (each.flagFeatured) {
              return <CardFeaturedValidator key={index} data={each} />;
            } else {
              return <></>;
            }
          })}
        </SecitonFeatureValidators>
      </SectionTotalAssets>
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
`;

export default Stake;
