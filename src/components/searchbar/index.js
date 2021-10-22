import React, { useState } from "react";
import * as S from "./styled";
import useDota from "../../hooks/dota-hooks";

const SearchBar = () => {
  const { filterHeroes } = useDota();
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    filterHeroes(search)
  };

  return (
    <>
      <S.WrapperLayout>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="Hero Name"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <S.Button type="submit">Search</S.Button>
        </S.Form>
      </S.WrapperLayout>
    </>
  );
};

export default SearchBar;
