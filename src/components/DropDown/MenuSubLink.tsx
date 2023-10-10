import { Box } from "@mui/material";
import styled from "styled-components";
import imgButtonTop from "../../assets/images/buttons/topbar.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useRef, useState } from "react";
import { useOutsideDetector } from "../Hooks/useOutsideDetector";
import { useNavigate } from "react-router-dom";

const MenuSubLink = ({ active, index, setFlagLink, data }: any) => {
  const [flagClickDown, setFlagClickDown] = useState(false);
  const refDropDown = useRef(0);
  const navigate = useNavigate();
  useOutsideDetector([refDropDown], () => setFlagClickDown(false));

  return (
    <StyledComponent
      onClick={() => {
        setFlagLink(index);
        setFlagClickDown(!flagClickDown);
      }}
      active={active ? 1 : 0}
      ref={refDropDown}
    >
      <TextDropLink>{data.name}</TextDropLink>
      <IconDropDown onClick={() => {}}>
        {flagClickDown ? <FaAngleUp /> : <FaAngleDown />}
      </IconDropDown>
      {!flagClickDown ? (
        <></>
      ) : (
        <SectionDropDown length={data.sublink.length}>
          {data.sublink.map((each: any, index: any) => {
            return (
              <EachRowText
                key={index}
                onClick={() => {
                  navigate(each.link);
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
  position: relative;
  width: fit-content;
  padding: 5px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-image: ${({ active }: any) =>
    active ? `url(${imgButtonTop})` : "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background-color: ${({ active }: any) =>
    active ? "#003D28" : "unset"}; */
  color: ${({ active }: any) => (active ? "white" : "#003D28")};

  font-family: "Rowdies";
  font-style: normal;
  font-weight: 300;
  font-size: 2em;
  line-height: 30px;
  margin-right: 20px;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: white;
  }

  @media (max-width: 1600px) {
    margin-right: 20px;
  }
  @media (max-width: 1440px) {
    margin-right: 10px;
    padding: 3px 8px;
    line-height: 27px;
  }
  @media (max-width: 1200px) {
    margin-right: 5px;
  }
  @media (max-width: 1024px) {
    padding: 0px 6px;
  }
`;

const TextDropLink = styled(Box)`
  display: flex;
`;

const IconDropDown = styled(Box)`
  display: flex;
  margin-left: 5px;
  font-size: 2.5rem;
  cursor: pointer;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: max-content;
  height: fit-content;
  bottom: ${({ length }: any) => length * -60 + "px"};
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 30px;
  background-image: url(${imgButtonTop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 10000;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 12px 24px;
  }
  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

const EachRowText = styled(Box)`
  height: 40px;
  width: fit-content;
  color: white;
  font-family: "Rowdies";
  font-style: normal;
  font-size: 2rem;
  line-height: 30px;
  color: white;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 6px white;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    height: 35px;
  }
  @media (max-width: 1024px) {
    height: 30px;
  }
`;

export default MenuSubLink;
