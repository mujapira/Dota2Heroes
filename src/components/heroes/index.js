import React, { useEffect } from "react";
import * as S from "./styled";
import useDota from "../../hooks/dota-hooks";
import Card from "../card/index";

const Heroes = () => {
  const { dotaState } = useDota();


  return (
    <S.List>
      {dotaState.filteredHeroes.map((hero) => {
        return (
          <Card
            key={hero.id}
            tittle={hero.localized_name}
            img={`https://steamcdn-a.akamaihd.net/${hero.img}`}
          />
        );
      })}
    </S.List>
  );
};

export default Heroes;
