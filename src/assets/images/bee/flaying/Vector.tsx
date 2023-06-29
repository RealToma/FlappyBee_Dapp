import imgBee01 from "./Bee-01.png";
import imgBee02 from "./Bee-02.png";
import imgBee03 from "./Bee-03.png";

export const FlyingBee = ({ variant }: { variant: number }) => {
  switch (variant) {
    case 1:
      return (
        <img
          src={imgBee01}
          width={"100%"}
          style={{ transition: "none" }}
          alt=""
        ></img>
      );
    case 2:
      return (
        <img
          src={imgBee02}
          width={"100%"}
          style={{ transition: "none" }}
          alt=""
        ></img>
      );
    case 3:
      return (
        <img
          src={imgBee03}
          width={"100%"}
          style={{ transition: "none" }}
          alt=""
        ></img>
      );
    default:
      return <></>;
  }
};
