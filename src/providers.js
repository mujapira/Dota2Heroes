import React from "react";
import { DotaProvider } from "./providers/dota-provider";
import App from "./App";

function Providers() {
  return (
    <DotaProvider>
      <App />
    </DotaProvider>
  );
}

export default Providers;
