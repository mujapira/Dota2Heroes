import React from "react";
import * as S from "./styled";

const Card = (props) => {
  return (
    <S.Container>
      <S.Tittle>{props.tittle}</S.Tittle>

      <S.ContainerImg src={props.img} alt=" Hero Name " />
    </S.Container>
  );
};

export default Card;

//https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png
