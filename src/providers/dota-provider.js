import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const DotaContext = createContext({
  loading: false,
  heroes: [],
  filteredHeroes: [],
});

export const DotaProvider = ({ children }) => {
  const [dotaState, setDotaState] = useState({
    loading: false,
    heroes: [],
    filteredHeroes: [],
  });

  const filterHeroes = (query) => {
    let filtered = dotaState.heroes;
    if (query && query.length) {
      filtered = filtered.filter((hero) => {
        const heroName = hero.localized_name.toLowerCase();
        return heroName.includes(query.toLowerCase());
      });
    }
  
    setDotaState((prevState) => ({
      ...prevState,
      filteredHeroes: filtered,
    }));
  };

  const getHeroes = () => {
    setDotaState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    api
      .get(`heroStats`)
      .then(({ data }) => {
        setDotaState((prevState) => ({
          ...prevState,
          heroes: data,
          filteredHeroes: data,

        }));
      })
      .finally(() => {
        setDotaState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  const contextValue = {
    dotaState,
    getHeroes: useCallback(() => getHeroes(), []),
    filterHeroes
  };

  return (
    <DotaContext.Provider value={contextValue}>{children}</DotaContext.Provider>
  );
};
