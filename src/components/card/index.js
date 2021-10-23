import React from "react";
import * as S from "./styled";

const Card = ({ hero }) => {
  return (
    <S.Container>
      <S.Tittle>{hero.localized_name}</S.Tittle>

      <S.ContainerImg
        src={`https://steamcdn-a.akamaihd.net/${hero.img}`}
        alt=" Hero Name "
      />
      <S.Stats>
        <S.Attribute>
          <S.AttributeTitle>Attack:</S.AttributeTitle>
          {hero.attack_type}
        </S.Attribute>
        <S.Attribute>
          <S.AttributeTitle>Legs:</S.AttributeTitle>
          {hero.legs}
        </S.Attribute>
        <S.Attribute>
          <S.AttributeTitle>Range:</S.AttributeTitle>
          {hero.attack_range}
        </S.Attribute>
        <S.Attribute>
          <S.AttributeTitle>Roles:</S.AttributeTitle>
          {hero.roles.join(", ")}
        </S.Attribute>
      </S.Stats>
    </S.Container>
  );
};

export default Card;

//https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png
//str
//https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Strength_attribute_symbol.png/revision/latest/scale-to-width-down/20?cb=20180323111829
//agi https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2d/Agility_attribute_symbol.png/revision/latest/scale-to-width-down/20?cb=20180323111717
//int https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Intelligence_attribute_symbol.png/revision/latest/scale-to-width-down/20?cb=20180323111753
