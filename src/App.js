import React from "react";
import { GlobalState } from "./Components/Global/GlobalState";
import LocalQuote from "./Components/LocalQuote/LocalQuote";

const App = () => {
  return (
    <GlobalState>
      <div>
        <LocalQuote />
      </div>
    </GlobalState>
  );
};

export default App;
