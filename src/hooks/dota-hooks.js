import { useContext } from "react";
import { DotaContext } from "../providers/dota-provider";

const useDota = () => {
  const { dotaState, getHeroes } = useContext(DotaContext);

  return { dotaState, getHeroes };
};

export default useDota;
