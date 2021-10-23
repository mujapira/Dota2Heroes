import React from "react";
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
            hero={hero}
          />
        );
      })}
    </S.List>
  );
};

export default Heroes;
