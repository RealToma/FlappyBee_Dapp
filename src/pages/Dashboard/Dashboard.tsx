import { Box } from "@mui/material";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <StyledComponent>
      <SectionTab></SectionTab>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #003d28;
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
`;

export default Dashboard;
