import { useContext } from "react";
import { dotaContext } from "../providers/dota-provider";

const useDota = () => {
  const { dotaState, getHeroes } = useContext(dotaContext);

  return { dotaState, getHeroes };
};

export default useDota;
