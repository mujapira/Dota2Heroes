import React from "react";
import * as S from "./styled";

const Header = () => {
  return (
    <>
      <S.WrapperLayout>
        <S.Header>
          <S.Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png"
            alt="Dota 2 logo"
          />
          <S.Tittle>DOTA 2</S.Tittle>
          <S.SubTittle>HEROES</S.SubTittle>
        </S.Header>
      </S.WrapperLayout>
    </>
  );
};

export default Header;
