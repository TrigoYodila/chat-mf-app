import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import "./index.scss";
import { Layout } from "./Layout";

const App = () => (
  <Layout>
    <Routes>
      <Route path="" element={""}/>
      <Route path=":conversationId" element={""} />
    </Routes>
  </Layout>
);
ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById("app")
);
