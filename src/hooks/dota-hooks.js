import { useContext } from "react";
import { DotaContext } from "../providers/dota-provider";

const useDota = () => {
  const { dotaState, getHeroes, filterHeroes } = useContext(DotaContext);

  return { dotaState, getHeroes, filterHeroes };
};

export default useDota;

