import React from "react";
import Header from "./components/header";
import Heroes from "./components/heroes";
import { ResetCSS } from "./global/resetCSS";
import { DotaProvider } from "./providers/dota-provider";

function App() {
  return (
    <>
      <DotaProvider>
        <ResetCSS />
        <Header />
        <Heroes />
      </DotaProvider>
    </>
  );
}

export default App;
