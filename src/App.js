import React, { useEffect } from "react";
import Header from "./components/header";
import Heroes from "./components/heroes";
import { ResetCSS } from "./global/resetCSS";
import useDota from "./hooks/dota-hooks";
import SearchBar from "./components/searchbar";

function App() {
  const {getHeroes} = useDota() 
  useEffect(()=>{
    getHeroes()
  },[getHeroes])
  return (
    <>
      <ResetCSS />
      <Header />
      <SearchBar />
      <Heroes />
    </>
  );

}

export default App;
