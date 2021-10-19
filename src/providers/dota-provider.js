import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const DotaContext = createContext({
  loading: false,
  heroes: [],

});

export const DotaProvider = ({ children }) => {
  const [dotaState, setDotaState] = useState({
    loading: false,
    heroes: [],
  });

  const getHeroes = () => {
    setDotaState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    api
      .get(`heroStats`)
      .then(( heroes ) => {
        setDotaState((prevState) => ({
          ...prevState,
          heroes
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
  };

  return (
    <DotaContext.Provider value={contextValue}>
      {children}
    </DotaContext.Provider>
  );
};

