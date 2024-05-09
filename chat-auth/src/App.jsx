import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { UserMenu } from "./components/UserManu/UserMenu";

const App = () => (
  <div className="max-w-2xl mx-auto mt-10">
     <UserMenu />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
