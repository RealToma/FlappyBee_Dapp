import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonTop from "../../assets/images/buttons/topbar.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuMobileSubLink = ({
  active,
  index,
  setFlagLink,
  data,
  setFlagClickedMenu,
}: any) => {
  const [flagClickDown, setFlagClickDown] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledComponent>
      <SectionParent
        onClick={() => {
          setFlagLink(index);
          setFlagClickDown(!flagClickDown);
        }}
        active={active ? 1 : 0}
      >
        <TextDropLink>{data.name}</TextDropLink>
        <IconDropDown onClick={() => {}}>
          {flagClickDown ? <FaAngleUp /> : <FaAngleDown />}
        </IconDropDown>
      </SectionParent>

      {!flagClickDown ? (
        <></>
      ) : (
        <SectionDropDown>
          {data.sublink.map((each: any, index: any) => {
            return (
              <EachRowText
                key={index}
                active={active ? 1 : 0}
                onClick={() => {
                  navigate(each.link);
                  setFlagClickedMenu(false);
                  setFlagClickDown(false);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {each.name}
              </EachRowText>
            );
          })}
        </SectionDropDown>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionParent = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  height: 40px;
  padding: 0px 35px;
  box-sizing: border-box;
  background-color: ${({ active }: any) => (active ? "#003D28" : "unset")};
  color: ${({ active }: any) => (active ? "white" : "#003D28")};
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  line-height: 3.4em;
  margin-bottom: 10px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: white;
  }
`;

const TextDropLink = styled(Box)`
  display: flex;
`;

const IconDropDown = styled(Box)`
  display: flex;
  margin-left: 10px;
  font-size: 3.5rem;
  cursor: pointer;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
`;

const EachRowText = styled(Box)`
  display: flex;
  width: 100%;
  height: 30px;
  padding: 0px 60px;
  box-sizing: border-box;
  align-items: center;
  color: #003D28;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 3em;
  line-height: 3em;
  margin-bottom: 10px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: white;
  }
`;

export default MenuMobileSubLink;
