import { Box } from "@mui/material";
import styled from "styled-components";
import { textTermsOfUse } from "../../data/TermsOfUse";

const TermsOfUse = () => {
  return (
    <StyledComponent>
      <TextTitle>Terms of Use</TextTitle>
      <TextUpdate>Last Updated: October 1, 2023. (01/10/2023)</TextUpdate>
      <SectionContent>
        {textTermsOfUse.map((each, index) => {
          return (
            <TextEachRow key={index}>
              <TextHead>{each.textHead}</TextHead>
              <TextBody>{each.textBody}</TextBody>
            </TextEachRow>
          );
        })}
      </SectionContent>
      <TextFooter>
        By using our services, you acknowledge that you have read, understood,
        and agree to be bound by these Terms of Service.
      </TextFooter>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: rgba(0, 61, 40, 1);
  padding: 80px 60px;
  box-sizing: border-box;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 70px 30px;
  }
  @media (max-width: 1024px) {
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
  @media (max-width: 390px) {
    padding: 40px 20px;
  }
`;

const TextTitle = styled(Box)`
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: Rowdies;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    line-height: 50px;
  }
  @media (max-width: 1024px) {
    line-height: 40px;
  }
  @media (max-width: 768px) {
    line-height: 30px;
  }
  @media (max-width: 390px) {
    line-height: 20px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 56px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 20px;
  }
`;

const TextEachRow = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 35px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-bottom: 30px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    margin-bottom: 25px;
  }
  @media (max-width: 390px) {
    margin-bottom: 20px;
  }
`;

const TextHead = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.4rem;

  transition: 0.3s;
  @media (max-width: 390px) {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const TextBody = styled(Box)`
  color: #fff;
  font-family: Lato;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.4rem;

  transition: 0.3s;
  @media (max-width: 390px) {
    font-size: 12px;
  }
`;

const TextFooter = styled(Box)`
  color: #fff;
  font-family: Rowdies;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4rem;
  margin-bottom: 60px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    margin-bottom: 25px;
  }
  @media (max-width: 390px) {
    margin-bottom: 20px;
  }
`;

const TextUpdate = styled(Box)`
  text-align: center;
  color: #fff;
  font-family: Rowdies;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 300;
  line-height: 4rem;

  margin: 30px 0px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin: 28px 0px;
  }
  @media (max-width: 1024px) {
    margin: 25px 0px;
  }
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
  @media (max-width: 500px) {
    margin: 18px 0px;
  }
  @media (max-width: 390px) {
    margin: 16px 0px;
  }
`;

export default TermsOfUse;
