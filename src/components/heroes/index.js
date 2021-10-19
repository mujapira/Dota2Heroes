import React from "react";
import * as S from "./styled";

const Heroes = () => {
  return (
    <>
      <S.List>
        <S.Container>
          <S.ContainerImg
            src=" https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png "
            alt=" Abaddon "
            />
            <S.Tittle>Abaddon</S.Tittle>
        </S.Container>
      </S.List>
    </>
  );
};

export default Heroes;
