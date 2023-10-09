import { useEffect } from "react";

export const useOutsideDetector = (refs: any, handleAction: any) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      let res: any = [];
      refs.forEach((each: any, i: any) => {
        res.push(each.current && !each.current.contains(event.target));
        if (i === refs.length - 1 && !res.some((e: any) => e === false)) {
          handleAction(false);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, handleAction]);
};
